<?php
include_once'config.php';
session_start();

if(isset($_POST['submit1'])){
	
	$uidneu = mysqli_real_escape_string($conn,$_POST["username"]);	
	$sql="SELECT * from users WHERE user_uid='$uidneu'";
	$result = mysqli_query($conn,$sql);
	$resultCheck = mysqli_num_rows($result);

		if($resultCheck > 0){
			echo "Username bereits in Verwendung";
			exit();
		}
		else{
			$sql="UPDATE users SET user_uid='$uidneu' WHERE user_uid = '".$_SESSION['uid']."'";
			$result = mysqli_query($conn,$sql);
			$_SESSION['uid'] = $uidneu;
			header("Location:konto.php");
			exit();
		}
}
if(isset($_POST['submit2'])){
$emailneu = mysqli_real_escape_string($conn,$_POST["email"]);		
	$sql="SELECT * from users WHERE user_email='$emailneu'";
	$result = mysqli_query($conn,$sql);
	$resultCheck = mysqli_num_rows($result);

		if($resultCheck > 0){
			echo "Email bereits in Verwendung";
			exit();
		}
		else{
			$sql="UPDATE users SET user_email='$emailneu' WHERE user_email = '".$_SESSION['email']."'";
			$result = mysqli_query($conn,$sql);
			$_SESSION['email'] = $emailneu;
			header("Location:konto.php");
			exit();
		}

}
if(isset($_POST['submit3'])){
$pwdneu = password_hash(mysqli_real_escape_string($conn,$_POST["pwd"]),PASSWORD_DEFAULT);
$sql="UPDATE users SET user_pwd='$pwdneu' WHERE user_pwd = '".$_SESSION['pwdhash']."'";
			$result = mysqli_query($conn,$sql);
			$_SESSION['email'] = $emailneu;
			header("Location:konto.php");
			exit();
}
?>