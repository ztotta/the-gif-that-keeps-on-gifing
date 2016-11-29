console.log('timeline.js loaded');

j=0;
function renderTimelineGifs(result) {
  $(".timeline-gif")[j].src = result.data[0].images.original.url;
//  console.log(result.data[0].slug);
	j++;
}

var surveySearchValuesTimeline = [];
var apiResults = [];

// The answer's corresponding search values stored in the 'results.ejs' file are pushed into the above array:
$.each($('.surveySearchValues'), function( index, value ) {
  surveySearchValuesTimeline.push(value.innerHTML);
});

// Each answer's corresponding search value is then inserted into an API request URL.
// A Promise.all() is set up to catch the API responses, push them into an array, and
// then sort them by their index before sending them out 1-by-1 to populate the 
// corresponding .gif and answer on the 'results.ejs' view (i.e. the user's timeline):
Promise.all(surveySearchValuesTimeline.map(function(queryString, index) {
	var x = new Promise(function(res, rej) {
		 $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=dc6zaTOxFJmzC`,
        dataType: 'json',
			  error: function(err) {
					console.log(err);
					rej();
				},
        success: function(result){
						apiResults.push({
								index: index,
								result: result
						})
						res();
            }
        })
	})
	return x;
})).then(function() {
				apiResults.sort(function(a, b) {
					if (a.index > b.index) { return 1 }
					else if (b.index > a.index) { return -1 }
					else { return 0 }
				}).forEach(function(data) {
					renderTimelineGifs(data.result);
				})
		});

// When the user clicks 'Share' after seeing their results, their id is retrieved from
// the database and <html> is generated to present the newly created URL which users
// can then copy and share:
$('#share-results').click(function() {
	$.get({
		url: "/getMyId", //+this.database,
		dataType: 'json',
		success: function(data) {
			$('.results-main').append(`
				<div id='share-link' class="row center-align">
        <div class="col s12">
          Share with friends AND family!:
          <div class="input-field inline">
            <input type="text">
            <label for="email" data-error="wrong" data-success="right"></label>
          </div>
        </div>
      	</div>
			`);
			$('input').val(`http://pacific-river-56706.herokuapp.com/shareMyResults/${data.user._id}`);
		}
	})
})
