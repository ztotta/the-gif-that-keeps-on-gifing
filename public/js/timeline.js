console.log('timeline.js loaded');

j=0;
function renderTimelineGifs(result) {
  $(".timeline-gif")[j].src = result.data[0].images.original.url;
//  console.log(result.data[0].slug);
	j++;
}

var surveySearchValuesTimeline = [];
var apiResults = [];

$.each($('.surveySearchValues'), function( index, value ) {
  surveySearchValuesTimeline.push(value.innerHTML);
});

q=0;
function apiRequest() {
	  surveySearchValuesTimeline.forEach(function(queryString) {
        console.log("At sSVT[q], searching: " + queryString);
				q++;
        $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=dc6zaTOxFJmzC`,
        dataType: 'json',
        success: function(result){
            renderTimelineGifs(result);
            }
        })
    })
}

function populateTimeline() {
	
}