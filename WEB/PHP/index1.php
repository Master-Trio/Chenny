<?php
	include_once 'header.php';
	include_once 'config.php';
?>
<div class="maindiv">
<?php
	if(isset($_SESSION['uid'])){
		$sql = 'SELECT * from entwurf WHERE user_id="'.$_SESSION['id'].'"';
		$result = mysqli_query($conn,$sql);
				$resultCheck = mysqli_num_rows($result);
				if($resultCheck > 0){
					if($resultCheck == 1){
						echo 
					'<div align="center" class="row entwdiv">
						<h2 class="myFont" style="text-align:center;font-size:40px;width:100%;">Meine Entwürfe</h2><br>
							<div style="margin-left:auto;margin-right:auto;display:block;" class="col-fixed-250 entwurf">
								<button style="margin-top:210px;background-color:yellow;" type="button" class="btn">Bearbeiten</button>
								<button style="margin-top:210px;background-color:red;" type="button" class="btn">Löschen</button>
							</div>
					</div>
					<a style="text-decoration:none;" href="../main.html"><button class="nentw">Neuer Entwurf</button></a>';
					}
					if($resultCheck == 2){
						echo 
					'<div align="center" class="row entwdiv">
						<h2 class="myFont" style="text-align:center;font-size:40px;width:100%;">Meine Entwürfe</h2><br>
							<div style="margin-left:auto;margin-right:auto;display:block;" class="col-fixed-250 entwurf">
								<button style="margin-top:210px;background-color:yellow;" type="button" class="btn">Bearbeiten</button>
								<button style="margin-top:210px;background-color:red;" type="button" class="btn">Löschen</button>
							</div>
							<div style="margin-left:auto;margin-right:auto;display:block;" class="col-fixed-250 entwurf">
								<button style="margin-top:210px;background-color:yellow;" type="button" class="btn">Bearbeiten</button>
								<button style="margin-top:210px;background-color:red;" type="button" class="btn">Löschen</button>
							</div>
							</div>
					<a style="text-decoration:none;" href="../main.html"><button class="nentw">Neuer Entwurf</button></a>';
					}
					if($resultCheck == 3){
						echo 
					'<div align="center" class="row entwdiv">
						<h2 class="myFont" style="text-align:center;font-size:40px;width:100%;">Meine Entwürfe</h2><br>
							<div style="margin-left:auto;margin-right:auto;display:block;" class="col-fixed-250 entwurf">
								<button style="margin-top:210px;background-color:yellow;" type="button" class="btn">Bearbeiten</button>
								<button style="margin-top:210px;background-color:red;" type="button" class="btn">Löschen</button>
							</div>
							<div style="margin-left:auto;margin-right:auto;display:block;" class="col-fixed-250 entwurf">
								<button style="margin-top:210px;background-color:yellow;" type="button" class="btn">Bearbeiten</button>
								<button style="margin-top:210px;background-color:red;" type="button" class="btn">Löschen</button>
							</div>
							<div style="margin-left:auto;margin-right:auto;display:block;" class="col-fixed-250 entwurf">
								<button style="margin-top:210px;background-color:yellow;" type="button" class="btn">Bearbeiten</button>
								<button style="margin-top:210px;background-color:red;" type="button" class="btn">Löschen</button>
							</div>
							</div>
					<a style="text-decoration:none;" href="../main.html"><button class="nentw">Neuer Entwurf</button></a>';
					}
					
				}
				else{
					echo 
						'<div align="center" class="row entwdiv">
							<h2 class="myFont" style="text-align:center;font-size:40px;width:100%;">Keine Entwürfe vorhanden</h2><br>
						</div>
						<a style="text-decoration:none;" href="../main.html"><button class="nentw">Neuer Entwurf</button></a>';
		}
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
 