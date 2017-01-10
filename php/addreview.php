<?php 
//if no session start one
session_start();
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
//get the username from the running session
if(isset($_SESSION['username'])){
	$username = $_SESSION['username'];
}else{
	//otherwise redirect to the login page
	header('location: ../login.html');
}
//check if the expected variables to be included in the in order to add a review into the database
//are actually set by the user or have been sent by the ajax call
if(isset($_POST["episodeid"]) && isset($_POST["episodeid"]) && isset($_POST["reviewtext"]) && isset($_POST["rating"]) && isset($_POST["hatingkingjeofery"]) && isset($_POST["bloodspill"])){
	$episodeid= mysql_real_escape_string($_POST["episodeid"]);
	$reviewtext = mysql_real_escape_string(preg_replace("/\r\n|\r|\n/", '<br/>', $_POST["reviewtext"]));
	$rating = mysql_real_escape_string($_POST["rating"]);
	$hatingkingjeofery = mysql_real_escape_string($_POST["hatingkingjeofery"]);
	$bloodspill = mysql_real_escape_string($_POST["bloodspill"]);
}else{
	//if not then stop executing and output an error message
	exit('Expecting episodeid, username, reviewtext, rating, hatingkingjeofery, bloodspill');
}
//database settings variables
$dbhost = "localhost";
$dbuser = "nt104";
$dbpass = "nt104";
$dbname = "nt104_ci227a2";
$sql = "INSERT INTO review VALUES (null,'$episodeid','$username','$reviewtext',$rating,$hatingkingjeofery,$bloodspill);";
//connect to local mysql server usin the defined variables
$con = mysql_connect($dbhost, $dbuser, $dbpass);
if(!$con){
	//if there is no connection or connection does not work then kill the connection and output an error message
	die("Connection failure error".mysql_error());
}
//select a database in the local mysql server
mysql_select_db($dbname);
//set the result to the sql query passed throught connection con
$result = mysql_query( $sql, $con );
if(!$result)
{
	//if that didn't work kill the connection and output an error message
	die("Data entry error".mysql_error());
}else{
	//otherwise output a success message
	echo "ok";
}
//close connection con
mysql_close($con);
?>