console.log('JS loaded!');

function renderResults(result) {
    $("#survey-gif").attr('src', `${result.data[0].images.original.url}`);
    console.log(result);
}

var questionTexts = [
	'What was the weather like when you were born?',
	'How many siblings did you have?',
	'What was your relationship with your mother like when you were 13?',
	'How was your experience with puberty?',
	'How do imagine your death?'
];

var questionAnswers = [
	[
		['sunny', 'sunshine'],
		['stormy', 'thunder+storm'],
		['overcast', 'overcast'],
		['cold af', 'freezing'],
		['hot af', 'hot+weather']
	],
	[
		['Answer 2.1', 'val'],
		['Answer 2.2', 'val'],
		['Answer 2.3', 'val'],
		['Answer 2.4', 'val'],
		['Answer 2.5', 'val']
	],
	[
		['Answer 3.1','val'],
		['Answer 2','val'],
		['Answer 3','val'],
		['Answer 4','val'],
		['Answer 5','val']
	],
	[
		['Answer 4.1','val'],
		['Answer 2','val'],
		['Answer 3','val'],
		['Answer 4','val'],
		['Answer 5','val']
	],
	[
		['Answer 5', 'val'],
		['Answer 2', 'val'],
		['Answer 3', 'val'],
		['Answer 4', 'val'],
		['Answer 5', 'val']
	]
];

var questionGifs = [
	"http://i.giphy.com/utOBfj70LUHN6.gif",
	"http://i.giphy.com/utOBfj70LUHN6.gif",
	"http://i.giphy.com/Nkko2AtLJiEEg.gif",
	"http://i.giphy.com/od34hMgPzLt0Q.gif",
	"http://i.giphy.com/8RClotEIoXuAE.gif"
];

k=0;
function resetCard() {
		$('.question-number').text('Question ' + (k+1));
		$('.question-text').text(questionTexts[k]);
		$('#option1').text(questionAnswers[k][0][0]).val(questionAnswers[k][0][1]);
		$('#option2').text(questionAnswers[k][1][0]).val(questionAnswers[k][1][1]);
		$('#option3').text(questionAnswers[k][2][0]).val(questionAnswers[k][2][1]);
		$('#option4').text(questionAnswers[k][3][0]).val(questionAnswers[k][3][1]);
		$('#option5').text(questionAnswers[k][4][0]).val(questionAnswers[k][4][1]);
		$("#survey-gif").attr("src", questionGifs[k]);
		if (k >= 4) $('#submit').text('Submit');
		reloadOptions();
};

$(document).ready(function() {
	resetCard();
});

var submissionText = [];
var submissionVal = [];

$('#submit').click(function () {
	if ($('#submit').text() === 'Submit') { 
		$.post('/')
		document.location.href = '/results'; 
	}
	else {
		responseText = $('.responses option:selected').text();
		responseVal = $('.responses option:selected').val();
		submissionText.push(responseText);
		submissionVal.push(responseVal);
		console.log(submissionText);
		console.log(submissionVal);
		k++;
		reloadOptions();
		resetCard();
	}
});

function apiRequest() {
	  submission.forEach(function(answer) {
        console.log(answer);
        $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${answer}&api_key=dc6zaTOxFJmzC`,
        dataType: 'json',
        success: function(result){
            renderResults(result);
            }
        });
    })
}

//Add Dropdown functionality to the survey page
//this does not work yet
function reloadOptions() {
	$(document).ready(function() {
    $('select').material_select();
		$('.select-dropdown').val('Your Answer');
  });
};


// TIMELINE FUNCTION FOR RESULTS PAGE
(function() {

	'use strict';

	// define variables
	var items = document.querySelectorAll(".timeline li");

	// check if an element is in viewport
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function callbackFunc() {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				items[i].classList.add("in-view");
			}
		}
	}

	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);

})();
