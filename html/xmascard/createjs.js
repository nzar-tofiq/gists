var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var manifest = [
		{src:"images/flake1.png", id:"flake1"},
		{src:"images/flake2.png", id:"flake2"},
		{src:"images/flake3.png", id:"flake3"},
		{src:"images/flake4.png", id:"flake4"},
		{src:"images/flake5.png", id:"flake5"},
		{src:"images/flake6.png", id:"flake6"},
		{src:"images/flake7.png", id:"flake7"},
		{src:"images/tree.png", id:"tree"}
	];

	var loader = new createjs.PreloadJS(false);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
}

function handleFileLoad(o) {
	if (o.type == "image") { images[o.id] = o.result; }
}

function handleComplete() {
	exportRoot = new lib.Santa();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(25);
	createjs.Ticker.addListener(stage);
	myInit();
}