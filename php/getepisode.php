<?php
session_start();
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
//get username from an existing session
if(isset($_SESSION['username'])){
	$username = $_SESSION['username'];
}else{
	//if session at username has not been set then the user hasn't logged on
	//redirect them to the login page
	header('location: ../login.html');
}
//expect the episodeid to be defined by user or sent via ajax GET request
if(isset($_GET['episodeid'])){
	$episodeid = $_GET['episodeid'];
}else{
	exit("Expecting episodeid");
}
//dataconnction.php creates a database connection
include 'dataconnection.php';
//the result of an sql query
$result = mysql_query("SELECT * FROM episodes WHERE episodeid = '$episodeid'");
//if the result is not one row then the data must be invalid or does not exist
if(mysql_num_rows($result) != 1) {
    die ("No data for episode ".$episodeid);
}
$row = mysql_fetch_array($result);
//respond with a JSON object
header('Content-Type: application/json');
//stringBuilder data will include all keys and values for the JSON object
$data = "{\n";
$data.="\t\"episodeid\": \"$episodeid\",\n";
if(isset($row["episodeid"])){
	$episodeid = $row["episodeid"];
	$data.="\t\"episodeid\": \"$episodeid\",\n";
}
if(isset($row["name"])) {
	$name = $row["name"];
	$data.="\t\"name\": \"$name\",\n";
}
if(isset($row["description"])) {
	$description = $row["description"];
	$data.="\t\"description\": \"$description\",\n";
}
if(isset($row["firstbroadcast"])) {
	$firstbroadcast = $row["firstbroadcast"];
	$data.="\t\"firstbroadcast\": \"$firstbroadcast\",\n";
}
if(isset($row["pic"])) {
	$pic = $row["pic"];
	$data.="\t\"imgsrc\": \"$pic\"\n";
}
$data.="}";
//output data
echo $data;
//close the mysql connection of(con)
mysql_close($con);
?>