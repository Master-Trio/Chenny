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
	if($_SESSION['er']!=""){
		echo "<div style='text-align:center;margin-top:10px;' class='alert alert-danger' role='alert'>".$_SESSION['er']."</div>";
		$_SESSION['er'] = "";
	}
?>
</div>
<?php
	include_once 'footer.php';
?>
 