<?php
	include_once 'header.php';
	include_once 'config.php';
?>
<?php
if(isset($_SESSION['uid'])){
	echo '
    <div style="margin-top: 50px; margin-bottom: 50px;" class="wic">
        <div class="row myrow" style="width: 100%;">
            <div class="col wic">
                <canvas></canvas>
            </div>
            <div style="margin-top:10px;" class="col wic">
                <div class="middleStroke"></div>
                <div>
                    <div class="row myrow" style="width:100%;margin-top:10px;">
                        <div class="col">
                            <input style="text-align:left;font-size:15px;height:25px;" class="in" type="text" placeholder=" Entwurfsname">
                        </div>
                    </div>
                    <div class="row myrow" style="width: 100%;">
                        <div class="col">
                            <button style="font-size:20px;padding-top:4px;padding-bottom:7px;" class="but">speichern</button>
                        </div>
                    </div>
                    <div class="row myrow" style="width: 100%;">
                        <div class="col">
                            <button style="font-size:20px;padding-top:4px;padding-bottom:7px;" class="but">exportieren</button>
                        </div>
                    </div>
                    <div class="row myrow" style="width: 100%;">
                        <div class="col">
                            <a href="../main.html"><button style="font-size:20px;padding-top:4px;padding-bottom:7px;"   class="but">bearbeiten</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>';
    
    echo '
    <script src="../p5/p5.min.js"></script>
    <script src="../p5/addons/p5.dom.min.js"></script>
    <script src="../p5/addons/p5.sound.min.js"></script>
    <script src="../js/workspace.js"></script>
    ';
}else{
		header("Location:../index.html");
}
?>

<?php
	include_once 'footer.php';
?>