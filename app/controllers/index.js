$.webView.addEventListener('contextMenuSelected', function(e) {
  //alert('selected text: ' + e.selectedText);
  //Ti.API.info(JSON.stringify(e));
  
  //Ti.API.debug('selected text: ' + $.webView.evalJS("$('#area').getSelection().text"));
  
  switch(e.eventTag) {
  	
  	case 'do_something':
  	Ti.App.fireEvent('tibridge:do_something');
  	break;
  	case 'do_something_else':
  	Ti.App.fireEvent('tibridge:do_something_else');
  	break;
  }
  
});

$.index.open();
