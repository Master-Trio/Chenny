<?php
	include_once 'header.php';
?>
<div class="maindiv">
<?php
	if(isset($_SESSION['uid'])){
		echo 
		'<div class="entwdiv">
			<h2 style="text-align:center;font-size:40px;">Meine Entwürfe</h2><br>
		</div>
		<a style="text-decoration:none;" href="../main.html"><button class="nentw">Neuer Entwurf</button></a>';
	}
	if(isset($_SESSION['er'])){
		echo 
		'<h2 style="color:red;text-align:right;font-family: Arial;margin-right:50px;">'.$_SESSION['er'].'</h2>';
		$_SESSION['er'] = "";
	}
?>
</div>
<?php
	include_once 'footer.php';
?>
 