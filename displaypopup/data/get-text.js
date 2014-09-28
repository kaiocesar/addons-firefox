
// var textArea = document.getElementById("edit-box");
var username = document.getElementById("username");
var password = document.getElementById("password");
var form = document.getElementById("form");

// var btnEnviar = document.getElementById("btnEnviar");


form.addEventListener("submit", function onSubmit(event){
	user = username.value.replace(/(\r\n|\n|\r)/gm,"");
	pass = password.value.replace(/(\r\n|\n|\r)/gm,"");
	self.port.emit("text-entered", user, pass);
}, false);




// btnEnviar.addEventListener("keypress", function onkeypress(event){
// 		text = textArea.value.replace(/(\r\n|\n|\r)/gm,"");
// 		self.port.emit("text-entered", text);
// 		textArea.value = "";
// }, false);




// textArea.addEventListener("keyup", function onkeyup(event){
// 	if (event.keyCode == 13) {
// 		text = textArea.value.replace(/(\r\n|\n|\r)/gm,"");
// 		self.port.emit("text-entered", text);
// 		textArea.value = "";
// 	}
// }, false);

self.port.on("show", function onShow(){
	username.focus();
});
