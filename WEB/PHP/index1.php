<?php
	include_once 'header.php';
?>
<div class="maindiv">
<?php
	if(isset($_SESSION['uid'])){
		echo 
		'<div class="entwdiv">
			<h1 style="text-align:center">Meine Entwürfe</h1>
			
		</div>';
	}
	if(isset($_SESSION['er'])){
		echo 
		"<h2>".$_SESSION['er']."</h2>";
		$_SESSION['er'] = "";
	}
?>
</div>
<?php
	include_once 'footer.php';
?>
 