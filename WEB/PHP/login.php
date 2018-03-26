<?php
session_start();
if(isset($_POST['submit'])){
	
	include_once_'config.php';

	$user = mysqli_real_escape_string($conn,$_POST["uid"]);
	$pw = mysqli_real_escape_string($conn,$_POST["pw"]);
		
	
	if(empty($user)||empty($pw)){
		header("Location: index1.php?login=error");
		exit();
	}else{
		$sql = "SELECT * from users WHERE user_uid='$user'"
		$result = mysqli_query($conn,$sql);
				$resultCheck = mysqli_num_rows($result);
				if($resultCheck < 1){
					header("Location: index1.php?login=error");
					exit();
				}
				else{
					if($row = mysqli_fetch_assoc($result)){
						$hashedPwdCheck = password_verify($pwd, $row['user_pwd']);
						if($hashedPwdCheck == false){
							header("Location: index1.php?login=error");
							exit();
						}elseif($hashedPwdCheck == true){
							$_SESSION['uid'] = $row['user_uid'];
							$_SESSION['password'] = $row['user_pwd'];
							$_SESSION['vn'] = $row['user_vn'];
							$_SESSION['nn'] = $row['user_nn'];
							header("Location: index1.php?login=sucess");
							exit();
						}
					}
				}
	}
}else{
	header("Location: index1.php?login=error");
	exit();
}
?>