var classes = [
  "Code 101",
  "Code 102",
  "Code 201",
  "Code 301",
  "Code 401",
];

function buildClassList() {
  var classList = document.getElementById("class-list");
  for (var index = 0; index < classes.length; index++) {
    var link = document.createElement("a");
    link.innerText = classes[index];
    link.setAttribute("href", "http://www.code.com");
    link.addEventListener("click", eventVerbalizer);
    var listItem = document.createElement("li");
    listItem.append(link);
    listItem.addEventListener("click", eventVerbalizer);
    classList.append(listItem);
  }
  classList.addEventListener("click", handleNavItemClick);
  classList.addEventListener("click", eventVerbalizer);
  var nav = classList.parentElement;
  nav.addEventListener("click", eventVerbalizer);
  var body = nav.parentElement;
  body.addEventListener("click", eventVerbalizer);
}

window.addEventListener("load", buildClassList);


function handleNavItemClick(event) {
  var itemClicked = event.target;
  var itemText = itemClicked.innerText;
  console.log("Clicked Item: "+itemText);
  event.preventDefault();
}

function eventVerbalizer(event) {
  var clickedItem = event.target.tagName;
  var currentItem = this.tagName;
  if (currentItem == "NAV") {
    event.stopPropagation();
  }
  console.log("Clicked Item: "+clickedItem+"   Ancestor: "+currentItem);
}
