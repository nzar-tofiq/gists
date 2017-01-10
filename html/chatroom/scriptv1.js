//Register a new user
//I wonder if we have to use dbvars.php to register someone on the database
var username = "";
var password = "";
var loggedin = false;
var registered = false;
var doTimeout = true;
var lastid = 0;

window.addEventListener("load", function() {

	
	document.getElementById("registerForm").addEventListener("submit", function(){
		//event.preventDefault seems to be a more affective way to stop the browser refreshing before the code is excecuted
		event.preventDefault();
		//press enter-key to triger this event as well as clicking on the submit button
		event.keyCode = '13';
		var firstname = document.getElementById("firstName").value;
		var surname = document.getElementById("surName").value;
		var sBtn = document.getElementById("submitRegDetails");
		//this userName is different from theglobal var username, for validation purposes
		var userName = document.getElementById("newUserName").value;
		username = userName;
		//this passWord is different from the global var password, for validation purposes
		var passWord;
		var pass1 = document.getElementById("password1").value;
		var pass2 = document.getElementById("password2").value;
		if (pass1 === pass2 && pass1 !== "" && userName !== "") {
			passWord = pass1;
			var newUser = 'username='+userName+'&password='+passWord+'&firstname='+firstname+'&surname='+surname;
			registerNewUser(newUser);
		} else {
			console.warn("Invalid user input Username/Password");
		}	
	});
	
	document.getElementById("loginForm").addEventListener("submit", function(){
		event.preventDefault();
		event.keyCode = '13';
		username = document.getElementById("username").value;
		password = document.getElementById("password").value;
		if (username === null || username == "" || password === null || password == ""){
			console.warn("check username and password");
			document.getElementById("username").value = "";
			document.getElementById("password").value = "";
		}else{		
			login(username,password);
		}
	});
	
	document.getElementById("sendMsg").addEventListener("submit",function(){
		event.preventDefault();
		event.keyCode = '13';
		var message = document.getElementById("sendMessage").value;
		var from = username;
		var msg = 'from='+from+'&message='+message;
		if(message !== null && message != "" && from !== null && from != "" ){
			sendChat(msg);
		}else{
			console.warn("either message, from or both are empty");
		}
	});
	
	var startBtn = document.getElementById("startBtn");
	startBtn.addEventListener("click", function() {
		doTimeout = true;
		getChat();
	}, true);
	var stopBtn = document.getElementById("stopBtn");
	stopBtn.addEventListener("click", function() {
		doTimeout = false;
	}, true);
	
	document.getElementById("showMembers").addEventListener("click", getUsers,false);
});

//Register
function registerNewUser(newUser){ 
	var xhRegister = null;
	//try to find if the newUser data is all correct
	console.log(newUser);
	if (window.ActiveXObject) {
		xhRegister = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) {
		xhRegister = new XMLHttpRequest();
	}
	if (xhRegister) {
		xhRegister.open("POST", "http://itsuite.it.brighton.ac.uk/john10/ci227/a1/register.php?", true);
		//I don't really know what this line does but it seems to make the request work
		xhRegister.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhRegister.send(newUser);
		xhRegister.onreadystatechange = function() {
			if (xhRegister.readyState === 4)  {
				if(xhRegister.status === 200){
					if(xhRegister.responseText === "ok"){
						console.log("Registered");
						registered = true;
						document.getElementById("feedback").innerHTML = "Registration for user "+username+ " was successful!!";
						//when registerd login with the same username and password instatantly
						//login(username,password);
						//document.getElementById("registerPage").style.display = "none";
					}else{
						console.warn(xhRegister.responseText);
						document.getElementById("password1").value = "";
						document.getElementById("password2").value = "";
					} 
				}
			}
		};
	}
}

//Login

function login(username,password) {
	var xhLogIn = null;
	if (!username || username === "" || !password || password === ""){
		loggedin = false;
		username = document.getElementById("username").value;
		password = document.getElementById("password").value;
		login(username,password);
	}else{
		if (window.ActiveXObject) {
			xhLogIn = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			xhLogIn = new XMLHttpRequest();
		}
		if (xhLogIn) {
			xhLogIn.open("GET", "http://itsuite.it.brighton.ac.uk/john10/ci227/a1/login.php?username=" + username + "&password=" + password, true); 
			xhLogIn.send();
			xhLogIn.onreadystatechange = function() {
				if (xhLogIn.readyState === 4) {
					if(xhLogIn.status === 200){
						if(xhLogIn.responseText === "ok"){
							registered = true;
							loggedin = true;
							console.info("registered="+registered+", loggedin="+loggedin);
							document.getElementById('chat-link').click();
							//document.getElementById("loginPage").style.display = "none";
							//document.getElementById("chatRoomPage").style.display = "block";
							getChat();
							getUsers();
						}else{
							console.warn(xhLogIn.responseText);
						}
					}
				}
			};
		} else {
			console.error("Can't continue");
		}
	}
}

