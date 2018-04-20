<?php
	include_once 'header.php';
?>

<div class="kontodiv">
<h1 class="haup myFont">Kontoeinstellungen</h1>
  <?php
	if($_SESSION['er']!=""){
		echo "<div style='text-align:center;margin-top:10px;' class='alert alert-danger' role='alert'>".$_SESSION['er']."</div>";
		$_SESSION['er'] = "";
	}
	if($_SESSION['gea']!=""){
		echo "<div style='margin-top:10px;text-align:center;' class='alert alert-success' role='alert'>
  			<h1 style='font-size:25px;'>Erfolgreich geändert</h1>
		</div>";
		$_SESSION['gea'] = "";
	}
	if(isset($_SESSION['uid'])){
  echo "
  	<div class='row'>
  		<div class='col ueb'>Vorname</div>
	</div>
	
   	<div class='row'>
   		<div class='col ueb2'>".$_SESSION['vname']."</div>
	</div>
	<hr>
   	<div class='row'>
   		<div class='col ueb'>Nachname</div>
  	</div>
	<div class='row'>
		<div class='col ueb2'>".$_SESSION['nname']."</div>
	</div>
	<hr>
  	<div class='row'>
   		<div class='col ueb'>Username</div>
	</div>
	<div id='1' class='row'>
		<div id='111' class='col ueb2'>".$_SESSION['uid']."</div>
	</div>
	<div id='11' class='row'>
		<div align='center' class='col'><button  class='aaa' onclick='sw(1);'>ändern</button></div>
	</div>
	<hr>
  	<div class='row'>
   		<div class='col ueb'>E-Mail</div>
  	</div>
	<div id='2' class='row'>
		<div id='222' style='word-break: break-all;' class='col ueb2'>".$_SESSION['email']."</div>
	</div>
	<div id='22' class='row'>
		<div align='center' class='col'><button class='aaa' onclick='sw(2);'>ändern</button></div>
	</div>
	<hr>
  	<div class='row'>
   		<div class='col ueb'>Passwort</div>
  	</div>
	<div id='3' class='row'>
		<div class='col ueb2'>*******</div>
	</div>
	<div id='33' class='row'>
		<div align='center' class='col lastDiv'><button class='aaa' id='3' onclick='sw(3);'>ändern</button></div>
	</div>";
	}else{
		header("Location:../index.html");
	}
  ?>
</div>
<?php
	include_once 'footer.php';
?>