<?php
	include_once 'header.php';
?>
  
  <section class="main-container">
	<div class="main-wrapper">
		<h2>Registrieren</h2>
		<form class="signup-form" action="signup.ext.php" method="POST">
			<?php
				echo "<p style='color:red;text-align:center;margin-bottom:10px;'>".$_SESSION['er']."</p>";
				$_SESSION['er'] = "";
			?>
			<input type="text" name="vn" placeholder="Vorname">
			<input type="text" name="nn" placeholder="Nachname">
			<input type="text" name="email" placeholder="E-Mail">
			<input type="text" name="uid" placeholder="Username">
			<input type="password" name="pwd" placeholder="Passwort">
			<input type="password" name="pwd2" placeholder="Passwort wiederholen">
			<h6 style="text-align:center;margin-bottom:10px;">min 6 Zeichen | min 1 Buchstabe | min 1 Zahl</h6>
			<button type="submit" name="submit">Registrieren</button>
		</form>
	</div>
  </section>
<?php
	include_once 'footer.php';
?>
 