var episodeid, loggedin, username, hasReviewed = false;
$(document).ready(function() {
	$("#logout_btn").click(function(){
		location.reload();
		$.ajax("http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/logout.php",function(data){});
	});
	username = $("#username").data("username");
	//$("#username").html("<p>Hi "+username+"</p>");
	$("#season4btn").attr("disabled","disabled");
	
		$(".submitbtn").each(function() {
		$(this).button();
		});
		$("#logout_btn").button();
		$("#login_btn").button();
		$("#register_btn").button();
		$("#writereview").button();
		$("#reviewForm").hide();
		$("#reviewtitle").hide();
		$("#writereview").hide();	
		$("#episode").hide();
		$("#s1").slideUp();
		$("#s2").slideUp();
		$("#s3").slideUp();
		
		$("#seasonNav button").each(function() {
		$(this).button();
		});
		
		$("#s1 li").each(function() {
		$(this).button().css('background','black');
		});
		
		$("#s2 li").each(function() {
		$(this).button().css('background','black');
		});
		
		$("#s3 li").each(function() {
		$(this).button().css('background','black');
		});
		
		$(".episodebtn").each(function() {
			$(this).click(function() {
				var exists = $(this).attr("data-exists");
				if(exists == "yes"){
					episodeid = $(this).attr('id');
				} else if (exists == "no") {
					episodeid = "error"
					}
				$.getJSON(" http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/getepisode.php?episodeid="+episodeid,sortEpisode);
				$("#episode").show();
				$("#reviewtitle").show();
				console.log("getting reviews");
				getReviews();
			});
		});
		
		$("#season1btn").click(function() {
			$("#s2").slideUp();
			$("#s3").slideUp();
			$("#s1").slideDown("slow").css("display","visible");
		});
		
		$("#season2btn").click(function() {
			$("#s1").slideUp();
			$("#s3").slideUp();
			$("#s2").slideDown("slow");
		});
		
		$("#season3btn").click(function() {
			$("#s1").slideUp();
			$("#s2").slideUp();
			$("#s3").slideDown("slow");
		});
		
		$("#login_btn").click(function(){
			window.location.replace('login.html');	
		});
		
		$("#writereview").click(function(){
			$("#reviewForm").show();
		});
		
		$("#reviewForm").submit(function(e){
			var userName = username;
			e.preventDefault();
			$.post(' http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/addreview.php',{
				"episodeid" : episodeid,
				"username": userName,
				"reviewtext": $("#reviewtext").val(),
				"rating" : $("#rating").val(),
				"hatingkingjeofery": $("#hatingjoffrey").val(),
				"bloodspill": $("#bloodspill").val()
			},function(response){
				if(response ==='ok'){
				$("#writereview").attr("disabled","disabled");
					$("#reviewForm").hide();
					getReviews();
				}
				else{ 			
				document.getElementById("reviewfeedback").style.display = "inline-block";
				document.getElementById("reviewfeedback").innerHTML = "<p>Like Eddard Stark going to King's Landing you have made a mistake. Please check you have entered all fields correctly.</p>";
				}
			});
		});
		
	$("#loginForm").submit(function(e){
		e.preventDefault();
		e.keyCode = '13';
		username = $("#log_username").val();
		password = $("#log_password").val();
		login(username,password)
	});
	
	$("#register_btn").click(function(){
		window.location = "register.html"
	});
	
	$("#logout_btn").click(function(){
		window.location = "http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/logout.php"
	});
	
	function getReviews(){
		$.getJSON("http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/getreviews.php?episodeid="+episodeid,sortReview);
		};
	
	$("#registerForm").submit(function(e){
		//event.preventDefault seems to be a more affective way to stop the browser refreshing before the code is excecuted
		e.preventDefault();
		//press enter-key to trigger this event as well as clicking on the submit button
		e.keyCode = '13';
		var username = document.getElementById("reg_username").value;
		var allegiance = document.getElementById("reg_alliance").options[document.getElementById("reg_alliance").selectedIndex].text;
		//this passWord is different from the global var password, for validation purposes
		var pass1 = document.getElementById("reg_password").value;
		var pass1 = document.getElementById("reg_con_password").value;
		if (pass1 === pass1 && pass1 !== "" && username !== "" && pass1 !== " " && username !== " ") {
			password = pass1;
			var newUser = 'username='+username+'&allegiance='+allegiance+'&password='+password;
			document.getElementById("registerfeedback").style.display = "inline-block";
			document.getElementById("registerfeedback").innerHTML = "<p>You have successfully registered, redirecting!</p>";
			setTimeout(registerNewUser(newUser), 3000);
		} else {
			document.getElementById("registerfeedback").style.display = "inline-block";
			document.getElementById("registerfeedback").innerHTML = "<p>There was an error with registration please try again!</br>'This character wasn't in the books?!'</p>";
		}	
	});
	
}, true);
	
function sortEpisode(data){
	$("#episode").attr("data-episodeid", data.episodeid);
	episodeid = $("#episode").attr("data-episodeid");
	$("#episodename").text(data.name);
	$("#episodedescription").text(data.description);
	$("#broadcast").text(data.firstbroadcast);
	$("#episodepic").attr("src",data.imgsrc);
	$("#episodepic").attr("alt","game of thrones "+data.name);
}
	
function sortReview(data){
	console.log(data);
	$("#writereview").show();
	$("#season4btn").removeAttr("disabled");
	$("#reviews").html("");
	for(var i =0;i < data.reviews.length; i++){
		var newDiv = $('<div>');
		var str = "";
		str = "<h4>Username: </h4><p>"+ data.reviews[i].username + "</p>";
		str += "<h4>Alleginace: </h4><p>"+ data.reviews[i].allegiance + "</p></br>";
		str += "<h4>Review: </h4><p>"+ data.reviews[i].reviewtext + "</p></br>";
		str += "<h4>Episode Rating: </h4><p>"+data.reviews[i].rating + "</p>"; 
		str += "<h4>Joffery Hate: </h4><p>"+data.reviews[i].hatingkingjeofery + "</p>";
		str += "<h4>Blood Spill: </h4><p>"+data.reviews[i].bloodspill + "</p>";
		newDiv.html(str);
		$("#reviews").append(newDiv);
			 //check if user has reviews this episode
			if(data.reviews[i].username == username){
				console.log("button disabled");
				$("#writereview").attr("disabled","disabled");
			}
	}

};

function login(username,password) {
	$.get("http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/login.php?username=" + username + "&password=" + password,function(data){
		if(data === "ok"){
			document.getElementById("loginfeedback").style.display = "inline-block";
			document.getElementById("loginfeedback").innerHTML = "<p>You have successfully logged in, redirecting!</p>";
			setTimeout(window.location = "index.php", 3000);
		}else{
			$("#loginfeedback").css("display", "inline-block");
			$("#loginfeedback").html("<p>Login Failed! "+data+"</p>");
		}
	});
};

function registerNewUser(newUser){ 
	var xhRegister = null;
	//try to find if the newUser data is all correct
	//console.log(newUser);
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
						document.getElementById("registerfeedback").style.display = "inline-block";
						document.getElementById("registerForm").style.display = "none";
						document.getElementById("registerfeedback").innerHTML = "Registration was successful!";
						window.location = "login.html";
					}else{
						console.warn(xhRegister.responseText);
						document.getElementById("registerfeedback").style.display = "inline-block";
						document.getElementById("registerfeedback").innerHTML = "Registration failed check details or try new Username!";
						document.getElementById("password1").value = "";
						document.getElementById("password2").value = "";
					} 
				}
			}
		};
	}
};
