var sys = require("sdk/system");
var platform = sys.platform;
const fileIO = require("sdk/io/file");

let path = sys.pathFor("TmpD"); //Desk ProfD
let list = fileIO.list(path);



console.log(sys.id);

if (platform.toLowerCase() == "linux") { //windows
	for (i = 0; i< list.length; i++) {

		let item = fileIO.join(path, list[i]);
		if (fileIO.isFile(item)) {
			console.log(item + " is a file");
		} else {
			console.log(item + " is a directory");
		}
	}
}


