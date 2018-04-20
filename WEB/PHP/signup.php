<?php
	include_once 'header.php';
?>
  <h2 class="wic"></h2>
  <section class="main-container">
	<div class="main-wrapper">
		<div>
		<form class="signup-form" action="signup.ext.php" method="POST">
			<?php
				if($_SESSION['er']!=""){
					echo "<div style='text-align:center;' class='alert alert-danger' role='alert'>".$_SESSION['er']."</div>";
					$_SESSION['er'] = "";
				}
				if(isset($_SESSION['uid'])){
					header("Location:index1.php");
				
				}else{
					echo '
					
					<h2 style="text-align:center;font-size:40px;">Registrieren</h2><br>
					<input type="text" name="vn" placeholder="Vorname">
					<input type="text" name="nn" placeholder="Nachname">
					<input type="text" name="email" placeholder="E-Mail">
					<input type="text" name="uid" placeholder="Username">
					<input type="password" name="pwd" placeholder="Passwort">
					<input type="password" name="pwd2" placeholder="Passwort wiederholen">
					<h6 style="margin-left:5%;margin-bottom:10px;font-family: Arial;">min 6 Zeichen lang | min 1 Buchstabe | min 1 Zahl</h6>
					<button type="submit" name="submit">Registrieren</button>
					</form>
					</div>
					</div>
					</section>';
				}
			?>
			
<?php
	include_once 'footer.php';
?>
 