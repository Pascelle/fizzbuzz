
// objective: iterate 1 through 100.  If num is div by 3, print out fizz.  Div by 5 print out buzz. Div by both FizzBuzz.  Neither then print num //

$(document).ready(function() { 

	var rangeLimit = 100;
	var responsefor3 = 'fizz';
	var responsefor5 = 'buzz';
	var responsefor15 = 'fizzbuzz';

	for (var i = 1; i <= rangeLimit; i++){
		//see if it is divisible by 15; if so append fb to ul

		if(i % 15 === 0) {
			$('.fb-list').append("<li>" + responsefor15 + "</li>");

		//if divisible by 3 append fizz to ul
		} else if (i % 3 === 0) {
				$('.fb-list').append("<li>" + responsefor3 + responsefor5 + "</li>");
		//if divisible by 5 append buzz to ul

		} else if (i % 5 === 0) { 
				$('.fb-list').append("<li>" + responsefor5 + "</li>");

		} else {
			$('.fb-list').append(i);
		}
	}
});