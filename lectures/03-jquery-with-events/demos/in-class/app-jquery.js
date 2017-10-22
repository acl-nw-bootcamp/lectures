var classes = [
  "Code 101",
  "Code 102",
  "Code 201",
  "Code 301",
  "Code 401",
];

function buildClassList() {
  var $classList = $('#class-list');
  for (var index = 0; index < classes.length; index++) {
    var $link = $('<a></a>')
                  .text(classes[index])
                  .attr("href", "http://www.code.com");
    $classList.append($('<li></li>').text("Class: ").append($link));
  }
  $classList.on("click", "a", handleNavItemClick);
}

$(document).ready(buildClassList);

function handleNavItemClick(event) {
  var itemClicked = event.target;
  var itemText = itemClicked.innerText;
  console.log("Clicked Item: "+itemText);
  event.preventDefault();
}
