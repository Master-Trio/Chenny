function sw(x){
	if(x==1){
		var v =window.document.getElementById('111').innerHTML;
		var s ="<div class='col'><form action='konto.ext.php' method='POST'>";
			s += "<input value='"+v+"' name='username' class='in' type='text'><button name='submit1' type='submit' class='aaa'>speichern</button></form></div>";
		window.document.getElementById('1').innerHTML = s;
		window.document.getElementById('11').innerHTML="";
	}
	if(x==2){
		var v =window.document.getElementById('222').innerHTML;
		var s ="<div class='col'><form action='konto.ext.php' method='POST'>";
			s += "<input value='"+v+"' name='email' class='in' type='text'><button name='submit2' type='submit' class='aaa'>speichern</button></form></div>";
		window.document.getElementById('2').innerHTML = s;
		window.document.getElementById('22').innerHTML="";
	}if(x==3){
		var s ="<div class='col lastDiv'><form action='konto.ext.php' method='POST'>";
			s += "<input name='pwd' class='in' type='text'><button name='submit3' type='submit' class='aaa'>speichern</button></form></div>";
		window.document.getElementById('3').innerHTML = s;
		window.document.getElementById('33').innerHTML="";
	}
}