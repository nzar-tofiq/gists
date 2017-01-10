<?php session_start();

$username = "";
if(isset($_SESSION['username'])){
	$username = $_SESSION['username']; 
	include 'php/getallegiance.php';
} else {
	header('location: login.html');
}

?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="author" content="Phil Lee, Shaq Reid_Robinson, Nzar Tofiq" />
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
		<link rel="stylesheet" type="text/css" href="css/smoothness/jquery-ui-1.10.4.custom.css"/>
		<script src="js/jquery-1.10.2.js"></script>
		<script src="js/jquery-ui-1.10.4.custom.js"></script>
		<script src="js/script.js"></script>
		<title>Game Of Thrones Review Site</title>
	</head>
	<body>
		<div id="wrapper">
			<header id="header">
				<nav id="seasonNav">
					<button id="season1btn">Season 1</button>
					<button id="season2btn">Season 2</button>
					<button id="season3btn">Season 3</button>
					<button id="season4btn">Season 4</button>
				</nav>
					<nav id="userbtns">
                        <button id="logout_btn">Log Out</button>
					</nav>
					<div id="username">
						<div id="user">
							<h6 data-username="<?php echo $username; ?>"><?php echo $username; ?></h6>
						</div>
							<?php echo $allegiance;?>
					</div>
                	<nav id="episodes">
						<div class="slide-wrap">
							<ul class="inner-wrap" id="s1">
								<li class="episodebtn" id="s1e1" data-exists="yes"><h1>Episode 1</h1><img class="tileImg" src="images/s1e1.jpg" alt="Game of thrones season 1 episode 1 picture"/></li>
								<li class="episodebtn" id="s1e2" data-exists="yes"><h1>Episode 2</h1><img class="tileImg" src="images/s1e2.jpg" alt="Game of thrones season 1 episode 2 picture"/></li>
								<li class="episodebtn" id="s1e3" data-exists="yes"><h1>Episode 3</h1><img class="tileImg" src="images/s1e3.jpg" alt="Game of thrones season 1 episode 3 picture"/></li>
								<li class="episodebtn" id="s1e4" data-exists="no"><h1>Episode 4</h1><img class="tileImg" src="images/s1e4.jpg" alt="Game of thrones season 1 episode 4 picture"/></li>
								<li class="episodebtn" id="s1e5" data-exists="no"><h1>Episode 5</h1><img class="tileImg" src="images/s1e5.jpg" alt="Game of thrones season 1 episode 5 picture"/></li>
								<li class="episodebtn" id="s1e6" data-exists="no"><h1>Episode 6</h1><img class="tileImg" src="images/s1e6.jpg" alt="Game of thrones season 1 episode 6 picture"/></li>
								<li class="episodebtn" id="s1e7" data-exists="no"><h1>Episode 7</h1><img class="tileImg" src="images/s1e7.jpg" alt="Game of thrones season 1 episode 7 picture"/></li>
								<li class="episodebtn" id="s1e8" data-exists="no"><h1>Episode 8</h1><img class="tileImg" src="images/s1e8.jpg" alt="Game of thrones season 1 episode 8 picture"/></li>
								<li class="episodebtn" id="s1e9" data-exists="no"><h1>Episode 9</h1><img class="tileImg" src="images/s1e9.jpg" alt="Game of thrones season 1 episode 9 picture"/></li>
								<li class="episodebtn" id="s1e10" data-exists="no"><h1>Episode 10</h1><img class="tileImg" src="images/s1e10.jpg" alt="Game of thrones season 1 episode 10 picture"/></li>
							</ul>
						</div>
						<div class="slide-wrap">
							<ul class="inner-wrap" id="s2">
								<li class="episodebtn" id="s2e1" data-exists="yes"><h1>Episode 1</h1><img class="tileImg" src="images/s2e1.jpg" alt="Game of thrones season 2 episode 1 picture"/></li>
								<li class="episodebtn" id="s2e2" data-exists="yes"><h1>Episode 2</h1><img class="tileImg" src="images/s2e2.jpg" alt="Game of thrones season 2 episode 2 picture"/></li>
								<li class="episodebtn" id="s2e3" data-exists="yes"><h1>Episode 3</h1><img class="tileImg" src="images/s2e3.jpg" alt="Game of thrones season 2 episode 3 picture"/></li>
								<li class="episodebtn" id="s2e4" data-exists="no"><h1>Episode 4</h1><img class="tileImg" src="images/s2e4.jpg" alt="Game of thrones season 2 episode 4 picture"/></li>
								<li class="episodebtn" id="s2e5" data-exists="no"><h1>Episode 5</h1><img class="tileImg" src="images/s2e5.jpg" alt="Game of thrones season 2 episode 5 picture"/></li>
								<li class="episodebtn" id="s2e6" data-exists="no"><h1>Episode 6</h1><img class="tileImg" src="images/s2e6.jpg" alt="Game of thrones season 2 episode 6 picture"/></li>
								<li class="episodebtn" id="s2e7" data-exists="no"><h1>Episode 7</h1><img class="tileImg" src="images/s2e7.jpg" alt="Game of thrones season 2 episode 7 picture"/></li>
								<li class="episodebtn" id="s2e8" data-exists="no"><h1>Episode 8</h1><img class="tileImg" src="images/s2e8.jpg" alt="Game of thrones season 2 episode 8 picture"/></li>
								<li class="episodebtn" id="s2e9" data-exists="no"><h1>Episode 9</h1><img class="tileImg" src="images/s2e9.jpg" alt="Game of thrones season 2 episode 9 picture"/></li>
								<li class="episodebtn" id="s2e10" data-exists="no"><h1>Episode 10</h1><img class="tileImg" src="images/s2e10.jpg" alt="Game of thrones season 2 episode 10 picture"/></li>
							</ul>
						</div>
						<div class="slide-wrap">
							<ul class="inner-wrap" id="s3">
								<li class="episodebtn" id="s3e1" data-exists="yes"><h1>Episode 1</h1><img class="tileImg" src="images/s3e1.jpg" alt="Game of thrones season 3 episode 1 picture"/></li>
								<li class="episodebtn" id="s3e2" data-exists="yes"><h1>Episode 2</h1><img class="tileImg" src="images/s3e2.jpg" alt="Game of thrones season 3 episode 2 picture"/></li>
								<li class="episodebtn" id="s3e3" data-exists="yes"><h1>Episode 3</h1><img class="tileImg" src="images/s3e3.jpg" alt="Game of thrones season 3 episode 3 picture"/></li>
								<li class="episodebtn" id="s3e4" data-exists="no"><h1>Episode 4</h1><img class="tileImg" src="images/s3e4.jpg" alt="Game of thrones season 3 episode 4 picture"/></li>
								<li class="episodebtn" id="s3e5" data-exists="no"><h1>Episode 5</h1><img class="tileImg" src="images/s3e5.jpg" alt="Game of thrones season 3 episode 5 picture"/></li>
								<li class="episodebtn" id="s3e6" data-exists="no"><h1>Episode 6</h1><img class="tileImg" src="images/s3e6.jpg" alt="Game of thrones season 3 episode 6 picture"/></li>
								<li class="episodebtn" id="s3e7" data-exists="no"><h1>Episode 7</h1><img class="tileImg" src="images/s3e7.jpg" alt="Game of thrones season 3 episode 7 picture"/></li>
								<li class="episodebtn" id="s3e8" data-exists="no"><h1>Episode 8</h1><img class="tileImg" src="images/s3e8.jpg" alt="Game of thrones season 3 episode 8 picture"/></li>
								<li class="episodebtn" id="s3e9" data-exists="no"><h1>Episode 9</h1><img class="tileImg" src="images/s3e9.jpg" alt="Game of thrones season 3 episode 9 picture"/></li>
								<li class="episodebtn" id="s3e10" data-exists="no"><h1>Episode 10</h1><img class="tileImg" src="images/s3e10.jpg" alt="Game of thrones season 3 episode 10 picture"/></li>
							</ul>
						</div>
					</nav>
			</header>
			<div class="sidebar" id="sidebar_left">
				<h3>Blood Spill Rating!</h3>
				<img id="BloodSword" src="images/BloodySword.jpg" alt="Blood soaked sword"/>
				<p></p>
			</div>
			<div class="sidebar" id="sidebar_right">
				<h3>King Joffery hate rating!</h3>
				<img id="Joffery" src="images/Joffery.jpg" alt="King Joffery"/>
				<p></p>
			</div>
			<div id="content">
                <div id="episode">
                        <div id="clrpic"><img id="episodepic"/></div>
						<h4>Episode Name:</h4>
                        <p id="episodename"></p>
                        <h4>Episode description:</h4>
                        <p id="episodedescription"></p>
                        <h4>Broadcast date:</h4>
                        <p id="broadcast"></p>
                        <button id="writereview">Write a review</button>
                    <form id="reviewForm">
                        <table>
                            <tr><td><label for="reviewtext">Review</label></td>
                            	<td><textarea id="reviewtext"></textarea></td></tr>
                            <tr><td><label for="rating">How good is this episode? 1 really bad, 10 excellent.</label></td>
                            	<td><input type="number" min="1" max="10" id="rating" /></td></tr>
                            <tr><td><label for="hatingjoffrey">How much do you hate King Joffery? 1 Love him, 10 Bring back hanging.</label></td>
                            	<td><input type="number" min="1" max="10" id="hatingjoffrey" /></td></tr>
                            <tr><td><label for="bloodspill">How much blood has been spilt? 1 worse than Pretty Woman, 10 Better than Saw.</label></td>
                            	<td><input type="number" min="1" max="10" id="bloodspill" /></td></tr>
                            <tr><td></td><td><input id="reviewSubmit" type="submit" value="Review" /></td></tr>
							<div id="reviewfeedback"></div>
                        </table>
                    </form>
                </div>
				<div id="reviewWrapper">
					<h4 id="reviewtitle">Reviews :</h4>
					<div id="reviews"></div>
				</div>
            </div>
        </div>
	</body>
</html>