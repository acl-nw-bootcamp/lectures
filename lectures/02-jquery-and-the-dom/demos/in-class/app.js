function startFunction() {
  $('ul').addClass('highlight');
  $('p:nth-of-type(2)').addClass('highlight');
  $('#main-menu').css("border", "1px solid red");
}

$(document).ready(startFunction);
