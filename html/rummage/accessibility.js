function decreaseTextSize() {
	var arr = document.getElementsByTagName('*');
	for (var i = 0; i < arr.length; i++) {
		arr[i].style.fontSize = "96%";
	}
}

function normalTextSize() {
	var arr = document.getElementsByTagName('*');
	for (var i = 0; i < arr.length; i++) {
		arr[i].style.fontSize = "100%";
	}
}
	
function increaseTextSize() {
	var arr = document.getElementsByTagName('*');
	for (var i = 0; i < arr.length; i++) {
		arr[i].style.fontSize = "104%";
	}
}