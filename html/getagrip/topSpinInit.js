$(document).ready(function(){
	var canvas, stage, exportRoot;
})
	function topinit() {
		canvas = document.getElementById("canvas");
		images = images||{};

		var manifest = [
			{src:"images/arrow.png", id:"arrow"},
			{src:"images/handle.png", id:"handle"},
			{src:"images/tabletennisracketoutlinemd.png", id:"tabletennisracketoutlinemd"},
			{src:"images/tabletennisracketoutlinemdpngcopy.png", id:"tabletennisracketoutlinemdpngcopy"}
		];

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", tophandleFileLoad);
		loader.addEventListener("complete", tophandleComplete);
		loader.loadManifest(manifest);
	}

	function tophandleFileLoad(evt) {
		if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
	}

	function tophandleComplete() {
		exportRoot = new lib.topspin();

		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();

		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", stage);
		exportRoot.instance.play();
	}