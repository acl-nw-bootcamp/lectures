function showPreview() {
  $('#preview').html(marked($('#content').val()));
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}

function getStatus() {
  $('#newArticle input[name="article-status"]:checked').val()
}

$(document).ready(function() {
  $('#showPreview').on("click", showPreview);
  hljs.initHighlightingOnLoad();
});

var content = {"name": "John Doe", "title": "JSON Example"};
var JSONValue = JSON.stringify(content);
