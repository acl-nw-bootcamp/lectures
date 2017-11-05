var httpRequest;
const TEXT_FILE = 'sample.txt'; // Global Constant
const constObject = {};
constObject.title = "Object Title"; // Totally Legal! WTF??
constObject = new Object(); // will generate an error

window.addEventListener("load", function() {
  document.getElementById('ajax-button').addEventListener("click", makeRequest);
});

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  var testVar = "test";
  TEXT_FILE = "new_sample.txt"; // will generate an error - BAD!
  const TEMP_FILE = 'temp.txt'; // local constant
  constObject.title = "New Object Title"; // Totally Legal! WTF??

  if (!httpRequest) {
    let canProceed = false;
    for (let i = 0; i < 5; i++) {
      if (canProceed) {

      }
    }
    alert('Giving up :( Cannot create an XMLHTTP instance');
    // return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'sample.txt');
  httpRequest.send();

}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      document.getElementById('ajax-data').innerText = httpRequest.responseText;
    } else {
      alert('There was a problem with the request.');
    }
  }
}
