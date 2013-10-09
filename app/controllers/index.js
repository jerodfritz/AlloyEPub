$.webView.addEventListener('contextMenuSelected', function(e) {
  alert('selected text: ' + e.selectedText);
  Ti.API.info(JSON.stringify(e));
});

$.index.open();
