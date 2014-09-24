/**
*	Tutorial by doc MDN
* 	@link https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Adding_a_Button_to_the_Toolbar
*/

var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
	id:  "mozilla-link",
	label: "Visit mozila",
	icon: {
		"16":"./icon-16.png",
		"32":"./icon-32.png",
		"64":"./icon-64.png"
	},
	onClick : handleClick
});

function handleClick() {
	tabs.open("https://www.mozilla.org/");
	alert("Hi");
}