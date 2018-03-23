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
		//3-Fach verschlüsseltes Passwort
		$pwcrypt = md5(md5(md5(pw)));
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
					}elseif(strlen($pw1)<8){
						$er .= "<p>Passwort zu kurz!</p>";
					}elseif (!preg_match("#[0-9]+#", $pw1)) {
						$er .= "<p>Mindestens eine Zahl!</p>";
					}elseif (!preg_match("#[a-zA-Z]+#", $pw1)) {
						$er .= "<p>Mindestens 1 Buchstabe!</p>";
					}else{
						//Anlegen des Users
						$sql = "INSERT INTO `user` (`username`, `password`,`titel`, `vname`, `nname`,`bez`) 
											VALUES ('".$user."', '".$pwcrypt."', '".$titel."', '".$vname."', '".$nname."', '-')";
						$mysqli->query($sql);
						echo "User erstellt";
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
		$ausgabe = "<html><head></head><body>";
		$ausgabe .= "<form name='testform' action='regist.php' method='POST'>";
		$ausgabe .= "<h1>Registrierung</h1>";
		$ausgabe .= "Titel:<input type='text' name='titel_textfield' /><br />";
		$ausgabe .= "Vorname:<input type='text' name='vname_textfield' /><br />";
		$ausgabe .= "Nachname:<input type='text' name='nname_textfield' /><br />";
		$ausgabe .= "Username:<input type='text' name='username_textfield' /><br />";
		$ausgabe .= "Passwort:<input type='password' name='passwd1_textfield' /><br />";
		$ausgabe .= "Passwort:<input type='password' name='passwd2_textfield' /><br />";
		$ausgabe .= "<input type='submit' name='anmelden'/><br />";
		$ausgabe .= "</form></body></html>";
		echo $ausgabe;
	}
?>



	