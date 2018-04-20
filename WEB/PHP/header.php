<?php
session_start();
?>
<!DOCTYPE html>
<html lang="de">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	 <link rel="shortcut icon" href="../IMG/favicon.png" type="<mime-type>" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <!-- Varela Font -->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
	<!-- Custom CSS -->
	<link rel="stylesheet" type="text/css" href="../css/loginstyle.css">
	<link rel="stylesheet" type="text/css" href="../css/loggedinbody.css">
	<link rel="stylesheet" type="text/css" href="../css/konto.css">
	<!-- Custom JS -->
	 <script type="text/javascript" src="../js/konto.js"></script>
    <title>Chenny</title>
  </head>
  <body style="background-color:#eeeeee;">
  <header>
	<nav style="background-color:#303030;" class="navbar navbar-expand-lg navbar-dark border-bottom border-white">
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
						'<li class="nav-item">
							<div class="btn-group dropleft">
								<button type="button" class="btn dropdown-toggle dr" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								'.$_SESSION['uid'].'
								</button>
								<div class="dropdown-menu dropd">
									<form action="logout.ext.php" method="POST">
										<a style="text-align:left;" class="dropdown-item drop" href="konto.php">Kontoeinstellungen</a>
										<a style="text-align:left;" class="dropdown-item drop" href="index1.php">Entwürfe verwalten</a>
										<a style="text-align:left;" class="dropdown-item drop" href="logout.ext.php">abmelden</a>
									</form>
								</div>
							</div>
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
 <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

