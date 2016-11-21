console.log('JS loaded!');

//var i = 0;
function renderResults(result) {
    $("#main-div").append(`
		<div class="results">
			<div id="answers"><img src="${result.data[0].images.original.url}"></div>
		</div>`)
    console.log(result);
//    i++;
}

var questionTexts = [
	'1) What was...',
	'2) What was...',
	'3) What was...',
	'4) What was...',
	'5) What was...'
];

var questionAnswers = [
	[
		'Answer 1',
		'Answer 2',
		'Answer 3',
		'Answer 4',
		'Answer 5'
	],
	[
		'Answer 2.1',
		'Answer 2.2',
		'Answer 2.3',
		'Answer 2.4',
		'Answer 2.5'
	],
	[
		'Answer 3.1',
		'Answer 2',
		'Answer 3',
		'Answer 4',
		'Answer 5'
	],
	[
		'Answer 4.1',
		'Answer 2',
		'Answer 3',
		'Answer 4',
		'Answer 5'
	],
	[
		'Answer 5.1',
		'Answer 2',
		'Answer 3',
		'Answer 4',
		'Answer 5'
	]
];

k=0;

function assignText() {
		$('.question-number').text('Question #' + (k+1));
		$('.question-text').text(questionTexts[k]);
		$('#option1').text(questionAnswers[k][0]);
		console.log($('#option1').text());
};

$(document).ready(function() {
	assignText();
});

var submission = [];

$('#submit').click(function () {
	response = $('.responses option:selected').text();
	submission.push(response);
	k++;
	assignText();

//$('#submit').click(function () {
//	var submission = [
//        $('#answer01').val(),
//        $('#answer02').val(),
//        $('#answer03').val(),
//        $('#answer04').val(),
//        $('#answer05').val(),
//        $('#answer06').val(),
//        $('#answer07').val(),
//        $('#answer08').val(),
//        $('#answer09').val(),
//        $('#answer10').val()
//	];

//    submission.forEach(function(answer) {
//        console.log(answer);
//        $.ajax({
//        url: `http://api.giphy.com/v1/gifs/search?q=${answer}&api_key=dc6zaTOxFJmzC`,
//        dataType: 'json',
//        success: function(result){
//            renderResults(result);
//            }
//        });
//    })
});

//Add Dropdown functionality to the survey page
//this does not work yet
$(document).ready(function() {
    $('select').material_select();
  });


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
