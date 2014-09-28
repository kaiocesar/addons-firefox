var contextMenu = require("sdk/context-menu");
var data = require("sdk/self").data;
var text_entry = require("sdk/panel").Panel({
	contentURL: data.url("text-entry.html"),
	contentScriptFile: data.url("get-text.js")
});



var menuItem = contextMenu.Item({
  label: "Send text to server",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    //console.log(selectionText);

	text_entry.show();

  }
});




function handlerClick(state) {
	text_entry.show();
}

text_entry.on("show", function(){
 text_entry.port.emit("show");
});


text_entry.port.on("text-entered", function(user, password){
	console.log(user +" - - - "+ password);
	text_entry.hide();
});