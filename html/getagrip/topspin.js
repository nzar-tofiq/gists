(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.topspin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// bat
	this.instance = new lib.batHandle();
	this.instance.setTransform(373.6,159,1,1,0,0,0,-148.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,125.8,634.7,295.2);


// symbols:
(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,158);


(lib.handle = function() {
	this.initialize(img.handle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,94);


(lib.tabletennisracketoutlinemd = function() {
	this.initialize(img.tabletennisracketoutlinemd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,204);


(lib.tabletennisracketoutlinemdpngcopy = function() {
	this.initialize(img.tabletennisracketoutlinemdpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,204);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().dr(-19.7,-10,39.4,20);
	this.shape.setTransform(0,0,1,2.181);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.6,-21.7,39.4,43.6);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-8.3,-15,0.191,0.191);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-15,16.8,30.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.handle();
	this.instance.setTransform(193.6,60.3,1,1,-36.1);

	this.instance_1 = new lib.tabletennisracketoutlinemd();
	this.instance_1.setTransform(0,127.7,1,1,-36.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331.5,292.3);


(lib.ball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AE4AAQAACBhbBcQhcBbiBAAQiAAAhchbQhbhcAAiBQAAiABbhcQBchbCAAAQCBAABcBbQBbBcAACAg");
	this.shape.setTransform(31.3,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjbDdQhchcAAiBQAAiABchbQBbhcCAAAQCBAABcBcQBbBbAACAQAACBhbBcQhcBbiBAAQiAAAhbhbg");
	this.shape_1.setTransform(31.3,31.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.5,62.5);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(0,40);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(0,-40);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-55,16.8,110.2);


(lib.batHandle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blanking
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-22.35,-47.7,44.7,95.4,3.3);
	this.shape.setTransform(-266.7,143.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-22.35,-47.7,44.7,95.4,3.3);
	this.shape_1.setTransform(-244.4,150.5);

	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(-248.3,-28.1,1,1.322);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPigQAxABAtAIQBRAQBBAmQBpBAAABYQAABahpBAQhqBAiVAAQiUAAhqhAQhphAAAhaQAAhYBphAQBqg/CUAAQAHAAAIAAgAiHkQIF9BG");
	this.shape_2.setTransform(-258,123.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AkpPLQgTgKgSgSIgCgPQAggZA3ASQAkANAbAWIgPAWIgBACQgtgIgygBgAh9N8Qhogcg+g+Qg8g7AMg4QgVgGgUgGQhMgaAAgkQAAgkBMgaQBMgZBsAAQBsAABMAZQBKAaAAAkQAAARgPAOQAnAVAeAeQA+A+gPA7QgRA7hUAWQgmAKgoAAQg0AAg5gPgAkMmiQh9hgAAiIQAAiJB9hgQATgQAWgMIABgBIAEgBIAAgBIAJgGQAVgLAWgKIAFAAIABAAIAIAAIAAgFQBWghBlAAQCxAAB8BgQB9BgAACJQAACIh9BgQh8BhixAAQivAAh8hhg");
	this.shape_3.setTransform(-226.7,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlzaoIAAphINMAAIAAJhgAlvPLQhphAAAhZQAAhbBphAQBqg/CVAAIAPAAQAyABAtAIQBPAQBAAmQBqBAAABbQAABZhqBAQhpBAiUAAQiVAAhqhAgAhmzxIAAgHQAAgKAHgMIgZAAIAAhxIicAAIAAkoIHNAAIAADCIhRAAIAABmIgeAAIAABNIgfAAIAAANIAAAFIgIAAIgCAAIgFABIgKACIgLADQgJAFgCAEQgSAJAAADIAAAAIAAACIgEAAQgLAEgRAJIgEADIgJABIgFgBIgCgBIgBgFQAAAAAAgBQABAAAAAAQABgBAAAAQABgBABAAIgBAAIgDACQgQALgEgBg");
	this.shape_4.setTransform(-246.7,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]},31).to({state:[]},32).wait(46));

	// arrows
	this.arrow = new lib.Tween9();
	this.arrow.setTransform(-248.3,-59.8,1,1,180);
	this.arrow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(31).to({_off:false},0).wait(1).to({rotation:180.1,y:-53.9},0).wait(1).to({y:-48.1},0).wait(1).to({y:-42.3},0).wait(1).to({y:-36.6},0).wait(1).to({y:-30.8},0).wait(1).to({y:-25},0).wait(1).to({y:-19.2},0).wait(1).to({y:-13.5},0).wait(1).to({y:-7.7},0).wait(1).to({y:-1.9},0).wait(1).to({y:3.6},0).wait(1).to({y:9.4},0).wait(1).to({y:15.2},0).wait(1).to({y:21},0).wait(1).to({y:26.7},0).wait(1).to({y:32.5},0).wait(1).to({y:38.3},0).wait(1).to({y:44.1},0).wait(1).to({y:49.8},0).wait(1).to({y:55.6},0).wait(1).to({y:61.4},0).wait(1).to({y:67.1},0).wait(1).to({y:72.9},0).wait(1).to({y:78.7},0).wait(1).to({y:84.5},0).wait(1).to({y:90.2},0).wait(1).to({y:96},0).wait(1).to({y:101.8},0).wait(1).to({y:107.6},0).wait(1).to({y:113.3},0).wait(1).to({y:119.1},0).to({_off:true},1).wait(46));

	// ball
	this.ball = new lib.ball();
	this.ball.setTransform(-573.5,181.4,1,1,0,0,0,31.3,31.3);

	this.timeline.addTween(cjs.Tween.get(this.ball).to({x:-245.4,y:31.3},31).wait(32).to({scaleX:2.31,scaleY:2.31,x:-234.3,y:320.3},24).to({_off:true},1).wait(21));

	// bat
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(0,1.2,1,1,-0.4,0,0,303.9,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:165.7,regY:146.1,rotation:0.6,x:-139.2,y:111.7},0).wait(1).to({rotation:1.8,x:-141.5,y:108.8},0).wait(1).to({rotation:3,x:-143.6,y:105.9},0).wait(1).to({rotation:4.1,x:-145.7,y:102.9},0).wait(1).to({rotation:5.3,x:-147.7,y:99.9},0).wait(1).to({rotation:6.5,x:-149.7,y:96.9},0).wait(1).to({rotation:7.6,x:-151.6,y:93.8},0).wait(1).to({rotation:8.8,x:-153.5,y:90.8},0).wait(1).to({rotation:10,x:-155.3,y:87.6},0).wait(1).to({rotation:11.1,x:-157,y:84.4},0).wait(1).to({rotation:12.3,x:-158.7,y:81.2},0).wait(1).to({rotation:13.5,x:-160.3,y:77.9},0).wait(1).to({rotation:14.6,x:-161.8,y:74.7},0).wait(1).to({rotation:15.8,x:-163.2,y:71.4},0).wait(1).to({rotation:17,x:-164.6,y:68},0).wait(1).to({rotation:18.1,x:-166,y:64.6},0).wait(1).to({rotation:19.3,x:-167.2,y:61.2},0).wait(1).to({rotation:20.5,x:-168.4,y:57.7},0).wait(1).to({rotation:21.6,x:-169.6,y:54.3},0).wait(1).to({rotation:22.8,x:-170.6,y:50.8},0).wait(1).to({rotation:24,x:-171.5,y:47.4},0).wait(1).to({rotation:25.1,x:-172.5,y:43.8},0).wait(1).to({rotation:26.3,x:-173.3,y:40.3},0).wait(1).to({rotation:27.5,x:-174,y:36.7},0).wait(1).to({rotation:28.6,x:-174.8,y:33.2},0).wait(1).to({rotation:29.8,x:-175.4,y:29.6},0).wait(1).to({rotation:31,x:-175.9,y:26.1},0).wait(1).to({rotation:32.2,x:-176.4,y:22.4},0).wait(1).to({rotation:33.3,x:-176.8,y:18.9},0).wait(1).to({rotation:34.5,x:-177.1,y:15.3},0).wait(33).wait(1).to({rotation:35.2,x:-177.3,y:13},0).wait(1).to({rotation:36,x:-177.4,y:10.6},0).wait(1).to({rotation:36.7,x:-177.5,y:8.3},0).wait(1).to({rotation:37.5,x:-177.6,y:6},0).wait(1).to({rotation:38.2,y:3.6},0).wait(1).to({rotation:39,x:-177.7,y:1.3},0).wait(1).to({rotation:39.7,x:-177.6,y:-0.8},0).wait(1).to({rotation:40.5,y:-3.1},0).wait(1).to({rotation:41.2,x:-177.5,y:-5.4},0).wait(1).to({rotation:42,x:-177.4,y:-7.7},0).wait(1).to({rotation:42.7,x:-177.3,y:-10.1},0).wait(1).to({rotation:43.5,x:-177.1,y:-12.4},0).wait(1).to({rotation:44.2,x:-176.9,y:-14.7},0).wait(1).to({rotation:45,x:-176.7,y:-17},0).wait(1).to({rotation:45.7,x:-176.4,y:-19.3},0).wait(1).to({rotation:46.5,x:-176.2,y:-21.6},0).wait(1).to({rotation:47.2,x:-175.8,y:-23.9},0).wait(1).to({rotation:48,x:-175.5,y:-26.2},0).wait(1).to({rotation:48.7,x:-175.1,y:-28.5},0).wait(1).to({rotation:49.4,x:-174.7,y:-30.8},0).wait(1).to({rotation:50.2,x:-174.3,y:-33.1},0).wait(1).to({rotation:50.9,x:-173.8,y:-35.4},0).wait(1).to({rotation:51.7,x:-173.3,y:-37.7},0).wait(1).to({rotation:52.4,x:-172.8,y:-39.9},0).wait(1).to({rotation:50,x:-174.4,y:-32.6},0).wait(1).to({rotation:47.6,x:-175.6,y:-25.2},0).wait(1).to({rotation:45.2,x:-176.6,y:-17.7},0).wait(1).to({rotation:42.8,x:-177.3,y:-10.2},0).wait(1).to({rotation:40.3,x:-177.6,y:-2.7},0).wait(1).to({rotation:37.9,y:4.6},0).wait(1).to({rotation:35.5,x:-177.3,y:12.1},0).wait(1).to({rotation:33.1,x:-176.7,y:19.6},0).wait(1).to({rotation:30.7,x:-175.7,y:27},0).wait(1).to({rotation:28.2,x:-174.6,y:34.4},0).wait(1).to({rotation:25.8,x:-173,y:41.8},0).wait(1).to({rotation:23.4,x:-171.1,y:49.1},0).wait(1).to({rotation:21,x:-168.9,y:56.3},0).wait(1).to({rotation:18.6,x:-166.4,y:63.4},0).wait(1).to({rotation:16.1,x:-163.7,y:70.3},0).wait(1).to({rotation:13.7,x:-160.6,y:77.2},0).wait(1).to({rotation:11.3,x:-157.2,y:83.9},0).wait(1).to({rotation:8.9,x:-153.6,y:90.5},0).wait(1).to({rotation:6.5,x:-149.7,y:96.9},0).wait(1).to({rotation:4,x:-145.5,y:103.2},0).wait(1).to({rotation:1.6,x:-141.1,y:109.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-604.8,-33.1,634.7,295.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;