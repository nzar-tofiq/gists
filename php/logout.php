<?php 
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
//if session hasn't started start a session
session_start();
//stop existing session
session_destroy();
//redirect user to the login page
header("location: ../login.html");
?>