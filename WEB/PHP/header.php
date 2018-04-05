<?php
session_start();
?>
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chenny</title>
	<link rel="stylesheet" type="text/css" href="../css/loginstyle.css">
	<link rel="stylesheet" type="text/css" href="../css/loggedinbody.css">
	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<!-- Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </head>
  <body>
  <header>
	<nav>
		<div class="main-wrapper">
			<ul>
				<li><a href="../index.html"><img src="../IMG/vektorlogo.png" height="50px"></a></li>
			</ul>
			<div class="nav-login">
			<?php
				if(isset($_SESSION['uid'])){
					echo 
					'<form style="width:300px;" action="logout.ext.php" method="POST">
						<button style="background-color:#eeeeee;color:#303030" type="submit" name="submit">abmelden</button>
						<h6 style="color:#eeeeee;padding-top:5px;">'.$_SESSION['uid'].'</h6>
					</form>';
				}else{
					echo '<form action="login.ext.php" method="POST">
					<input type="text" name="uid" placeholder="Username/E-Mail">
					<input type="password" name="pwd" placeholder="Password">
					<button style="background-color:#eeeeee;color:#303030" type="submit" name="submit">anmelden</button>
					</form>
					<form action="signup.php" method="POST">
						<button type="submit" name="submit">registrieren</button>
					</form>';
				}
			?>	
			</div>
		</div>
	</nav>
  </header>