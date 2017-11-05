$(document).ready(function(){
  $('#ajax-button').on("click", makeRequest);
});

function makeRequest() {
  $.get('sample-jquery.txt', function(data) {
    $('#ajax-data').text(data);
  })
}
