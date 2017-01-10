var username, password, registered = false;

window.addEventListener("load", function() {
	$("#login_btn").click(function(){
		window.location = "http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/login.html"
	});
	document.getElementById("registerForm").addEventListener("submit", function(){
		//event.preventDefault seems to be a more affective way to stop the browser refreshing before the code is excecuted
		event.preventDefault();
		//press enter-key to trigger this event as well as clicking on the submit button
		event.keyCode = '13';
		var username = document.getElementById("reg_username").value;
		var allegiance = document.getElementById("reg_alliance").options[document.getElementById("reg_alliance").selectedIndex].text;
		//this passWord is different from the global var password, for validation purposes
		var pass1 = document.getElementById("reg_password").value;
		var pass2 = document.getElementById("reg_con_password").value;
		if (pass1 === pass2 && pass1 !== "" && username !== "" && pass1 !== " " && username !== " ") {
			password = pass1;
			var newUser = 'username='+username+'&allegiance='+allegiance+'&password='+password;
			registerNewUser(newUser);
		} else {
			document.getElementById("feedback").style.display = "inline-block";
			document.getElementById("feedback").innerHTML = "Invalid user input Username/Password!";
		}	
	});
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
		xhRegister.open("POST", "http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/register.php?", true);
		//I don't really know what this line does but it seems to make the request work
		xhRegister.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhRegister.send(newUser);
		xhRegister.onreadystatechange = function() {
			if (xhRegister.readyState === 4)  {
				if(xhRegister.status === 200){
					console.log(xhRegister.responseXML)
					if(xhRegister.responseText === "ok"){
						console.log("Registered");
						registered = true;
						username = null;
						document.getElementById("feedback").style.display = "inline-block";
						document.getElementById("registerForm").style.display = "none";
						document.getElementById("feedback").innerHTML = "Registration was successful!";
						window.location = "login.html";
					}else{
						console.warn(xhRegister.responseText);
						document.getElementById("feedback").style.display = "inline-block";
						document.getElementById("feedback").innerHTML = "Registration failed check details or try new Username!";
						document.getElementById("password1").value = "";
						document.getElementById("password2").value = "";
					} 
				}
			}
		};
	}
}