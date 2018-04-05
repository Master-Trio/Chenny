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
  <body style="background-color:#eeeeee;">
  <header>
	<nav style="background-color:#303030;" class="navbar fixed-top navbar-expand-lg navbar-dark border-bottom border-white">
		<a class="navbar-brand" href="../index.html">
			<img src="../IMG/vektorlogo.png" height="40" class="d-inline-block align-top Responsive image" alt="Chennylogo">
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<?php
					if(isset($_SESSION['uid'])){
						echo 
							'<li style="margin-left:10px;margin-top:10px;" class="nav-item">
								<form action="logout.ext.php" method="POST">
									<button class="subm" type="submit" name="submit">abmelden</button>
								</form>
							</li>
							<li style="margin-left:10px;margin-top:10px;" class="nav-item">
								<p style="color:#eeeeee;">'.$_SESSION['uid'].'</p>
							</li>';
					}else{
						echo 
						'<li style="margin-right:10px;margin-top:3px;" class="nav-item">
							<form action="login.ext.php" method="POST">
								<input class="eingabe" type="text" name="uid" placeholder=" Username/E-Mail">
								
						</li>
						<li style="margin-right:10px;margin-top:3px;" class="nav-item">
							<input class="eingabe" type="password" name="pwd" placeholder=" Passwort">
						</li>
						<li style="margin-top:3px;" class="nav-item">
							<button class="subm" type="submit" name="submit">anmelden</button>
							</form>	
						</li>';
					}
				?>	
			</ul>
		</div>
	</nav>
 </header>