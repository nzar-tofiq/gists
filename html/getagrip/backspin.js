$(document).ready(function(){
	var bcanvas, bstage, bexportRoot;
})

function backinit() {
	bcanvas = document.getElementById("bcanvas");
	images = images||{};

	var manifest = [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/handle.png", id:"handle"},
		{src:"images/tabletennisracketoutlinemd.png", id:"tabletennisracketoutlinemd"},
		{src:"images/tabletennisracketoutlinemdpngcopy.png", id:"tabletennisracketoutlinemdpngcopy"}
	];

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	bexportRoot = new lib.backspin2();

	bstage = new createjs.Stage(canvas);
	bstage.addChild(bexportRoot);
	bstage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", bstage);
	bexportRoot.instance.play();
}