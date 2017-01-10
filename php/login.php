<?php 
//Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
include 'dataconnection.php';
//Get the username and password from the address bar or ajax call
if(isset($_GET["username"]) && $_GET["password"]){
	$username = $_GET["username"];
	$password = $_GET["password"];
}else{
	//Otherwise stop executing and print an error message
	exit("Expecting username and password");
}
//Result of the sql query(only the password for the corresponding username in the same table row)
$result = mysql_query("SELECT * FROM user where username ='$username'");
//Row represents an array of data returned by mysql server
$row = mysql_fetch_array($result);
//check if the given password by user matches the password saved in the database
if($password == $row["password"]){
	echo "ok";
	//when username and password for the current user match the username and 
	//password saved in the database start a session
	session_start();
	//set the session username for the user who has just logged in successfully
	$_SESSION['username'] = $username;
	$_SESSION["loggedin"] = true;
}else{
	//otherwise the password must be wrong
	echo "Wrong Password"; 
}
//stop connection con
mysql_close($con);
?>