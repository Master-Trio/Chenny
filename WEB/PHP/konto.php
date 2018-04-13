<?php
	include_once 'header.php';
?>

<div class="kontodiv">
<h1 style="text-align:center;font-size:40px;margin-top:10px;margin-bottom:10px;">Kontoeinstellungen</h1>
<table style="width:50%;margin-left:25%;margin-right:25%;text-align:center;" class="table">
  <?php
  echo "
  <tbody>
    <tr>
		<td>Vorname</td>
		<td style='text-align:left;'>".$_SESSION['vname']."</td>
    </tr>
    <tr>
		<td>Nachname</td>
		<td style='text-align:left;'>".$_SESSION['nname']."</td>
    </tr>
	 <tr>
		<td>Username</td>
		<td style='text-align:left;' id='1'>".$_SESSION['uid']."<button onclick='sw(1);' class='aaa'>ändern</button></td>
    </tr>
	<tr>
		<td>E-Mail</td>
		<td style='text-align:left;' id='2'>".$_SESSION['email']."<button onclick='sw(2);' class='aaa'>ändern</button></td>
    </tr>
	<tr>
		<td>Passwort</td>
		<td style='text-align:left;' id='3'>********<button onclick='sw(3);' class='aaa'>ändern</button></td>
    </tr>
  </tbody>";
  ?>
</table>
</div>
<?php
	include_once 'footer.php';
?>