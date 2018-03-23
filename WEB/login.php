<?php
	// Melde alle PHP Fehler (siehe Changelog)
	error_reporting(E_ALL);
	if(isset($_POST["anmelden"])){
		//Daten die vom Formular übergeben werden und in die Datenbank gelangen
		$user =$_POST["username_textfield"];
		//Passwort
		$pw = $_POST["passwd_textfield"];	
		//Connection Infos
		$servername = "localhost";
		$username = "proj_chenny";
		$password = "Aeth3fai";
		$db="proj_chenny";
		$table="user";
		//Verbindungsaufbau zur Datenbank
		$mysqli = new mysqli($servername, $username, $password,$db);
		
			//Checkt ob der Username und das Passwort mit den Daten in der Datebank übereinstimmen
			$sql = "SELECT username,password FROM user WHERE username='".$user."' AND password='".md5($pw)."'";
			if($result = $mysqli->query($sql)){
				if($result->num_rows > 0){
					echo "eingeloggt";
				}
				else{
					echo "Daten falsch";
				}
			}
			$result->free();
			//Beenden der SQL Verbindung
			$mysqli->close();
		}
	
	else{
		$ausgabe = 
		"<!doctype html>
<html lang='de'>
		<head>
			<!-- Required meta tags --><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
			<!-- Bootstrap CSS --><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'><link href='css/style-reg.css' rel='stylesheet'>
			<title>Log in</title>
			<link rel='shortcut icon' href='IMG/favicon.png' type='<mime-type>' />
		</head>
		<body style='background-color: #eeeeee'>
		<!-- Optional JavaScript -->
		<!-- jQuery first, then Popper.js, then Bootstrap JS -->
		<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossorigin='anonymous'></script>
		<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q' crossorigin='anonymous'></script>
		<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl' crossorigin='anonymous'>
		</script>
		<!-- Registrierungsseite -->
			<div class='anmelden-ueberschrift' align='center'>
				<a href='index.html'><img src='IMG/vektorlogo.png' width='130px'></a>
			</div>
			<br>
			<h1 style='text-align: center; color: ##303030'>Anmelden</h1>
			<br>
			<form name='testform' action='login.php' method='POST'>
			<div class='felder container' align='center'>
				<!--<label><b>E-Mail</b></label><br>-->
				<div></div>
				<img width='20' height='20' src='IMG/user.png' style='margin-bottom: 3px'>
				<input name='username_textfield' class='eingabe' type='text' placeholder='E-Mail' size='30' class='mail' style='text-align: center;'><br><br>


				<!--<label><b>Passwort</b></label><br>-->
				<img width='20' height='20' src='IMG/lock.png' style='margin-bottom: 3px'>
				<input name='passwd_textfield' class='eingabe' type='password' placeholder='Passwort' size='30' style='text-align: center;'>
				<br><a href='#' style='color: black'>Passwort vergessen?</a>
			</div>

			<br>
			<div align='center'>
				<button name='anmelden' type='submit' class='btn'>Log in</button>
			</div></form>
		</body>
</html>";
		
		echo $ausgabe;
	}
?>



	