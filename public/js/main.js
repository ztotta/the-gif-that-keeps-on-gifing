console.log('JS loaded!');

var questionTexts = [
'What was the weather like when you were born?', //1
'How many siblings did you have?', //2
'What was your relationship with your mother like when you were 13?', //3
'How was your experience with puberty?', //4
'How do imagine your death?', //5
'What is your favorite snack?', //6
'Which of the following films most accurately represents your life?', //7
'Which Kanye?', //8
'What was your favorite book as a child?', //9
'What is the afterlife like?', //10
'Pick one rom-com superstar to adopt you:', //11
'Ultimate bucket list item?', //12

];

var questionAnswers = [ 
  [
		// left: text that users see on survey | right: value that is stored for searching the API
      ['sunny', 'sunshine'],
      ['stormy', 'thunder+storm'],
      ['overcast', 'overcast'],
      ['cold af', 'freezing'],
      ['hot af', 'hot+weather']
  ], //1
  [
      ['only child', 'one+bat'],
      ['1-2 warring shogunates', 'sumo+wrestler+shimmy'],
      ['lost count', 'counting'],
      ['do step-siblings count?', 'step+siblings'],
      ['clones', 'clone+donald+trump']
  ], //2
  [
      ['charmed','sunshine'],
      ['tumultuous','tumultuous'],
      ['still on the teat','babies'],
      ['like the VERY beginning of Bambi','lost+deer'],
      ['We do not speak of those times (still in recovery)','trauma']
  ], //3
  [
      ['Awkward','awkward'],
      ['empowering','empowering'],
      ['scarring','scarring'],
      ['smooth','smooth'],
      ['lawlz no comment','static']
  ], //4
  [
      ['spooky', 'spooky'],
      ['silly', 'silly'],
      ['never', 'never'],
      ['sudden', 'surprise+pug'],
      ['slow', 'sloth']
  ], //5
  [
    ['souls', 'souls'],
    ['peanuts', 'peanuts'],
    ['garbage', 'garbage'],
    ['guacamole ', 'guacamole '],
    ['steak', 'steak']
  ], //6
  [
    ['Amadeus ', 'mozart'],
    ["Queen Latifah's Last Holiday", 'queen+latifah'],
    ['Saw II', 'Saw+movie'],
    ['Cinderella ', 'Cinderella '],
    ['The Devil Wears Prada', 'devil']
  ], //7
  [
    ['The Old Kanye ', 'Kanye'],
    ['Straight from the go Kanye', 'Kanye'],
    ['Chop up the soul Kanye', 'Kanye'],
    ['Set on his goals Kanye ', 'Kanye'],
    ['Bad Mood Kanye', 'Kanye']
  ], //8
	[
    ['Everybody Poops ', 'everybody+poops'],
    ['Harry Potter', 'harry+potter'],
    ['Crime & Punishment', 'mother+russia'],
    ['Halo ', 'Halo+5'],
    ['Bambi', 'bambi']
  ], //9
	[
    ['Depends where you end up ', 'hell'],
    ['Nothing', 'night+sky'],
    ['Fun as hell', 'hell'],
    ['Full of massages and m&ms', 'heaven'],
    ['San Junipero', 'computer+server']
  ], //10
	[
    ['Michelle Pfeiffer', 'michelle+pfeiffer'],
    ['Meg Ryan', 'meg+ryan'],
    ['Hugh Grant', 'hugh+grant'],
    ['Julia Roberts ', 'julia+roberts '],
    ['Pre-McConaissance Matthew', 'Matthew+mcconaughey']
  ], //11
  [
    ['Skydive ', 'Skydive'],
    ['Rob a bank', 'butch+cassidy'],
    ['Travel the world', 'earth'],
    ['sleep for > 6 hours', 'sleep'],
    ['Drive across the US', 'roadtrip']
  ] //12
];

// .gifs on the survey cards
var questionGifs = [
  "http://i.giphy.com/cISOHQRbTfNe0.gif", //1
  "http://i.giphy.com/utOBfj70LUHN6.gif", //2
  "http://i.giphy.com/Nkko2AtLJiEEg.gif", //3
  "http://i.giphy.com/od34hMgPzLt0Q.gif", //4
  "http://i.giphy.com/8RClotEIoXuAE.gif", //5
  "http://i.giphy.com/8iPc2Nd9XG5kk.gif", //6
  "http://i.giphy.com/13C8uU4ZKi9CW4.gif", //7
  "http://i.giphy.com/xTcnSNxfOFmfCCUTPG.gif", //8
  "http://i.giphy.com/66XPTwbYSuIaQ.gif", //9
  "http://i.giphy.com/4vz2YB5WA0AE0.gif", //10
  "http://i.giphy.com/eSrUVJ5AGkf6g.gif", //11
  "http://i.giphy.com/l2Je0WawqkU6QnT5C.gif", //12
];

// After the user clicks 'Next' on the survey and their results are stored (see below),
// the card is reset with the corresponding .gif, question, and answer choices.
// After the survey is complete, the 'Next' button turns to 'Submit' and Will Smith
// welcomes the user to go check out their results:
k=0;
function resetCard() {
		if (k >= 12) {
			$('#submit').text('Submit');
			$('.question-number').text('Click submit to get giffy wit it');
			$('.question-text').text('NA NA NA NA NA NA NA');
			$("#survey-gif").attr("src", "https://media.giphy.com/media/xv7ngBv35OXXG/giphy.gif");
			$('.responses').remove();
		} else {
			$('.question-number').text('Question ' + (k+1));
			$('.question-text').text(questionTexts[k]);
			$('#option1').text(questionAnswers[k][0][0]).val(questionAnswers[k][0][1]);
			$('#option2').text(questionAnswers[k][1][0]).val(questionAnswers[k][1][1]);
			$('#option3').text(questionAnswers[k][2][0]).val(questionAnswers[k][2][1]);
			$('#option4').text(questionAnswers[k][3][0]).val(questionAnswers[k][3][1]);
			$('#option5').text(questionAnswers[k][4][0]).val(questionAnswers[k][4][1]);
			$("#survey-gif").attr("src", questionGifs[k]);
			reloadOptions();
		};
};

$(document).ready(function() {
	resetCard();

// RESPONSIVE NAVBAR
$(".button-collapse").sideNav();
});

var surveySelections = [];
var surveySearchValues = [];

var submissionData = {sS: surveySelections, sSV: surveySearchValues};

// When the user selects an answer and clicks 'Next', their answer is pushed into
// the above arrays, which hold their selection and the corresponding search value.
// The card is then reset (see above). 
// If the 'Next' button has been changed to 'Submit' (after the survey is complete [see above]),
// The results are sent to the database with an Ajax Put request, updating the user's stored
// answers. The user is then taken to the results page (continue in 'timeline.js'):
$('#submit').click(function () {
	if ($('#submit').text() === 'Submit') {
//		$('#submit').css( "background-color", "#f06292" );

		$.ajax({
			url: "/results", //+this.database,
			type: "PUT",
			data: submissionData,
			dataType: 'json'
		}).then(function(data) {
			document.location.href = '/results';
		}, function(err) {
			console.error(err);
		});
	}
	else {
		if ($('.select-dropdown').val() === 'Your Answer') {
			return;
		}
		else {
			responseText = $('.responses option:selected').text();
			responseVal = $('.responses option:selected').val();
			surveySelections.push(responseText);
			surveySearchValues.push(responseVal);
			k++;
			reloadOptions();
			resetCard();
		}
	}
});

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

$('.navlinks').on('click', function(e) {
  console.log('fuck this')
  e.stopPropagation;
})
