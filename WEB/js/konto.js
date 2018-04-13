function sw(x){
	if(x==1){
		var s ="<form action='konto.ext.php' method='POST'>";
		s += "<input name='username' class='in' type='text'><button name='submit1' type='submit' class='aaa'>speichern</button>";
		s += "</form>"
		window.document.getElementById('1').innerHTML = s;
	}
	if(x==2){
		var s ="<form action='konto.ext.php' method='POST'>";
		s += "<input name='email' class='in' type='text'><button name='submit2' type='submit' class='aaa'>speichern</button>";
		s += "</form>"
		window.document.getElementById('2').innerHTML = s;
	}if(x==3){
		var s ="<form action='konto.ext.php' method='POST'>";
		s += "<input name='pwd' class='in' type='text'><button name='submit3' type='submit' class='aaa'>speichern</button>";
		s += "</form>"
		window.document.getElementById('3').innerHTML = s;
	}
}