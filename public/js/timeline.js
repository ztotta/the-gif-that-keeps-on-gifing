// Grab results from DB
// Send the values through the API request
// Take results and populate timeline
// 
// 

//$.get('/results', function(results) {
//		console.log(results);
//})

console.log('timeline.js loaded')

function apiRequest() {
	  surveySearchValues.forEach(function(answer) {
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

function populateTimeline() {
	
}