var username, password;
$(document).ready(function(){
	$("#loginForm").submit(function(e){
		e.preventDefault();
		e.keyCode = '13';
		username = $("#log_username").val();
		password = $("#log_password").val();
		login(username,password)
	});
	$("#register_btn").click(function(){
		window.location = "http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/register.html"
	});
	
});
function login(username,password) {
	$.get("http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/php/login.php?username=" + username + "&password=" + password,function(data){
		if(data === "ok"){
			window.location = "http://itsuite.it.brighton.ac.uk/nt104/ci227/a2/index.php"
		}else{
			$("#feedback").css("display", "inline-block");
			$("#feedback").html("Login Failed! "+ data);
			$("#log_username").val() = username;
			$("#log_password").val() = '';
		}
	});
}