//Getchat
function getChat() {
	var messagesBox = document.getElementById("messagesBox");
	var contentTxt, textNode, xhr, timestamp, from;

	if(window.ActiveXObject) {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	} else if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	if (xhr) {
		xhr.open("GET", "http://itsuite.it.brighton.ac.uk/john10/ci227/a1/channel.php?username=guest&lastid=" + lastid, true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var value = xhr.responseXML;
					var msgs = value.getElementsByTagName('message');
					console.log("Processing ", msgs.length, " messages");
					for (var i = 0; i < msgs.length; i++) {
						var id = parseInt(msgs[i].getAttribute("id"));
						var para = document.createElement("p");
						para.setAttribute("class", "bubble");
						contentTxt = msgs[i].getElementsByTagName("content")[0].firstChild.nodeValue;
						msgTime = msgs[i].getElementsByTagName("timestamp")[0].firstChild.nodeValue;
						msgFrom = msgs[i].getElementsByTagName("from")[0].firstChild.nodeValue;
						para.innerHTML = "Message from: "+msgFrom+"<br/>Message: "+contentTxt+"<br/>Sent at: "+msgTime+"<br/>Id: "+id+"<br/>";
						messagesBox.appendChild(para);
						messagesBox.scrollTop = messagesBox.scrollHeight;
						
						if (lastid < id) {
							//console.log("lastid: "+lastid+"id: "+id)
							lastid = id;
						}
					}
				  if (doTimeout === true) {
					  setTimeout(getChat, 1000);
				  }	
					  }else{
						console.warn(xhr.responseXML);
				}
			}
		};
	} else {
		console.error("Can't continue");
	}
}

//Send message
function sendChat(msg){
	var xhp = null;
	if(loggedin === true){
		if(window.ActiveXObject) {
			xhp = new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest) {
			xhp = new XMLHttpRequest();
		}
		if(xhp) {
				xhp.open("POST", "http://itsuite.it.brighton.ac.uk/john10/ci227/a1/send.php?", true);
				xhp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhp.send(msg);
				xhp.onreadystatechange = function(){
					if(xhp.readyState === 4){
						if(xhp.status === 200){
							if(xhp.responseText === "ok"){
								console.info("message sent");
								document.getElementById("sendMessage").value = "";
							}else{
								console.log(xhp.responseText);
							}
						}
					}
				};
		} else {
			console.error("Can't continue");
		}
	}else{
		console.warn("You have to login before you can send a message");
	}
}

//Get userlist
function getUsers(){
	var users = null;
	var xhUserList;
	var membersBox = document.getElementById("membersOnLine");
	document.getElementById("membersOnLine").innerHTML = "";
	var para = document.createElement("p");
	if(window.ActiveXObject) {
		xhUserList = new ActiveXObject("Microsoft.XMLHTTP");
	} else if(window.XMLHttpRequest) {
		xhUserList = new XMLHttpRequest();
	}
	if(xhUserList){
		console.log("xhuserlist created");
		xhUserList.open("GET", "http://itsuite.it.brighton.ac.uk/john10/ci227/a1/list.php", true);
		xhUserList.send();
		xhUserList.onreadystatechange = function() {
			if (xhUserList.readyState === 4) {
				if (xhUserList.status === 200) {
					var xmlResp = xhUserList.responseXML;
					var users = xmlResp.getElementsByTagName("user");
					for (var i = 0; i <  xmlResp.getElementsByTagName("user").length; i++) {
						para.innerHTML = "";
						console.log("getting users");
						var user = users[i].firstChild.nodeValue;
						var lastseen = users[i].getAttribute('lastseen');
						para.setAttribute("class", "users");
						para.innerHTML ="<br/>User: "+user+"<br/>Last-seen: "+lastseen+"<br/>";
						console.log("User: "+user+"Last-seen: "+lastseen);
						membersBox.appendChild(para);
					}
					setTimeout(getUsers, 10*60*1000);
				}
			} 
		};
	}else{
		console.log("Can't continue");	
	}
}