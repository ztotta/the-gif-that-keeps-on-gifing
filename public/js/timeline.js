// Grab results from DB
// Send the values through the API request
// Take results and populate timeline
// 
// 

//$.get('/results', function(results) {
//		console.log(results);
//})

console.log('timeline.js loaded');

j=0;

function renderTimelineGifs(result) {
  $(".timeline-gif")[j].src = result.data[0].images.original.url;
  console.log(result);
	j++;
}

var surveySearchValuesTimeline = [];
var apiResults = [];

$.each($('.surveySearchValues'), function( index, value ) {
  surveySearchValuesTimeline.push(value.innerHTML);
});

function apiRequest() {
	  surveySearchValuesTimeline.forEach(function(answer) {
        console.log(answer);
        $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${answer}&api_key=dc6zaTOxFJmzC`,
        dataType: 'json',
        success: function(result){
            renderTimelineGifs(result);
            }
        });
    })
}

function populateTimeline() {
	
}