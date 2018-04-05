<?php
	// Melde alle PHP Fehler (siehe Changelog)
	error_reporting(E_ALL);
	if(isset($_POST["anmelden"])){
		//Daten die vom Formular übergeben werden und in die Datenbank gelangen
		$titel =$_POST["titel_textfield"];
		$vname =$_POST["vname_textfield"];
		$nname =$_POST["nname_textfield"];
		$user =$_POST["username_textfield"];
		//Passwort
		$pw1 = $_POST["passwd1_textfield"];
		//2 Passwort zum Check ob der User 2 mal das gleiche eingegeben hat
		$pw2 = $_POST["passwd2_textfield"];
		//Variable für die Ausgabe Errornachrichten bei einem ungültigem Passwort
		$er = "";	
		//Connection Infos
		$servername = "localhost";
		$username = "proj_chenny";
		$password = "Aeth3fai";
		$db="proj_chenny";
		$table="user";
		//Verbindungsaufbau zur Datenbank
		$mysqli = new mysqli($servername, $username, $password,$db);
		//Check ob die Passwörter gleich sind
		if($pw1!=$pw2){
			echo "Passwörter sind nicht gleich!";
		}else{
			//Checkt ob der Username schon vorhanden ist
			$sql = "SELECT username,password FROM user WHERE username='".$user."'";
			if($result = $mysqli->query($sql)){
				if($result->num_rows > 0){
					$er = "Username ungültig";
				}
				else{
					//Abfragen ob das Passwort den Kriterien entspricht
					if(empty($pw1)){
						$er .= "<p>Bitte ein Passwort eingeben!</p>";
					}elseif(strlen($pw1)<6){
						$er .= "<p>Passwort zu kurz!</p>";
					}elseif (!preg_match("#[0-9]+#", $pw1)) {
						$er .= "<p>Mindestens eine Zahl!</p>";
					}elseif (!preg_match("#[a-zA-Z]+#", $pw1)) {
						$er .= "<p>Mindestens 1 Buchstabe!</p>";
					}else{
						//Anlegen des Users
						$sql = "INSERT INTO `user` (`username`, `password`,`titel`, `vname`, `nname`,`bez`) 
											VALUES ('".$user."', '".md5($pw1)."', '".$titel."', '".$vname."', '".$nname."', '-')";
						$mysqli->query($sql);
						echo "Dein Account wurde erstellt";
					}
				}
			}
			//Ausgabe der Fehler die bei der Passwort-Kriterienabfrage nicht in Ordnung waren
			echo $er;
			$result->free();
			//Beenden der SQL Verbindung
			$mysqli->close();
		}
	} 
	else{
		$ausgabe = "<!doctype html><html lang='de'>
		<head>
		<!-- Required meta tags --><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'><!-- Bootstrap CSS --><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossorigin='anonymous'><link href='css/style-reg.css' rel='stylesheet'><title>Registrieren</title><link rel='shortcut icon' href='IMG/favicon.png' type='<mime-type>' />
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
    </div><br>
    <h1 style='text-align: center; color: ##303030'>Registrierung</h1>
	<form name='testform' action='regist.php' method='POST'>
    <div class='felder container' align='center'>
        <div class='row' style='text-align: center; margin-left: 25%; margin-right: 25%;'>
			<div class='col'><b>Titel</b><br><input name='titel_textfield' type='text' style='text-align: center'></div>
            <div class='col'><b>Vorname</b><br><input name='vname_textfield' type='text' style='text-align: center'></div>
            <div class='col'><b>Nachname</b><br><input name='nname_textfield' type='text' style='text-align: center'></div>
        </div>

        <div class='row' style='text-align: center'>
            <div class='col'><b>E-Mail</b><br>
                <input name='username_textfield' type='text' size='35' style='text-align: center'></div>
        </div><br>
        <hr style='border-top: 1px solid #8c8b8b; width: 70%'>
        <div class='row' style='text-align: center'>
            <div class='col'><b>Passwort</b><br>
                <input name='passwd1_textfield' type='password' size='35' style='text-align: center'>
                <p style='font-size: 10pt'>min. 6 Zeichen | min. 1 Groß/Kleinbuchstabe | min. 1 Zahl</p>
            </div>
        </div>
        <div class='row' style='text-align: center'>
            <div class='col'><b>Passwort wiederholen</b><br>
                <input name='passwd2_textfield' type='password' size='35' style='text-align: center'></div>
        </div>
    </div>
    <br>
    <div align='center'>
            <button type='submit' name='anmelden' class='btn'>Registrieren</button>
			<button type='button' class='btn leglos' onclick='window.location.href=\"login.php\"'>Log in</button></div></form></body></html>";
		echo $ausgabe;
	}
?>



	