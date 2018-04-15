<?php
if(isset($_POST['submit'])){
	session_start();
	include_once'config.php';
	
	$vn = mysqli_real_escape_string($conn,$_POST["vn"]);
	$nn = mysqli_real_escape_string($conn,$_POST["nn"]);
	$email = mysqli_real_escape_string($conn,$_POST["email"]);
	$uid = mysqli_real_escape_string($conn,$_POST["uid"]);
	$pwd = mysqli_real_escape_string($conn,$_POST["pwd"]);
	$pwd2 = mysqli_real_escape_string($conn,$_POST["pwd2"]);
	
	if(empty($vn)||empty($nn)||empty($uid)||empty($email)||empty($pwd)){
		header("Location:signup.php");
		$_SESSION['er'] = "Bitte alle Felder ausfüllen";
		exit();
	}
	else{
		if($pwd != $pwd2){
			header("Location:signup.php");
			$_SESSION['er'] = "Passwörter stimmen nicht überein";
			exit();
		}
		else{
			if(strlen($pwd)<6){
				$_SESSION['er'] = "Passwort zu kurz!";
				header("Location:signup.php");
			}
			else{
				if (!preg_match("#[0-9]+#", $pwd)) {
					$_SESSION['er'] = "Mindestens eine Zahl!";
					header("Location:signup.php");
				}
				else{
					if (!preg_match("#[a-zA-Z]+#", $pwd)) {
						$_SESSION['er'] = "Mindestens 1 Buchstabe!";
						header("Location:signup.php");
					}
					else{
						if(!preg_match("/^[a-zA-Z]*$/",$vn)||!preg_match("/^[a-zA-Z]*$/",$nn)){
							$_SESSION['er'] = "Vorname/Nachname ungültig";
							header("Location:signup.php");
							exit();
						}
						else{
							if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
								$_SESSION['er'] = "Email ungültig";
								header("Location:signup.php");
								exit();
							}
							else{
								$sql="SELECT * from users WHERE user_uid='$uid' OR user_email='$email'";
								$result = mysqli_query($conn,$sql);
								$resultCheck = mysqli_num_rows($result);
								if($resultCheck > 0){
									header("Location:signup.php");
									$_SESSION['er'] = "Username/E-mail bereits verwendet";
									exit();
								}
								else{
									$hashedPwd = password_hash($pwd,PASSWORD_DEFAULT);
									$sql = "INSERT INTO users (user_vn,user_nn,user_email,user_uid,user_pwd) 
														VALUES ('$vn','$nn','$email','$uid','$hashedPwd')";
									mysqli_query($conn,$sql);
									header("Location:success.php");
									$_SESSION['er'] = "";
									exit();
								}
							}
						}
					}
				}
			}
		}
	}		
}
else{
	header("Location:index1.php");
	exit();
}
?>