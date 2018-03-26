<?php
	// Melde alle PHP Fehler (siehe Changelog)
	error_reporting(E_ALL);
	if(isset($_POST["anmelden"])){
		//Daten die vom Formular übergeben werden und in die Datenbank gelangen
		$user =$_POST["username_textfield"];
		//Passwort
		$pw = $_POST["passwd_textfield"];
		//3-Fach verschlüsseltes Passwort
		$pwcrypt = md5(md5(md5(pw)));
			
		//Connection Infos
		$servername = "localhost";
		$username = "proj_chenny";
		$password = "Aeth3fai";
		$db="proj_chenny";
		$table="user";
		//Verbindungsaufbau zur Datenbank
		$mysqli = new mysqli($servername, $username, $password,$db);
		
			//Checkt ob der Username und das Passwort mit den Daten in der Datebank übereinstimmen
			$sql = "SELECT username,password FROM user WHERE username='".$user."' AND password='".$pwcrypt."'";
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
		$ausgabe = "<html><head></head><body>";
		$ausgabe .= "<form name='testform' action='login.php' method='POST'>";
		$ausgabe .= "<h1>Login</h1>";
		$ausgabe .= "Username:<input type='text' name='username_textfield' /><br />";
		$ausgabe .= "Passwort:<input type='password' name='passwd_textfield' /><br />";
		$ausgabe .= "<input type='submit' name='anmelden'/><br />";
		$ausgabe .= "</form></body></html>";
		echo $ausgabe;
	}
?>



	