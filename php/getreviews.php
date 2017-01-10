<?php
//include the running session or start one
session_start();
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
if(isset($_SESSION['username'])){
	$username = $_SESSION['username'];
}
if(isset($_GET['episodeid'])){
		$episodeid = $_GET['episodeid'];
}else{
	exit("Expecting episodeid");
}
//include the connection settings
include'dataconnection.php';
//
$result = mysql_query("SELECT * FROM review WHERE episodeid = '$episodeid'");
//define response header as application JSON, makes it easy for browsers to display correctly
//also makes it easier to work with if the request is an ajax call
header('Content-Type: application/json');
//stringBuilder data will include all the keys, values and formatting of a JSON object
$data= "{\n\t\"reviews\":[\n";
//loop throught all the rows returned from rsult or by my sql database
while($row = mysql_fetch_array($result)){
	$data .= "\t\t{\n";
		//if required data exists in this row, add it to data variable
		if(isset($row["reviewid"])){
			$reviewid = $row["reviewid"];
			$data .= "\t\t\t\"reviewid\" : \"$reviewid\",\n";
		}
		if(isset($row["episodeid"])){
			$episodeid = $row["episodeid"];
			$data .= "\t\t\t\"episodeid\" : \"$episodeid\",\n";
		}
		if(isset($row["username"])){
			$username = $row["username"];
			$data .= "\t\t\t\"username\" : \"$username\",\n";
			include 'getallegiance.php';
			$data .= "\t\t\t\"allegiance\":\"$allegiance\",\n";
			
		}	
		if(isset($row["reviewtext"])){
			$reviewtext = $row["reviewtext"];
			$data .= "\t\t\t\"reviewtext\" : \"$reviewtext\",\n";
		}
		if(isset($row["rating"])){
			$rating = $row["rating"];
			$data .= "\t\t\t\"rating\" : \"$rating\",\n";
		}
		if(isset($row["hatingkingjeofery"])){
			$hatingkingjeofery = $row["hatingkingjeofery"];
			$data .="\t\t\t\"hatingkingjeofery\" : \"$hatingkingjeofery\",\n";
		}
		if(isset($row["bloodspill"])){
			$bloodspill = $row["bloodspill"];
			$data .= "\t\t\t\"bloodspill\" : \"$bloodspill\"\n";
		}
		$data.="\t\t},";
}
//remove the last "," otherwise JSON will not work
//this only removes the last "," in the array of reviews
$data = rtrim($data,',');
$data .= "\n]}";
//output the data variable which is a JSON object
echo $data;
//close the connection
mysql_close($con);
?>