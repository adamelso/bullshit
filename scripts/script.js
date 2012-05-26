function updateCounter() {

		var counter;
		if(localStorage) {
			counter = parseInt(localStorage["counter"]);
			if(typeof counter === "number"){
				counter++;
			} else {
				counter = 1;
			}
			localStorage["counter"] = counter;
		} else {
			counter = parseInt($('#count').html());
			counter++;
		}

		$('#count').html(counter);
		
		if(counter === 1) {
			$('#s').hide();
		} else {
			$('#s').show();
		}
}

$(document).ready(function() {

	var counter;
	if(localStorage) {
		counter = parseInt(localStorage["counter"]);
		if(typeof counter === "number"){
			$('#count').html(counter);
		}
	}


	$('#counter > p > a').click(function(e) {
		updateCounter();
	});

	var timer;                //timer identifier
	var timerInterval = 400;  //time in ms, 5 second for example

	$('body').bind('keypress', function(e) {
		if(e.keyCode==13){
			clearTimeout(timer);
			typingTimer = setTimeout(updateCounter, timerInterval);
		} else if(e.keyCode==46){
		if(localStorage) {
			localStorage["counter"] = 0;
		} 

		$('#count').html(0);
		$('#s').show();
		}
	});

});

