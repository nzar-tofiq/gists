(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.backspin2 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(-82.3,-90.7,648.8,462.4);


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
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABtiXQBRAQBBAmQBpBAAABYQAABahpBAQhqBAiVAAQiUAAhqhAQhphAAAhaQAAhYBphAQBqg/CUAAQAHAAAIAAQAxABAtAIgAiHkQIF9BG");
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
	this.arrow.setTransform(-248.3,144.1);
	this.arrow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(31).to({_off:false},0).wait(1).to({y:137.3},0).wait(1).to({y:130.5},0).wait(1).to({y:123.7},0).wait(1).to({y:116.9},0).wait(1).to({y:110.1},0).wait(1).to({y:103.3},0).wait(1).to({y:96.5},0).wait(1).to({y:89.6},0).wait(1).to({y:82.8},0).wait(1).to({y:76},0).wait(1).to({y:69.2},0).wait(1).to({y:62.4},0).wait(1).to({y:55.6},0).wait(1).to({y:48.8},0).wait(1).to({y:42},0).wait(1).to({y:35.2},0).wait(1).to({y:28.4},0).wait(1).to({y:21.6},0).wait(1).to({y:14.8},0).wait(1).to({y:8},0).wait(1).to({y:1.2},0).wait(1).to({y:-5.4},0).wait(1).to({y:-12.2},0).wait(1).to({y:-19.1},0).wait(1).to({y:-25.9},0).wait(1).to({y:-32.7},0).wait(1).to({y:-39.5},0).wait(1).to({y:-46.3},0).wait(1).to({y:-53.1},0).wait(1).to({y:-59.9},0).wait(1).to({y:-66.7},0).to({_off:true},1).wait(46));

	// ball
	this.ball = new lib.ball();
	this.ball.setTransform(-573.5,181.4,1,1,0,0,0,31.3,31.3);

	this.timeline.addTween(cjs.Tween.get(this.ball).to({x:-245.4,y:31.3},31).wait(32).to({scaleX:2.31,scaleY:2.31,x:-234.3,y:320.3},24).to({_off:true},1).wait(21));

	// bat
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(0.1,1.2,0.998,0.998,48.9,0,0,303.7,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:165.7,regY:146.1,scaleX:1,scaleY:1,rotation:48.5,x:-175.1,y:-27.6},0).wait(1).to({rotation:48,x:-175.3,y:-26.2},0).wait(1).to({rotation:47.5,x:-175.5,y:-24.7},0).wait(1).to({rotation:47,x:-175.8,y:-23.2},0).wait(1).to({rotation:46.5,x:-175.9,y:-21.8},0).wait(1).to({rotation:46.1,x:-176.1,y:-20.3},0).wait(1).to({rotation:45.6,x:-176.3,y:-18.8},0).wait(1).to({rotation:45.1,x:-176.4,y:-17.3},0).wait(1).to({rotation:44.6,x:-176.6,y:-15.8},0).wait(1).to({rotation:44.1,x:-176.7,y:-14.3},0).wait(1).to({rotation:43.6,x:-176.9,y:-12.9},0).wait(1).to({rotation:43.2,x:-177,y:-11.3},0).wait(1).to({rotation:42.7,x:-177.1,y:-9.8},0).wait(1).to({rotation:42.2,x:-177.2,y:-8.3},0).wait(1).to({rotation:41.7,y:-6.9},0).wait(1).to({rotation:41.2,x:-177.3,y:-5.4},0).wait(1).to({rotation:40.8,x:-177.4,y:-3.9},0).wait(1).to({rotation:40.3,y:-2.4},0).wait(1).to({rotation:39.8,y:-0.9},0).wait(1).to({rotation:39.3,y:0.4},0).wait(1).to({rotation:38.8,y:1.9},0).wait(1).to({rotation:38.3,y:3.4},0).wait(1).to({rotation:37.9,y:4.9},0).wait(1).to({rotation:37.4,y:6.4},0).wait(1).to({rotation:36.9,x:-177.3,y:7.9},0).wait(1).to({rotation:36.4,x:-177.2,y:9.4},0).wait(1).to({rotation:35.9,y:10.9},0).wait(1).to({rotation:35.4,x:-177.1,y:12.4},0).wait(1).to({rotation:35,x:-177,y:13.9},0).wait(1).to({rotation:34.5,x:-176.8,y:15.4},0).wait(33).wait(1).to({rotation:33,x:-176.4,y:20},0).wait(1).to({rotation:31.5,x:-175.9,y:24.6},0).wait(1).to({rotation:30,x:-175.2,y:29.1},0).wait(1).to({rotation:28.5,x:-174.4,y:33.7},0).wait(1).to({rotation:27,x:-173.5,y:38.2},0).wait(1).to({rotation:25.5,x:-172.5,y:42.8},0).wait(1).to({rotation:24,x:-171.4,y:47.2},0).wait(1).to({rotation:22.6,x:-170.1,y:51.6},0).wait(1).to({rotation:21.1,x:-168.7,y:56.1},0).wait(1).to({rotation:19.6,x:-167.2,y:60.5},0).wait(1).to({rotation:18.1,x:-165.7,y:64.8},0).wait(1).to({rotation:16.6,x:-163.9,y:69.1},0).wait(1).to({rotation:15.1,x:-162.1,y:73.4},0).wait(1).to({rotation:13.6,x:-160.2,y:77.6},0).wait(1).to({rotation:12.1,x:-158.1,y:81.7},0).wait(1).to({rotation:10.6,x:-156,y:85.8},0).wait(1).to({rotation:9.1,x:-153.7,y:89.9},0).wait(1).to({rotation:7.6,x:-151.3,y:93.9},0).wait(1).to({rotation:6.1,x:-148.9,y:97.7},0).wait(1).to({rotation:4.7,x:-146.3,y:101.6},0).wait(1).to({rotation:3.2,x:-143.7,y:105.4},0).wait(1).to({rotation:1.7,x:-140.9,y:109.1},0).wait(1).to({rotation:0.2,x:-138,y:112.8},0).wait(1).to({rotation:-1.1,x:-135.1,y:116.3},0).wait(1).to({rotation:1.1,x:-139.8,y:110.6},0).wait(1).to({rotation:3.4,x:-144.1,y:104.8},0).wait(1).to({rotation:5.8,x:-148.3,y:98.7},0).wait(1).to({rotation:8.1,x:-152.1,y:92.6},0).wait(1).to({rotation:10.5,x:-155.8,y:86.2},0).wait(1).to({rotation:12.9,x:-159.2,y:79.7},0).wait(1).to({rotation:15.2,x:-162.3,y:73.1},0).wait(1).to({rotation:17.6,x:-165.1,y:66.3},0).wait(1).to({rotation:19.9,x:-167.6,y:59.4},0).wait(1).to({rotation:22.3,x:-169.9,y:52.5},0).wait(1).to({rotation:24.7,x:-171.8,y:45.4},0).wait(1).to({rotation:27,x:-173.5,y:38.2},0).wait(1).to({rotation:29.4,x:-174.9,y:31.1},0).wait(1).to({rotation:31.7,x:-176,y:23.8},0).wait(1).to({rotation:34.1,x:-176.8,y:16.6},0).wait(1).to({rotation:36.5,x:-177.2,y:9.2},0).wait(1).to({rotation:38.8,x:-177.4,y:1.9},0).wait(1).to({rotation:41.2,x:-177.3,y:-5.2},0).wait(1).to({rotation:43.5,x:-176.9,y:-12.5},0).wait(1).to({rotation:45.9,x:-176.2,y:-19.8},0).wait(1).to({rotation:48.3,x:-175.1,y:-27},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-604.8,-249.7,648.8,462.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;