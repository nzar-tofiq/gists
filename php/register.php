<?PHP
// Enable debugging
error_reporting(E_ALL);
ini_set("display_errors", true);
//
if(isset($_POST["username"]) && isset($_POST["allegiance"]) && isset($_POST["password"])){
	$username = $_POST["username"];
	$allegiance = $_POST["allegiance"];
	$password = $_POST["password"];
}else{
	exit("Expecting username, allegiance and password");
}
	
	$dbhost = "localhost";
	$dbuser = "nt104";
	$dbpass = "nt104";
	$dbname = "nt104_ci227a2";
	$type;
	$cause;
	if(checkUser($username)){
			$conn = mysql_connect($dbhost, $dbuser, $dbpass);
			if(!$conn)
			{	
				$type = "Connection failure error";
				$cause =  mysql_error();
				echo sendResponse($type,$cause);
				die();
			}
			$sql = "INSERT INTO user VALUES(NULL,'$username','$allegiance','$password',NULL);";
			mysql_select_db($dbname);
			$retval = mysql_query( $sql, $conn );
			if(!$retval)
			{
				$type = "Data entry error";
				$cause = mysql_error();
				echo sendResponse($type,$cause);
				die();
			}
			else
			{
				echo 'ok';
			}
			mysql_close($conn);
	}

function CheckUser($username){
	$dbhost = "localhost";
	$dbuser = "nt104";
	$dbpass = "nt104";
	$dbname = "nt104_ci227a2";
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	if(!$conn)
	{	
		$type = "Connection failure error";
		$cause =  mysql_error();
		echo sendResponse($type,$cause);
		die();
	}
	$sql = "SELECT username FROM user WHERE username='$username'";
	mysql_select_db($dbname);
	$retval = mysql_query( $sql, $conn );
	if(!$retval)
	{
		$type = "Data entry error";
		$cause = mysql_error();
		echo sendResponse($type,$cause);
		die();
	}else{
		if($row = mysql_fetch_array($retval)){
			echo "username has been used already!";
			return false;
		}
		else
			return true;
	}
	mysql_close($conn);
}

function sendResponse($type,$cause) {
	$response .= 'response:'.$type.' Caused by: '.$cause;
	return $response;
}
?>
