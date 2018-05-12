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
    ';
}else{
		header("Location:../index.html");
}
?>
    <script>
        // Dies wird für die Verwendung von Canvas benötigt
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        // Dies sind die Variablen für die Höhe und Breite des Canvas
        let cw;
        let ch;
        // Multiplikator für Canvasgröße
        let screenSize = 1;
        // Hier wird sowohl die Höhe, als auch die Breite von Canvas festgelegt
        function ausrichtung() {
            var quer = true;

            // -- FENSTERBREITE -- 
            // nötig zur Abfrage der Fensterbreite
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight || e.clientHeight || g.clientHeight;

            switch (true) {
                case (x > 500 && x < 600):
                    screenSize = 0.5;
                    break;
                case (x > 600 && x < 700):
                    screenSize = 0.6;
                    break;
                case (x > 700 && x < 800):
                    screenSize = 0.7;
                    break;
                case (x > 800 && x < 900):
                    screenSize = 0.8;
                    break;
                case (x > 900 && x < 1000):
                    screenSize = 0.9;
                    break;
                case (x > 1000 && x < 1100):
                    screenSize = 1;
                    break;
                case (x > 1100 && x < 1200):
                    screenSize = 1.1;
                    break;
                case (x > 1200 && x < 1300):
                    screenSize = 1.2;
                    break;
                case (x > 1300 && x < 1400):
                    screenSize = 1.3;
                    break;
                case (x > 1400 && x < 1500):
                    screenSize = 1.4;
                    break;
                case (x > 1500 && x < 1600):
                    screenSize = 1.5;
                    break;
                case (x > 1600 && x < 1700):
                    screenSize = 1.6;
                    break;
                case (x > 1700):
                    screenSize = 1.7;
                    break;
            }
            
            // -- FENSTERBREITE-ENDE --

            if (quer == false) {
                // sowohl die Breite, als auch die Höhe werden mit einem Multiplikator versehen
                canvas.width = 500 * screenSize;
                canvas.height = 707.5 * screenSize;
            } else {
                canvas.width = 707.5 * screenSize;
                canvas.height = 500 * screenSize;
            }

            cw = canvas.width;
            ch = canvas.height;
        }

        // Hintergrund
        function background() {
            ctx.fillStyle = "lightgrey";
            ctx.fillRect(0, 0, cw, ch);
        }

        // Hiermit werden die Ränder von Canvas beseitigt
        topCanvas = canvas.offsetTop;
        console.log(topCanvas);
        leftCanvas = canvas.offsetLeft;

        // Die Funktionen werden beim Laden der Seite ausgeführt
        window.onload = function() {
            ausrichtung();
            background();
        }

        // Die Funktionen werden bei Veränderung der Fenstergröße ausgeführt
        window.onresize = function() {
            ausrichtung();
            background();
        }
    
    </script>

<?php
	include_once 'footer.php';
?>