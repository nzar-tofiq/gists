<?php
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);

//Database resides at the same server as this application
$dbhost = "localhost";
//Database username
$dbuser = "nt104";
//Database password
$dbpass = "nt104";
//Name of the database
$dbname = "nt104_ci227a2";
//Database connection object
$con = mysql_connect($dbhost, $dbuser, $dbpass);
//Select database to connect to
$dbselect = mysql_select_db($dbname,$con);
//Check if the connection object has not been made
if(!$con) {
	//End execution and throw an error
	die("Could not connect: " . mysql_error());
}
//Check if no datase has been selected
if(!$dbselect) {
	//End execution and throw an error
	die ("error: " . mysql_error());
}
?>