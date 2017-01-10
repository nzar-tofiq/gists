<?php 
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
//if username is defined by user or ajax call user that as a username

//include the database connection settings
include 'dataconnection.php';
$sql = mysql_query("SELECT allegiance FROM user WHERE username ='$username'");
$line = mysql_fetch_array($sql);
//set variable allegiance for the current username to the corresponding data in the database
$allegiance = $line["allegiance"];
switch ($allegiance) {
  case "Stark":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/Stark.jpg' alt='Stark Wolf'/>";
    break;
  case "Lannister":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/Lannister.jpg' alt='Lannister Lion'/>";
    break;
  case "Arryn":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/Arryn.jpg' alt='Arryn Bird'/>";
    break;
  case "Baratheon":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/Baratheon.jpg' alt='Baratheon Stag'/>";
    break;
  case "Targaryen":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/Targaryen.jpg' alt='Targaryen Dragon'/>";
    break;
  case "Tyrell":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/Tyrell.jpg' alt='Tyrell Rose'/>";
  case "White Walker":
    $allegiance = "<img class='icon' src='http://itsuite.it.brighton.ac.uk/pl79/year2/test/images/icons/WhiteWalker.jpg' alt='White Walker'/>";
    break;
  default:
    echo "";
}
?>