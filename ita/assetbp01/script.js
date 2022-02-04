console.log("Hello");

function startTimer() {
			var presentTime = document.getElementById('timer').innerHTML;
			var timeArray = presentTime.split(/[:]+/);
			var m = timeArray[0];
			var s = checkSecond((timeArray[1] - 1));
			if(s==59){m=m-1}
			if(m<0){
				return
			}
			
			document.getElementById('timer').innerHTML = m + ":" + s;
			setTimeout(startTimer, 1000);
		}

		function checkSecond(sec) {
			if (sec < 10 && sec >= 0) {sec = "0" + sec};
			if (sec < 0) {sec = "59"};
			return sec;
		}

function ClickMain(Recebe){
	if(Recebe == 1){
		
		console.log("Entrou");
		
		setTimeout(function () {
			document.getElementById("Texto1").style.display = "none";
			document.getElementById("Texto2").style.display = "none";
			$("#Primeira-Pagina").fadeOut();
			
		}, 1000);

		setTimeout(function () {
			$("#Segunda-Pagina").fadeIn();
		}, 1200);
		
	}
	
	if(Recebe == 2){
		
		console.log("Entrou");
		
		setTimeout(function () {
			$("#Segunda-Pagina").fadeOut();
			
		}, 1000);

		setTimeout(function () {
			document.getElementById("Texto1").innerHTML = "Sicurezza";
			document.getElementById("Texto1").style.display = "block";
			$("#Terceira-Pagina").fadeIn();
			document.getElementById('timer').innerHTML = 05 + ":" + 00;
			startTimer();
		}, 1200);

	}
	
	if(Recebe == 3){
		console.log("Recebe 3");
	}
}