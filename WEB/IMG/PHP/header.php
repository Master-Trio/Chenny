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
					echo '<form action="logout.ext.php" method="POST">
					<button style="background-color:#eeeeee;color:#303030" type="submit" name="submit">abmelden</button>
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