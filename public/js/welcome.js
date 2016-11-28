console.log('welcome.js loaded');


function renderNewGif(result){
  $('#gifimage')[0].src = result.data[0].images.original.url;
}


$('#instagif').click(function (){
  console.log("instagif!")
     var gifResults = $('#key_word').val();
    console.log(gifResults)
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${gifResults}&api_key=dc6zaTOxFJmzC`,
      type: 'GET',
      dataType: 'json',
      success: function(result){
      renderNewGif(result)
      }
    })
})

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
