// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

// TODO: write your module tests here
var WebViewSelectOptions = require('com.centogram.webviewselectoptions');

var wv = Ti.UI.createWebView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	url: 'http://www.coolelephant.co.uk',
	contextMenu: [
		{
			title: 'Do Something', //Menu title
			eventTag: 'do_something' //The string passed back in e.eventTag whn the menu is selected
		},
		{
			title: 'Do Something Else',
			eventTag: 'do_something_else'
		}
	]
	
});

wv.addEventListener('contextMenuSelected', function(e){
	alert('action selected: ' + e.eventTag);
});

win.add(wv);

win.open();

