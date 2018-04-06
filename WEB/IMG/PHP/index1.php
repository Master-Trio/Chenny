<?php
	include_once 'header.php';
?>
  
  <section class="main-container cont">
	<div class="main-wrapper wic_center">
		<?php
			if(isset($_SESSION['uid'])){
				echo "<h2>Willkommen auf Chenny ".$_SESSION['vname']."</h2>";
				echo "<h4>Deine Daten:</h4>";
				echo "<h6>Vorname: ".$_SESSION['vname']."</h6>";
				echo "<h6>Nachname: ".$_SESSION['nname']."</h6>";
				echo "<h6>Email: ".$_SESSION['email']."</h6>";
				echo "<h6>Username: ".$_SESSION['uid']."</h6>";
				echo "<h6>Passwort: ".$_SESSION['pwd']."</h6>";
				echo "<h6>Hashed-Passwort: ".$_SESSION['pwdhash']."</h6>";
			}
			if(isset($_SESSION['er'])){
				echo "<h2>".$_SESSION['er']."</h2>";
				$_SESSION['er'] = "";
			}
		?>
	</div>
  </section>
<?php
	include_once 'footer.php';
?>
 