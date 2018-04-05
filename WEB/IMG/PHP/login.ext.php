<?php
error_reporting(E_ALL);
session_start();
if(isset($_POST['submit'])){
	include_once'config.php';

	$uid = mysqli_real_escape_string($conn,$_POST["uid"]);
	$pwd = mysqli_real_escape_string($conn,$_POST["pwd"]);	
	$_SESSION['er'] = "";
	if(empty($uid)||empty($pwd)){
		header("Location: index1.php?login=empty");
		$_SESSION['er'] = "Bitte alle Felder ausfüllen";
		exit();
	}else{
		$sql = "SELECT * from users WHERE user_uid='$uid' OR user_email='$uid'";
		$result = mysqli_query($conn,$sql);
				$resultCheck = mysqli_num_rows($result);
				if($resultCheck < 1){
					header("Location: index1.php?login=error");
					$_SESSION['er'] = "User nicht gefunden";
					exit();
				}
				else{
					if($row = mysqli_fetch_assoc($result)){
						$hashedPwdCheck = password_verify($pwd, $row['user_pwd']);
						if($hashedPwdCheck == false){
							header("Location: index1.php?login=error");
							$_SESSION['er'] = "Passwort ungültig";
							exit();
						}elseif($hashedPwdCheck == true){
							$_SESSION['uid'] = $row['user_uid'];
							$_SESSION['email'] = $row['user_email'];
							$_SESSION['password'] = $row['user_pwd'];
							$_SESSION['vname'] = $row['user_vn'];
							$_SESSION['nname'] = $row['user_nn'];
							$_SESSION['pwdhash'] = $row['user_pwd'];
							$_SESSION['pwd'] = $pwd;
							$_SESSION['er'] = "";
							header("Location: index1.php?login=success");
							exit();
						}
					}
				}
	}
	
}
else{
	header("Location: index1.php?");
	exit();
}
?>