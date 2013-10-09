// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var WebViewSelectOptions = require('com.centogram.webviewselectoptions');

var wv = Ti.UI.createWebView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	url: 'http://www.coolelephant.co.uk',
	contextMenu: 'Do Something'
	
});

wv.addEventListener('contextMenuSelected', function(e){
	alert('action selected: ' + e.selectedText);
});

win.add(wv);

