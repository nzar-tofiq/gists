(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// stage content:
(lib.Santa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{santaLayer:0},true);

	// flakes
	this.snowLayer = new lib.snowStorm_mc();
	this.snowLayer.setTransform(391.2,273.4,1.286,1.098,0,0,0,348.6,262.6);

	this.timeline.addTween(cjs.Tween.get(this.snowLayer).wait(300));

	// stars
	this.instance = new lib.Star();
	this.instance.setTransform(344.8,490.6);

	this.instance_1 = new lib.Star();
	this.instance_1.setTransform(75,466.6,1,1,0,0,0,0.2,0.1);

	this.instance_2 = new lib.Star();
	this.instance_2.setTransform(198.5,490.7,1,1,0,0,0,0.2,0.1);

	this.instance_3 = new lib.Star();
	this.instance_3.setTransform(204.6,550,1,1,0,0,0,0.2,0.1);

	this.instance_4 = new lib.Star();
	this.instance_4.setTransform(161.1,548,1,1,0,0,0,0.2,0.1);

	this.instance_5 = new lib.Star();
	this.instance_5.setTransform(125.2,432.7,1,1,0,0,0,0.2,0.1);

	this.instance_6 = new lib.Star();
	this.instance_6.setTransform(239.6,433,1,1,0,0,0,0.2,0.1);

	this.instance_7 = new lib.Star();
	this.instance_7.setTransform(137.2,362.1,1,1,0,0,0,0.2,0.1);

	this.instance_8 = new lib.Star();
	this.instance_8.setTransform(232.1,362.1,1,1,0,0,0,0.2,0.1);

	this.instance_9 = new lib.Star();
	this.instance_9.setTransform(132.5,286.1,1,1,0,0,0,0.2,0.1);

	this.instance_10 = new lib.Star();
	this.instance_10.setTransform(227.1,286.1,1,1,0,0,0,0.2,0.1);

	this.instance_11 = new lib.Star();
	this.instance_11.setTransform(142.8,206.6,1,1,0,0,0,0.2,0.1);

	this.instance_12 = new lib.Star();
	this.instance_12.setTransform(202.3,206.1,1,1,0,0,0,0.2,0.1);

	this.instance_13 = new lib.Star();
	this.instance_13.setTransform(167.6,489.7,1,1,0,0,0,0.2,0.1);

	this.instance_14 = new lib.Star();
	this.instance_14.setTransform(177.7,401.4,1,1,0,0,0,0.2,0.1);

	this.instance_15 = new lib.Star();
	this.instance_15.setTransform(182.2,329.1,1,1,0,0,0,0.2,0.1);

	this.instance_16 = new lib.Star();
	this.instance_16.setTransform(177.5,241.5);

	this.instance_17 = new lib.Star();
	this.instance_17.setTransform(177.7,145.8,1,1,0,0,0,0.2,0.1);

	this.instance_18 = new lib.Star();
	this.instance_18.setTransform(178.7,72.7,2.085,1.88,0,0,0,0.2,0.1);

	this.instance_19 = new lib.Star();
	this.instance_19.setTransform(30.7,498.2,1,1,0,0,0,0.2,0.1);

	this.instance_20 = new lib.Star();
	this.instance_20.setTransform(52.2,408.8,1,1,0,0,0,0.2,0.1);

	this.instance_21 = new lib.Star();
	this.instance_21.setTransform(72.2,328.4,1,1,0,0,0,0.2,0.1);

	this.instance_22 = new lib.Star();
	this.instance_22.setTransform(97.2,240.6,1,1,0,0,0,0.2,0.1);

	this.instance_23 = new lib.Star();
	this.instance_23.setTransform(124.5,158.8,1,1,0,0,0,0.2,0.1);

	this.instance_24 = new lib.Star();
	this.instance_24.setTransform(228.8,158.3,1,1,0,0,0,0.2,0.1);

	this.instance_25 = new lib.Star();
	this.instance_25.setTransform(293.5,459.1,1,1,0,0,0,0.2,0.1);

	this.instance_26 = new lib.Star();
	this.instance_26.setTransform(310.1,398.3,1,1,0,0,0,0.2,0.1);

	this.instance_27 = new lib.Star();
	this.instance_27.setTransform(253.1,232.7,1,1,0,0,0,0.2,0.1);

	this.instance_28 = new lib.Star();
	this.instance_28.setTransform(288.9,326.1,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},134).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},165).wait(1));

	// tree
	this.instance_29 = new lib.tree();
	this.instance_29.setTransform(20.8,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_29}]},134).to({state:[{t:this.instance_29}]},165).wait(1));

	// santa
	this.santaLayer = new lib.santa_mc();
	this.santaLayer.setTransform(1598.7,332.4,1,1,9.7,0,0,101.8,-117.9);

	this.timeline.addTween(cjs.Tween.get(this.santaLayer).to({regY:-117.9,rotation:6.1,x:-395.6,y:17.7},133).to({regX:-399.8,regY:-299.7,rotation:6.2,x:924.6,y:224.2},1).to({x:-1180.4,y:-180.5},165).wait(1));

	// backGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(50,37,210,0.769)").s().p("EA+8ANbUgYfgXogjzAENUgc5AKLgksgEWIAAnMQNtHiR0kvQcinoFIgqUAh+gENAaaAbmIAAAKIAJAAQAGAGAFAFIAACj").cp();
	this.shape.setTransform(398.9,403.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(50,0,238,0.769)").s().p("EAhmgEoQqLCZuDDUQuBDVnEA5QnEA4nMiMQlKhklfiwIAAieQBNAaBbAhQO1FUHYhVQHYhWYEj4QYGj6qLCZIAAAA").cp();
	this.shape_1.setTransform(230.4,290.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(50,16,175,0.769)").s().p("AolBTQn8jThEiFQhEiEQ4FoQNAEUGbhHIAABOQkPAvlEAAQpAAAn8jWIAAAA").cp();
	this.shape_2.setTransform(686.6,186.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(50,37,201,0.769)").s().p("EgkWgfYINPAAQE8A+FuBJUAtTAJiAd8AALIAAB6UgmVgBZg0DgKGQkzhOj9hBIAAAAEAiAALUUgVkgOwg2zACNQzzB5gnFSIAAnRQFyhkIMh6UBERgDLArUAfeIAAH5QpCmizwtjIAAAA").cp();
	this.shape_3.setTransform(397.9,194.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(50,49,112,0.769)").s().p("EA+yAFNIAAHHQsHAqrLjGUgZ5gHKgwygHfQxUiRqShoIAAjwQE2AJGZAUUA83AQaA1dAAwIAAAA").cp();
	this.shape_4.setTransform(397.9,82.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(50,93,170,0.769)").s().p("EA+yAPNIAAEeUhM9gqHgwmAHFIAAj8QK1hFTXCLUAeDADZBBUAeBIAAAA").cp();
	this.shape_5.setTransform(397.9,188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EA+8gESIAASMMh93AAAIAA5bUAOXgFnAmSAHpUAy4AKHAWWgE6IAAAA").cp();
	this.shape_6.setTransform(398.9,516.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(50,37,210,0.769)").s().p("A/akkQcinoFIgqUAh+gENAaaAbmIAAAKIAJAAQAGAGAFAFIAACjUgYfgXogjzAENUgc5AKLgksgEWIAAnMQNtHiR0kvIAAAA").cp();
	this.shape_7.setTransform(398.9,403.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_4},{t:this.shape_5},{t:this.shape_6}]},134).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_7},{t:this.shape_4},{t:this.shape_5},{t:this.shape_6}]},165).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3.9,-5.9,1755.3,611.8);
p.frameBounds = [rect, new cjs.Rectangle(-3.9,-5.9,1737.3,611.8), new cjs.Rectangle(-3.9,-5.9,1722.3,611.8), new cjs.Rectangle(-3.9,-5.9,1707.3,611.8), new cjs.Rectangle(-3.9,-5.9,1692.3,611.8), new cjs.Rectangle(-3.9,-5.9,1677.3,611.8), new cjs.Rectangle(-3.9,-5.9,1662.3,611.8), new cjs.Rectangle(-3.9,-5.9,1647.4,611.8), new cjs.Rectangle(-3.9,-5.9,1632.6,611.8), new cjs.Rectangle(-3.9,-5.9,1617.7,611.8), new cjs.Rectangle(-3.9,-5.9,1602.7,611.8), new cjs.Rectangle(-3.9,-5.9,1587.6,611.8), new cjs.Rectangle(-3.9,-5.9,1572.6,611.8), new cjs.Rectangle(-3.9,-5.9,1557.7,611.8), new cjs.Rectangle(-3.9,-5.9,1542.7,611.8), new cjs.Rectangle(-3.9,-5.9,1527.7,611.8), new cjs.Rectangle(-3.9,-5.9,1512.7,611.8), new cjs.Rectangle(-3.9,-5.9,1497.9,611.8), new cjs.Rectangle(-3.9,-5.9,1482.9,611.8), new cjs.Rectangle(-3.9,-5.9,1468,611.8), new cjs.Rectangle(-3.9,-5.9,1453,611.8), new cjs.Rectangle(-3.9,-5.9,1437.9,611.8), new cjs.Rectangle(-3.9,-5.9,1422.9,611.8), new cjs.Rectangle(-3.9,-5.9,1408,611.8), new cjs.Rectangle(-3.9,-5.9,1393,611.8), new cjs.Rectangle(-3.9,-5.9,1378,611.8), new cjs.Rectangle(-3.9,-5.9,1363.2,611.8), new cjs.Rectangle(-3.9,-5.9,1348.3,611.8), new cjs.Rectangle(-3.9,-5.9,1333.2,611.8), new cjs.Rectangle(-3.9,-5.9,1318.3,611.8), new cjs.Rectangle(-3.9,-5.9,1303.3,611.8), new cjs.Rectangle(-3.9,-5.9,1288.3,611.8), new cjs.Rectangle(-3.9,-5.9,1273.3,611.8), new cjs.Rectangle(-3.9,-5.9,1258.2,611.8), new cjs.Rectangle(-3.9,-5.9,1243.3,611.8), new cjs.Rectangle(-3.9,-5.9,1228.5,611.8), new cjs.Rectangle(-3.9,-5.9,1213.5,611.8), new cjs.Rectangle(-3.9,-5.9,1198.6,611.8), new cjs.Rectangle(-3.9,-5.9,1183.6,611.8), new cjs.Rectangle(-3.9,-5.9,1168.6,611.8), new cjs.Rectangle(-3.9,-5.9,1153.6,611.8), new cjs.Rectangle(-3.9,-5.9,1138.7,611.8), new cjs.Rectangle(-3.9,-5.9,1123.6,611.8), new cjs.Rectangle(-3.9,-5.9,1108.6,611.8), new cjs.Rectangle(-3.9,-5.9,1093.6,611.8), new cjs.Rectangle(-3.9,-5.9,1078.8,611.8), new cjs.Rectangle(-3.9,-5.9,1063.8,611.8), new cjs.Rectangle(-3.9,-5.9,1048.9,611.8), new cjs.Rectangle(-3.9,-5.9,1033.9,611.8), new cjs.Rectangle(-3.9,-5.9,1019,611.8), new cjs.Rectangle(-3.9,-5.9,1003.8,611.8), new cjs.Rectangle(-3.9,-5.9,988.9,611.8), new cjs.Rectangle(-3.9,-5.9,974,611.8), new cjs.Rectangle(-3.9,-5.9,958.9,611.8), new cjs.Rectangle(-3.9,-5.9,944.2,611.8), new cjs.Rectangle(-3.9,-5.9,929.2,611.8), new cjs.Rectangle(-3.9,-5.9,914.2,611.8), new cjs.Rectangle(-3.9,-5.9,899.2,611.8), new cjs.Rectangle(-3.9,-5.9,884.3,611.8), new cjs.Rectangle(-3.9,-5.9,869.3,611.8), new cjs.Rectangle(-3.9,-5.9,854.3,611.8), new cjs.Rectangle(-3.9,-5.9,839.3,611.8), new cjs.Rectangle(-3.9,-5.9,824.3,611.8), new cjs.Rectangle(-3.9,-5.9,809.5,611.8), rect=new cjs.Rectangle(-3.9,-5.9,805.7,611.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-13.3,-5.9,815.1,611.8), new cjs.Rectangle(-28.3,-5.9,830.1,611.8), new cjs.Rectangle(-43.3,-5.9,845.1,611.8), new cjs.Rectangle(-58.5,-5.9,860.3,611.8), new cjs.Rectangle(-73.5,-5.9,875.3,611.8), new cjs.Rectangle(-88.4,-5.9,890.2,611.8), new cjs.Rectangle(-103.4,-5.9,905.2,611.8), new cjs.Rectangle(-118.4,-5.9,920.2,611.8), new cjs.Rectangle(-133.4,-5.9,935.3,611.8), new cjs.Rectangle(-148.4,-5.9,950.3,611.8), new cjs.Rectangle(-163.4,-5.9,965.2,611.8), new cjs.Rectangle(-178.4,-5.9,980.2,611.8), new cjs.Rectangle(-193.4,-5.9,995.2,611.8), new cjs.Rectangle(-208.6,-5.9,1010.4,611.8), new cjs.Rectangle(-223.6,-5.9,1025.4,611.8), new cjs.Rectangle(-238.6,-5.9,1040.4,611.8), new cjs.Rectangle(-253.7,-5.9,1055.5,611.8), new cjs.Rectangle(-268.6,-8.3,1070.4,614.2), new cjs.Rectangle(-283.6,-10.6,1085.4,616.5), new cjs.Rectangle(-298.7,-13,1100.5,618.9), new cjs.Rectangle(-313.7,-15.3,1115.5,621.3), new cjs.Rectangle(-328.7,-17.7,1130.5,623.6), new cjs.Rectangle(-343.7,-20.5,1145.5,626.5), new cjs.Rectangle(-358.7,-23,1160.5,628.9), new cjs.Rectangle(-373.7,-25.3,1175.5,631.3), new cjs.Rectangle(-388.7,-27.7,1190.5,633.6), new cjs.Rectangle(-403.8,-30,1205.6,636), new cjs.Rectangle(-418.8,-32.5,1220.6,638.4), new cjs.Rectangle(-435.3,-27.4,1237.1,633.3), new cjs.Rectangle(-3.9,-5.9,1559,611.8), new cjs.Rectangle(-3.9,-5.9,1544.9,611.8), new cjs.Rectangle(-3.9,-5.9,1532.2,611.8), new cjs.Rectangle(-3.9,-5.9,1519.4,611.8), new cjs.Rectangle(-3.9,-5.9,1506.6,611.8), new cjs.Rectangle(-3.9,-5.9,1493.9,611.8), new cjs.Rectangle(-3.9,-5.9,1481.1,611.8), new cjs.Rectangle(-3.9,-5.9,1468.4,611.8), new cjs.Rectangle(-3.9,-5.9,1455.6,611.8), new cjs.Rectangle(-3.9,-5.9,1442.8,611.8), new cjs.Rectangle(-3.9,-5.9,1430.1,611.8), new cjs.Rectangle(-3.9,-5.9,1417.3,611.8), new cjs.Rectangle(-3.9,-5.9,1404.6,611.8), new cjs.Rectangle(-3.9,-5.9,1391.8,611.8), new cjs.Rectangle(-3.9,-5.9,1379,611.8), new cjs.Rectangle(-3.9,-5.9,1366.3,611.8), new cjs.Rectangle(-3.9,-5.9,1353.5,611.8), new cjs.Rectangle(-3.9,-5.9,1340.8,611.8), new cjs.Rectangle(-3.9,-5.9,1328,611.8), new cjs.Rectangle(-3.9,-5.9,1315.2,611.8), new cjs.Rectangle(-3.9,-5.9,1302.5,611.8), new cjs.Rectangle(-3.9,-5.9,1289.7,611.8), new cjs.Rectangle(-3.9,-5.9,1277,611.8), new cjs.Rectangle(-3.9,-5.9,1264.2,611.8), new cjs.Rectangle(-3.9,-5.9,1251.4,611.8), new cjs.Rectangle(-3.9,-5.9,1238.7,611.8), new cjs.Rectangle(-3.9,-5.9,1225.9,611.8), new cjs.Rectangle(-3.9,-5.9,1213.2,611.8), new cjs.Rectangle(-3.9,-5.9,1200.4,611.8), new cjs.Rectangle(-3.9,-5.9,1187.7,611.8), new cjs.Rectangle(-3.9,-5.9,1174.9,611.8), new cjs.Rectangle(-3.9,-5.9,1162.1,611.8), new cjs.Rectangle(-3.9,-5.9,1149.4,611.8), new cjs.Rectangle(-3.9,-5.9,1136.6,611.8), new cjs.Rectangle(-3.9,-5.9,1123.9,611.8), new cjs.Rectangle(-3.9,-5.9,1111.1,611.8), new cjs.Rectangle(-3.9,-5.9,1098.3,611.8), new cjs.Rectangle(-3.9,-5.9,1085.6,611.8), new cjs.Rectangle(-3.9,-5.9,1072.8,611.8), new cjs.Rectangle(-3.9,-5.9,1060.1,611.8), new cjs.Rectangle(-3.9,-5.9,1047.3,611.8), new cjs.Rectangle(-3.9,-5.9,1034.5,611.8), new cjs.Rectangle(-3.9,-5.9,1021.8,611.8), new cjs.Rectangle(-3.9,-5.9,1009,611.8), new cjs.Rectangle(-3.9,-5.9,996.3,611.8), new cjs.Rectangle(-3.9,-5.9,983.5,611.8), new cjs.Rectangle(-3.9,-5.9,970.7,611.8), new cjs.Rectangle(-3.9,-5.9,958,611.8), new cjs.Rectangle(-3.9,-5.9,945.2,611.8), new cjs.Rectangle(-3.9,-5.9,932.5,611.8), new cjs.Rectangle(-3.9,-5.9,919.7,611.8), new cjs.Rectangle(-3.9,-5.9,906.9,611.8), new cjs.Rectangle(-3.9,-5.9,894.2,611.8), new cjs.Rectangle(-3.9,-5.9,881.4,611.8), new cjs.Rectangle(-3.9,-5.9,868.7,611.8), new cjs.Rectangle(-3.9,-5.9,855.9,611.8), new cjs.Rectangle(-3.9,-5.9,843.2,611.8), new cjs.Rectangle(-3.9,-5.9,830.4,611.8), new cjs.Rectangle(-3.9,-5.9,817.6,611.8), rect=new cjs.Rectangle(-3.9,-5.9,805.7,611.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-8.4,-5.9,810.2,611.8), new cjs.Rectangle(-21.2,-5.9,823,611.8), new cjs.Rectangle(-34,-5.9,835.8,611.8), new cjs.Rectangle(-46.7,-5.9,848.5,611.8), new cjs.Rectangle(-59.5,-5.9,861.3,611.8), new cjs.Rectangle(-72.2,-5.9,874,611.8), new cjs.Rectangle(-85,-5.9,886.8,611.8), new cjs.Rectangle(-97.8,-5.9,899.6,611.8), new cjs.Rectangle(-110.5,-5.9,912.3,611.8), new cjs.Rectangle(-123.3,-5.9,925.1,611.8), new cjs.Rectangle(-136,-5.9,937.8,611.8), new cjs.Rectangle(-148.8,-5.9,950.6,611.8), new cjs.Rectangle(-161.5,-5.9,963.4,611.8), new cjs.Rectangle(-174.3,-5.9,976.1,611.8), new cjs.Rectangle(-187,-5.9,988.9,611.8), new cjs.Rectangle(-199.8,-5.9,1001.6,611.8), new cjs.Rectangle(-212.6,-5.9,1014.4,611.8), new cjs.Rectangle(-225.3,-5.9,1027.1,611.8), new cjs.Rectangle(-238.1,-5.9,1039.9,611.8), new cjs.Rectangle(-250.9,-5.9,1052.7,611.8), new cjs.Rectangle(-263.6,-5.9,1065.4,611.8), new cjs.Rectangle(-276.4,-5.9,1078.2,611.8), new cjs.Rectangle(-289.1,-5.9,1090.9,611.8), new cjs.Rectangle(-301.9,-5.9,1103.7,611.8), new cjs.Rectangle(-314.7,-5.9,1116.5,611.8), new cjs.Rectangle(-327.4,-5.9,1129.2,611.8), new cjs.Rectangle(-340.2,-5.9,1142,611.8), new cjs.Rectangle(-352.9,-5.9,1154.7,611.8), new cjs.Rectangle(-365.7,-5.9,1167.5,611.8), new cjs.Rectangle(-378.4,-5.9,1180.3,611.8), new cjs.Rectangle(-391.2,-5.9,1193,611.8), new cjs.Rectangle(-403.9,-5.9,1205.8,611.8), new cjs.Rectangle(-416.7,-5.9,1218.5,611.8), new cjs.Rectangle(-429.5,-5.9,1231.3,611.8), new cjs.Rectangle(-442.3,-5.9,1244.1,611.8), new cjs.Rectangle(-455,-5.9,1256.8,611.8), new cjs.Rectangle(-467.8,-5.9,1269.6,611.8), new cjs.Rectangle(-480.5,-5.9,1282.3,611.8), new cjs.Rectangle(-493.3,-5.9,1295.1,611.8), new cjs.Rectangle(-506.1,-5.9,1307.9,611.8), new cjs.Rectangle(-518.8,-5.9,1320.6,611.8), new cjs.Rectangle(-531.6,-5.9,1333.4,611.8), new cjs.Rectangle(-544.3,-5.9,1346.1,611.8), new cjs.Rectangle(-557.1,-5.9,1358.9,611.8), new cjs.Rectangle(-569.9,-5.9,1371.7,611.8), new cjs.Rectangle(-582.6,-5.9,1384.4,611.8), new cjs.Rectangle(-595.4,-5.9,1397.2,611.8), new cjs.Rectangle(-608.1,-5.9,1409.9,611.8), new cjs.Rectangle(-620.9,-5.9,1422.7,611.8), new cjs.Rectangle(-633.6,-5.9,1435.4,611.8), new cjs.Rectangle(-646.4,-5.9,1448.2,611.8), new cjs.Rectangle(-659.2,-5.9,1461,611.8), new cjs.Rectangle(-671.9,-5.9,1473.7,611.8), new cjs.Rectangle(-684.7,-5.9,1486.5,611.8), new cjs.Rectangle(-697.4,-5.9,1499.2,611.8), new cjs.Rectangle(-710.2,-5.9,1512,611.8), new cjs.Rectangle(-723,-5.9,1524.8,611.8), new cjs.Rectangle(-741.2,-5.9,1543.1,611.8)];


// symbols:
(lib.flake1 = function() {
	this.initialize(img.flake1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.flake2 = function() {
	this.initialize(img.flake2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,135);


(lib.flake3 = function() {
	this.initialize(img.flake3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.flake4 = function() {
	this.initialize(img.flake4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.flake5 = function() {
	this.initialize(img.flake5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.flake6 = function() {
	this.initialize(img.flake6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.flake7 = function() {
	this.initialize(img.flake7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.tree = function() {
	this.initialize(img.tree);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,487);


(lib.Star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,15.6).s().p("AAKgKICDhDIh/BNICHAwIiKgnIA6CJIhFiDIgyCPIAqiSIiFBCICAhMIiHgxICLAnIg6iIIBDCCIAziPIgpCT").cp();
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,20.3).s().p("AjEgrIC3AhIhcimIBnCeIAvi7IgiC+ICghiIiZBvICzAuIi2giIBcCnIhpieIguC7IAji+IiiBiICZhvIiygu").cp();
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,25).s().p("Aj1goIDjAdIh+jFICMC6IAsjnIgcDqIC+iDIi0CSIDgAtIjjgdIB+DFIiNi6IgrDnIAcjqIi/CDIC0iSIjfgt").cp();
	this.shape_2.setTransform(0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,29.8).s().p("AkmgkIEQAXIigjiICwDVIAokUIgVEXIDcijIjPC0IENArIkQgYIChDkIiyjWIgnEUIAVkXIjdCjIDPi0IkMgr").cp();
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,34.6).s().p("AlXghIE8ATIjCkBIDUDxIAmlAIgPFCID5jDIjpDXIE6AqIk8gTIDCECIjWjyIgkFAIAOlCIj6DDIDqjXIk5gq").cp();
	this.shape_4.setTransform(0.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,39.5).s().p("AmIgeIFpAOIjkkfID4ENIAjlsIgIFuIEWjkIkED6IFnAoIlpgOIDkEhIj6kOIggFsIAHluIkXDkIEDj6Illgp").cp();
	this.shape_5.setTransform(0.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,44.4).s().p("AARgkIE0kEIkfEcIGUAnImWgJIEHE/IkfkqIgdGZIAAmbIk0EEIEekcImSgnIGVAJIkGk+IEdEpIAfmZIgBGb").cp();
	this.shape_6.setTransform(0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,40.3).s().p("AmRgRIFwACIjykeIEHEKIAWl0IAFF2IEUjyIkBEIIFwAdIlxgCIDzEfIkJkLIgUF0IgGl2IkUDyIEAkIIlugd").cp();
	this.shape_7.setTransform(0.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,36.2).s().p("AlogIIFLgFIjej+IDvDsIAPlRIAKFSIDzjfIjiDzIFLATIlLAEIDeEAIjxjtIgMFRIgLlSIj1DfIDijyIlJgU").cp();
	this.shape_8.setTransform(0.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,32.1).s().p("Ak/AAIElgLIjKjeIDZDOIAIkuIAOEuIDTjNIjDDeIElAKIklALIDKDgIjbjPIgGEuIgOkuIjUDNIDDjeIkkgL").cp();
	this.shape_9.setTransform(0.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,28).s().p("AkXAHIEAgPIi2i+IDDCvIgBkKIATEJIC0i6IilDJIEBACIkAAQIC2C/IjFiwIADEKIgUkJIi0C6ICljJIkAgD").cp();
	this.shape_10.setTransform(0.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,24).s().p("AjuAQIDagWIiiieICtCQIgKjmIAZDlICUinIiHCzIDcgHIjaAXICiCfIiuiRIALDmIgajlIiUCnICHizIjbAG").cp();
	this.shape_11.setTransform(0.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,20).s().p("AjFAZIC1gdIiOh+ICWByIgSjDIAeDBIB0iVIhpCfIC3gQIi1AdICPB/IiYhzIAUDDIgfjBIh1CVIBpifIi2AQ").cp();
	this.shape_12.setTransform(0.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFFFFF","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,16.2).s().p("ABWiRIhKCKICSgaIiQAkIB7BfIiBhVIAbCfIgkicIhUCCIBKiJIiSAZICQgkIh6heICABUIgbifIAkCcIBUiC").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.8,-15.7,29.8,31.6);
p.frameBounds = [rect, new cjs.Rectangle(-19.6,-20.5,39.6,41.3), new cjs.Rectangle(-24.5,-25.3,49.4,51), new cjs.Rectangle(-29.4,-30.1,59.2,60.7), new cjs.Rectangle(-34.2,-34.9,69,70.3), new cjs.Rectangle(-39.1,-39.8,78.8,80), new cjs.Rectangle(-44,-44.6,88.6,89.7), new cjs.Rectangle(-39.9,-40.7,80.4,81.8), new cjs.Rectangle(-35.9,-36.7,72.3,73.9), new cjs.Rectangle(-31.9,-32.8,64.2,66.1), new cjs.Rectangle(-27.8,-28.9,56.1,58.2), new cjs.Rectangle(-23.8,-25,47.9,50.3), new cjs.Rectangle(-19.8,-21.1,39.8,42.4), new cjs.Rectangle(-15.7,-17.2,31.7,34.6)];


(lib.snowStorm_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EAwnAqrIlSAAIAAiQIFSAAIAACQEgv+gqqIAAAGIgoAAIAAgGIAoAA").cp();
	this.shape_14.setTransform(355.6,287.3);

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(44.5,14.2,622.2,546.4);
p.frameBounds = [rect];


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AD3jCQgHABgHgCQgEADgFACQgeASgeARQACAEgBACQgFAIgIAFQACAEgBABQgWASgaAPQACAFgBACQgFAHgJAFQgEADgEACQgNAIgNAHQACAEgBABQgtAmgnANQgKADgJAAQgFACgEACQgJAFgIAFQgFADgDADQgQAPgHgPQgFADgEACQgVAMgWANIgIAAIAAAFQAAAAgBAAQABABAAABIAABEIAXAAIAAAcQgBAAgBgBQAAADgBADQAVAMATARQABAAgDAFQAEACAFADQAEACABAEQABADgDAEQAFADAEACQAJAFAFAIQABACgDAEQAFACAEADQAEACABAEQABADgCAFQAEACABAEQABADgDAEQAFADAAADQACAEgDAEQANAHANAIQAEACAFADQACgEADgFQAEADAEACQACgEABgEQAJAFAFAHQABACgCAEQAEADAEACQAFADAAADQABAEgCAEQAEACAFADQAEACABAEQABADgDAFQAFACAAAEQABADgCAEQAEADABADQABAEgCAEQAOAHgPAQQgDAEgDAEQgCAEgDAFQAPAHgSALQgCABgFgCQgCAEgCAAQgSgGgQgJQgEgDgEgCQhYgqg2g0QgFgDgBgDQgBgDADgFQgEgCgFgDQgEgCgFgCQgVgGAJgOQADgEACgEQgEgDgCgDQgDgEgBgDQgBgDgBgDQgEgCgBgDQgBgEACgEQgEgDgEgCQgFgDgCgEQgEgFgBgHQgFgDgBgCQgBgEADgFQACgEADgEQgFgDgBgDQAAgEACgEQgEgDgEgCQgFgDgBgCQgBgEADgFQgEgCgCgEQAAgCABgDQAAgBABgBQgEgDgDgEQgCgDgBgDQgBgDgBgDQgEgDgCgDQAAgDACgFQgEgCgEgDQgFgCgBgDQgBgEADgEQAAgBABgBIgUgbQACgCADgBQgBgBgBAAQgBgCgCgBIADgGIAAAAIAAAAIAAgBIABAAQAEgCADgCQgCgFgDgEQgCgEgDgFQAFgCAEgDQgCgEgDgEQAEgDAFgCQAEgDAEgCQgCgEgDgDQABAAAAAAQAEgCAEgDQgCgEgDgFQAEgCAFgDQAEgCAEgDQAFgCAEgDQgCgEgDgEQAEgDAFgCQAEgDAEgCQgCgFgDgEQAJgFAJgFQAEgCAEgDQANgHANgIQAFgCAEgDQgCgEgDgFQAEgCAFgDQAEgCAEgDQgCgEgDgEQANgIANgHQAFgDAEgCQAEgDAFgCQgDgFgCgEQAEgCAEgDQAFgCAEgDQgDgEgCgFQARgKASgKQAEgCAEgDQgCgEgDgEQAFgDAEgCQgDgFgCgEQAEgCABgEQABgDgCgEQgFACgEADQgEACgEgBQgDgBgDgEQgCgEgDgFQgEADgDgBQgEgBgCgEQgFACgEAAQgRgCgPgOQgDgDgCgDQgFACgDAAQgEgBgCgFQgEADgEgBQgDgBgDgEQgEACgDgBQgEgBgCgEQgBgBgBgCIgFADQgDgCgDgEQgEADgDgBQgDgBgDgEQgEACgDgBQgEgBgCgEQgDABgCAAIFzjXICtEqQgXALgSgCQgEACgEAAIAAAAAgpH4IAAgEIAQAAQgIADgIABIAAAA").cp();

	this.addChild(this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-50.4,59.3,101);
p.frameBounds = [rect];


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACHiIQACAEAAABQgXASgaAPQACAFgBACQgFAHgJAFQgEADgEACQgNAIgNAHQADAEgCABQgrAmgpANQgJADgKAAQgFACgDACQgKAFgIAFQgEADgEADQgQAPgHgPQgEADgEACQgXANgVAMQgFADgEACQADAFACAEQAEgCAEABQADAAADAFQAEgDAEABQADABADAEQAEgCADABQAEABACAEQAEgCAFgDQAEgCAEABQADAAACAFQAFgDADABQAEABADAEQAIgFAJAAQACAAADAEQAEgDAEgCQAFgDADACQAEAAACAFQANgIAOgCQABgBADAEQAEgCAEABQADABACAEQAUgNAXgHQACgBACAFQAEgDAEgCQAFgDADABQAEABACAEQAEgCAFgDQAJgFAIAAQADAAACAEQAFgDAEgCQAEgDAEACQADAAADAFQAEgDADABQADABADAEQAEgCAEABQAEABACAEQANgIANgHQAEgDAFgCQgDgEgCgFQAEgCAEgDQgDgEgCgEQAJgFAIgBQADAAACAEQAFgCAEgDQAEgCAEABQADABADAEQAEgDAFgCQAEgDAEACQADAAACAFQAFgDADABQADABACAEQAFgCAEABQADABADAEQANgJAHAVQAAAFADAEQACAEADAFQAOgJABAVQAAACgFADQACAEAAABQgPAOgQAKQgFACgEADQhQA3hJAVQgEACgDAAQgDgBgDgFQgEADgFACQgEADgEADQgDAEgEACQgKAGgGgLQgCgFgDgEQgEACgFABQgGAAgHgCQgFADgCgBQgEgBgCgEQgFACgEADQgFACgEAAQgGABgGgCQgEACgDAAQgEgBgCgFQgCgDgCgDQgBgBAAgBQgFACgDgBQgEgBgCgEQgFACgDADQgCAAgBABQgCABgDAAQgCgBAAAAQgDgCgCgDQgDADgEgBQgDgBgDgEQgFACgEAAQgGABgHgCQgFACgDAAQgDgBgDgFQgFADgEACQgEADgDgBQgEgBgDgEQgCgFgDgEQgDACgFADQgFACgDAAQgDgBgDgFQgEADgFACQgOAFgKgJIAAgEIhYAAIAJgWQAAgBAAgBQAAAAABAAQgBADAAACIADgDIgrg8QAEgDAEgCQgDgEgCgEQAEgDAEgCQgCgFgDgEQgCgEgDgFQAFgCAEgDQgCgEgDgEQAEgDAFgCQAEgDAEgCQgCgEgDgDQABAAAAAAQAEgCAEgDQgCgEgDgFQAEgCAFgDQAEgCAEgDQAFgCAEgDQgCgEgDgEQAEgDAFgCQAEgDAEgCQgCgFgDgEQAJgFAJgFQAEgCAFgDQAMgHANgIQAFgCAFgDQgDgEgCgFQADgCAFgDQAEgCAEgDQgCgEgDgEQAOgIAMgHQAFgDAEgCQAEgDAFgCQgDgFgCgEQAEgCAEgDQAFgCAEgDQgCgEgDgFQASgKARgKQAEgCAEgDQgCgEgDgEQAFgDAEgCQgCgFgDgEQAEgCACgEQAAgDgCgEQgFACgEADQgEACgEgBQgDgBgDgEQgCgEgDgFQgEADgDgBQgDgBgDgEQgFACgEAAQgRgCgPgOQgDgDgCgDQgFACgDAAQgDgBgDgFQgEADgDgBQgEgBgDgEQgEACgDgBQgEgBgCgEQAAgBgCgCIgFADQgDgCgDgEQgEADgDgBQgDgBgCgEQgFACgDgBQgEgBgCgEQgDABgCAAIF0jXICsEqQgWALgSgCQgEACgFAAQgHABgGgCQgFADgFACQgeASgeARQADAEgBACQgFAIgJAFIAAAAAg6H4IAAgEIAQAAQgIADgIABIAAAA").cp();

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-31.2,-50.4,62.6,101);
p.frameBounds = [rect];


(lib.leg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiDkgQAAAFAAAFQAFAAADACQACADAAAFQARADgGAbQgBAFAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAAAFAAAFQAFAAADACQAAABABABQABACAAAEQAFAAAFAAQAFAAAFAAQA8AAA6AFQAAAAAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQARgBgGAVQgBAFAAAFQAAAFAAAFQAFAAADACQACADAAAFQAAAFAAAFQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQARgBgGAVQgBAFAAAFQAFAAADACQACADAAADQAFAAADACQACADAAAFQAAAFAAAFQAFAAADACQACADAAAFQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAPAAAOAEQABABAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAAFAAQAFAFADAGQACAEAAAFQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAPAAAOAEQABABAAAFQAFAAADACQACADAAAFQAKAAAIAEQACABAAAFQAFAAAFAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQAAAFAAAFQAFAAADACQACADAAAFQAAAFAAAFQARgBgLATQgBACgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCABQgTAKABgQQgFAAgCgDQgDgCAAgFQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgFABQgbAGgDgRQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgEABQgWAFABgQQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQAAgFAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgEABQgUAFABgQQgFAAgCgDQgDgCAAgFQgFAAgFAAQgKAAgKAAQgFAAgFAAQgPAAgPAAQAAAEgBACQgBABAAAAQgDADgFAAQgFAAgFAAQAAAFgBAAQgzAMgcgRQgFAAgFAAQgFAAgEABQgWAFABgQQgFAAgFABQglAGgNgRQgFAAgCgBQgDgCAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgEABQgWAFABgQQAAgFAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFABQgbAGgDgRQgFAAgCgDQgDgCAAgFQgFAAgEABQgWAFABgQQgFAAgFAAQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgFAAIAAAAIAAihIGuAAQAAAAAAABIAAAAAImhaQgDgDAAgFQAcAngZgfIAAAAAIZhEQAXAFgXAAIAAgF").cp();
	this.shape_17.setTransform(56.3,28.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AImipQgDgDAAgFQAcAngZgfIAAAAAIaiOIAAgFQAVAFgVAAIAAAAAETCnIgDADQAAAAAAgBIADgEQAAABAAABIAAAAAiDllQAFAAADADQACACAAAFQARADgGAbQgBAFAAAFQAFAAADADQACACAAAFQAFAAADADQACACAAAFQAAAFAAAFQAFAAADADQACACAAADQABABABABQAEAAADAAIAAAMIAUAAIAAAPIAHAAIAAAFIAKAAIAAAHQAEAEADADQAAAAgDAEQAEADABADQAAAEgDAEQAEADAAADQABAEgEAEQABAHgBAGQgBAFgDAEQAEADAAADQABAEgDAEQANAJgRAOQAAAAgBAAIAAA/QgDAAgDAAQgFAAgFAAQgBAAAAAAQAAABAAABQAAADgDAEQANAKgRANQgEADgDAEQAEADABAEQAAADgDAEQADADABADQAAAEgDAEQgDACgDAEQAEADAAAEQABADgDAEQABAHgCAHQgBAEgDAEQAEADAAADQABAEgDAEQAEADAAADQABAEgEAEQAMAJAIAMQABABgDAEQAEAEAAADQABAEgDAEQADADAAADQABADgDAEQAEADAEAEQABAHgCAGQgBAFgDAEQABAGgBAHQgBAEgEAEQAEAEABADQAAAEgDAEQAEADAEADQADgEADgEQAEADAEADQADgEADgEQAMAJAIAMQAAACgDAEQADADAAADQAAAEgBAEQAGAGAEAIQABACgDAEQAEADAEADQAEADAAAEQAAADgDAEQAEADAAAEQABAEgDAEQAAAGgBAHQgBAEgDAEQAEADABAEQAAAEgDAEQgDADgDAEQADADABAEQAAADgDAEQgDAEgDAEQANAKgRAIQgDABgEgDQgDAEgDAAQgEABgDgDQgDADgEAAQgEABgEgDQgDAEgCAAQgVgEALgNQgEgDgBgDQAAgEADgDQgEgDgCgFQgDgGAAgHQgEgDgBgDQAAgEADgEQgEgDgEgDQgEgDgCgEQgCgHgBgGQgEgDgBgEQAAgDADgEQgEgDgEgEQgEgDgEgCQgZgMAIgPQgEgEgEgDQgEgDAAgDQAAgEADgDQgEgDgEgDQgVgJAMgMQgEgDgBgEQAAgDADgEQgEgDgBgEQAAgDADgEQADgEADgEQgEgDAAgEQAAgDADgEQgEgDAAgEQgBgDADgEQgEgDAAgEQgBgDADgEQgEgDAAgEQAAgDADgEQgEgDAAgEQgBgEADgDQgEgDAAgEQgBgDAEgEQgEgDAAgEQgBgDADgEQgEgEAAgDQgBgEAEgDQgEgDgEgDQgEgEAAgDQgBgEADgEQgEgDAAgDQgBgDADgDQgEgDAAgEQAAgDADgEQgEgDgEgDQgEgDAAgDQgBgEADgEQgEgDgBgEQgDgGgBgHQgEAAgEAAQgFAAgEABQgWAGABgRQgFAAgFABQglAGgNgRQgFAAgCgCQgDgDAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgCQgDgDAAgFQgFAAgEABQgWAGABgRQAAgFAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgCQgDgDAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgCQgDgDAAgFQgFAAgFABQgbAGgDgRQgFAAgCgCQgDgDAAgFQgFAAgEABQgWAGABgRQgFAAgFAAQgFAAgFAAQgFAAgCgCQgDgDAAgFQgFAAgFAAIAAAAIAAihIGuAAQAAABAAAAQAAAFAAAFIAAAA").cp();
	this.shape_18.setTransform(56.3,37.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAql/QAAAFAAAFQAFAAADADQACACAAAFQARADgGAbQgBAFAAAFQAFAAADADQACACAAAFQAFAAADADQACACAAAFQAAAFAAAFQAFAAADADQACACAAAEQABAAABABQADAAAEAAIAABFQgBAAgCABQACAFgCACQgBADgGACQgDAGgFAFQgDADgFABQACAFgCADQgCADgFABQAGAQgXABQAAgBAAABIglAzQgCgCgDgCQgEgDgEgDQgBAAAAAAQAAAAAAABQAAABAAAAIAAgCQAAACgBABQgBADgFABQAFAQgWABQAAgBgBABIgkAzQgDgCgCgCQgEgDgEgDQgBAAgBAAQAAAAgBABQAAABAAAAIAAgHQgCAAgBABQAGAPgXABQAAAAAAAAIglAxQgCgBgDgCQgEgDgEgDQgBgBAAAAQgBABAAABQgBAAAAABQgCACgEABQAFAQgVAAQgFAAgFACQACAFgCADQgCADgFACQABAEgBACQgCAEgFABQgFACgEABQABAFgCADQgBADgFACQgDAFgGAGQgDACgEACQAAAEgBADQgCAEgFABQACAFgCADQgBADgGABQAEAPAAAOQAAABgFACQABAFgBADQgCADgFACQACAEgCADQgCADgFABQACAFABAFQgDAHgFAEQgEADgFABQgDAGgFAFQgDADgFABQABAFgBADQgCADgFACQABAFACAEQAFgBAEgCQABAFACAFQAFgBAFgBQAEAOAAAOQgBACgFABQACAFgCADQgCADgFACQADAJgBAJQgBABgFACQACAGABAEQACAFgCADQgCADgFABQABAFgCAEQgBACgFACQgDAFgFAGQgDACgFACQABAFgBADQgCADgGABQgEACgEABQAAAEgBAEQgCADgFABQgFACgFABQAGAQgUgFQgDgBgCgFQgFACgCgCQgEgCgBgEQgFABgDgCQgDgCgBgFQgFACgBgBQgQgQAQgEQgBgFACgDQACgCAEgCQgBgEAAgFQACgHAEgGQgCgFABgDQACgDAFgBQgBgFgBgFQgCgFABgEQABgHAEgGQgCgFACgDQACgDAEgBQgBgFgBgFQgCgFgCgEQgNgZAQgHQgCgFgBgFQgCgFACgCQACgEAEgBQgBgEgCgFQgLgTARgDQgCgFABgEQADgDAEgBQgBgFABgDQACgDAFgBQAFgCAEgBQgBgFACgDQACgDAFgCQgBgEABgDQACgDAEgBQgBgFACgEQABgDAFgBQgCgFADgDQACgDAEgBQgBgFACgDQACgEAEgBQgCgEACgEQACgDAFgBQgBgFACgDQABgDAFgBQgCgGADgCQABgEAFgBQgCgFgBgEQgBgFACgDQABgDAFgCQgBgDABgCQACgEAFgBQgCgFACgDQACgEAEAAQAAgFgCgFQgBgFABgDQACgDAFgBQgBgGABgEQABgGADgGQgDgCgEgCQgEgDgEgCQgUgIAKgNQgEgDgFgCQgTgJgIgMQgHgIAAgJQgEgDgBgEQAAgDADgEQgEgDgEgDQgEgDgCgEQgDgGgCgHQgEgDAAgDQgBgEADgEQgEgDgEgCQgRgGAEgKQgBgBAAAAQgDgDAAgFQgFAAgFAAIAAAAIAAgsQgBAAAAgBIAAgWIABgCIAAhcIGsAAQAAABAAAAIAAAAAjNkPIAAAAIAAAAIAAAAAAAh5QAAAAAAAAQAAABAAABIAAgCAgSGAIgFABIAAgBIAFgCQAAABAAABIAAAAAGQEOQAAgEACgEQAAAwgCgoIAAAAAF2EeIADgEQAOAQgRgMIAAAA").cp();
	this.shape_19.setTransform(38.8,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_18}]},5).to({state:[{t:this.shape_19}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-0.2,112.5,58.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0.3,112.5,73.9), rect, rect, rect, rect, new cjs.Rectangle(-1.4,0.3,80.5,77.1)];


(lib.Flake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Frame1:0,Frame2:1,Frame3:2,frame4:3,Frame5:4,Frame6:5,Frame7:6},true);

	// Layer 1
	this.instance = new lib.flake1();
	this.instance.setTransform(-49.9,-49.9,0.862,0.862);

	this.instance_1 = new lib.flake2();
	this.instance_1.setTransform(-49.9,-49.9,0.671,0.741);

	this.instance_2 = new lib.flake3();
	this.instance_2.setTransform(-49.9,-49.9,0.862,0.862);

	this.instance_3 = new lib.flake4();
	this.instance_3.setTransform(-49.9,-49.9,0.862,0.862);

	this.instance_4 = new lib.flake5();
	this.instance_4.setTransform(-49.9,-49.9,0.862,0.862);

	this.instance_5 = new lib.flake6();
	this.instance_5.setTransform(-49.9,-49.9,0.862,0.862);

	this.instance_6 = new lib.flake7();
	this.instance_6.setTransform(-49.9,-49.9,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-49.9,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib._2 = function() {
	this.initialize();

	// Layer 1
	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(29.6,50.5);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,59.3,101);
p.frameBounds = [rect];


(lib._1 = function() {
	this.initialize();

	// Layer 1
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(31.3,50.5);

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,62.6,101);
p.frameBounds = [rect];


(lib.frontAll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_9 = new lib._1();
	this.instance_9.setTransform(-33.3,38.4,1,1,30,0,0,31.3,50.4);

	this.instance_10 = new lib._2();
	this.instance_10.setTransform(-34.8,38.1,1,1,30,0,0,29.7,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},5).to({state:[]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-20.9,104.7,118.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-85.8,-20.4,101.8,117.1), rect, rect, rect, rect, new cjs.Rectangle(0,0,0,0)];


(lib.reinDeer1 = function() {
	this.initialize();

	// Layer 1
	this.instance_11 = new lib.leg3();
	this.instance_11.setTransform(470.6,177.3,1,1,0,0,0,56.3,28.8);

	this.instance_12 = new lib.frontAll();
	this.instance_12.setTransform(366.8,129.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AsJtvQAAgFACgDQADgCAFAAQAAgFACgBQAIgEAKAAQAAgFACgDQADgCAFAAQAAAFAAAFQAAAFAAAFQAAAFAAAFQAAAFAAAFQAAAKgEAIQgBACgFAAQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAFAAQAAAUAAAUQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAEgCQAGgDAFgFQAAgFACgDQADgCAFAAQAAgFACgEQADgGAFgFQAAgFACgDQADgCAFAAQAAgFACgEQADgGAFgFQAAgFACgDQADgCAFAAQAAgFAAgFQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAFAAAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAAFAAAFQAFAAAFAAQAAAPgFANQAAACgFAAQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFAAAFQAAAFAAAFQAAAFgDACQgCADgFAAQgFAAgFAAQAAAFAAAFQgBATgLAIQgDADgFAAQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAPgFANQAAACgFAAQAAAFgDACQgCADgFAAQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFAAAFQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFAAAFQAABBAABBQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAFAAQAAgFgBgFQgGgVARABQAAgFAAgFQADgRARARQAAAFAAAFQAFAAAFAAQAAAZAAAZQAAAFAAAFQAAAFAAAFQAFAAAFAAQAFAAAFAAQAAAPAAAPQAAAFAAAFQAAAPAAAPQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAFAAQAAAPAAAPQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAEgCQAagIAZgKQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFgBgFQgKgpAfABQAAgFAAgFQAAgUAAgUQAAgFACgDQADgCAFAAQAAgFACgDQAIgHAKgFQAAgFACgBQAIgEAKAAQAAAFAAAFIAFAAQgCAgARAIQAAgFACgDQADgCAFAAQAFAAAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgEQADgGAFgFQAAgFACgEQADgGAFgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQgWAGABgQQABgFAAgFQgFAAgFAAQgKAAgIgEQgCgBAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgBgCQgLgTARABQAAgFABgBQAOgEAPAAQAFAAAFAAQAPAAAPAAQAAAFAAAFQAFAAAFAAQAFAAAFAAQAAAFAAAFQAFAAADgCQATgLgHglQgkgKgEgoQAAgFAAgFQgFAAgDgDQgCgCAAgFQAFgFAGgDIAYgNQgahRAfg7QAAgEACgDQABgBABAAQAHgLAJgKQAFAAAFAAQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAUAAAUQAAAFAAAFQAFAAAEgCQAGgDAFgFQAAgFABgBQATgEAUAAQAAAKAAAKQAAAFAAAFQAFAAAEACQAGADAFAFQAAA3gFA2QAAABgFAAQAAAFgDACQgCADgFAAQAAAeAAAeQAAAFAAAFQAFAAAFAAQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAPAAAPQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAPgFANQAAACgFAAQAAAKAAAKQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQgFAFgGADQgEACgFAAQgFAAgFAAQAAAFgDACQgCADgFAAQgDARgbgGQgFgBgFAAQABAfgqgKQgEgBgFAAQAAAFgDACQgCADgFAAQAAAFAAAFQAFAAAFAAQAKAAAKAAQAFAAAFAAQAKAAAKAAQAAgFACgDQADgCAFAAQAAgFABgBQATgEAUAAQAAAFAAAFQAFAAAFAAQAAAPgFANQAAACgFAAQAAAFAAAFQAAAZgFAYQAAABgFAAQAAAFgDACQgCADgFAAQAAAFAAAFQAAAFAAAFQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAKgEAIQgBACgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQgFAFgGADQgEACgFAAQAAAFgDACQgCADgFAAQgFAAgFAAQgcARg0gHQgFAAgFAAQAAAKAAAKQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAUAAAUQAAAFAAAFQAFAAAFAAQAAAFAAAEQAAAEAAAFQAFAAAFAAQAAAPAAAPQAAAFAAAFQAAAHAAAHIACAAQAxBUgSAzQAbAWAlAEQABACAAADQAFAAACACQACADAAAFQAFAAAFAAQAKAAAHAEQACABAAAFQAFAAACACQADADAAAFQAagHACARQAAAFAAAFQAKAAAJAAIAAAMQACAAABABQACADAAAFQAbgHADARQAAAFAAAFQAKAAAKAAIAAAAQAFAAAFAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgKAAgKQAAgFAAgFQAAgKAAgKQAFAAAFAAQAAgFAAgFQgCgWgSgIQARABgGgWQgBgEAAgFQAAgFAAgFQAAgKAAgKQgFAAgCgDQgDgCAAgFQgFAAgBgCQgEgIAAgKQAAgFAAgFQgFAAgCgDQgDgCAAgFQAAgFAAgFQgFAAgCgDQgDgCAAgFQAAgFAAgFQAAgKAAgKQgFAAgCgDQgDgCAAgFQgFAAAAgCQgFgNAAgPQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgDAAgFQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAPAAAOAEQABABAAAFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAEAAQAAgFAAgFQATAAATAEQABABAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAAFAAQAFAAADACQACADAAAFQAFAFADAGQACAEAAAFQAAAFAAAFQAFAFAGADQAEACAFAAQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAKAAAKAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgeAAgeQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgEABQgWAFABgQQgFAAgFAAQgFAAgFAAQgFAAgFAAQAAAFgCABQgIAEgKAAQAAAFgCACQgDADgFAAQAAAKAAAKQAAAFAAAFQAKAAAKAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAKAAAIAEQACABAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQARAIgLAeQgBACgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQgFAAgFAAQAAAFgBAAQgfAMgIgRQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQAAgFAAgFQgFAAAAgBQgFgsAAgtQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAjAAAjAFQAAAAAAAFQAFAAADACQACADAAAFQAPAAAOAEQABABAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQARgBgGAVQgBAFAAAFQAAAKAAAKQAAAFAAAFQARgBgLATQgBACgFAAQAAAFABAFQAGAlgRANQAAAFgCACQgDADgFAAQAAAFAAAFQAAAFgCACQgDADgFAAQAWAhBEgMQAFgBAFAAQAeAAAeAAQAFAAAFAAQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgZAAgZQAAgFAAgFQgFAAgFgBQgWgCACgbQgFAAgFAAQgPAAgPAAQgFAAgFAAQAAAFgCACQgDADgFAAQAAAKAAAKQAAAFAAAFQAUAAAUAAQAFAAAFAAQAFAFADAGQACAEAAAFQARgBgLATQgBACgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgwAwgygtQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQAAgFAAgFQAAgPAAgPQAAgFAAgFQAAgKAAgKQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAFAAAFAAQAFAAADgDQACgCAAgFQAAgFAAgFQAAgFAAgFQAFAAADACQACADAAAFQAKAAAKAAQAFAAAFAAQAFAAADACQACADAAAFQAAAFAAAFQAFAAAFAAQAFAAAFAAQA0ARARA1QABAFAAAFQAAAFAAAFQASAWgMAvQgBABgFAAQAAAFgCACQgDADgFAAQAAAFAAAFQAAAFgCACQgDADgFAAQAAAFAAAFQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCABQgIAEgKAAQAAAFgCAEQgDAGgFAFQgFAAgFAAQAAAFAAAFQAFAAADACQACADAAAFQAFAAAFAAQAFAAAFAAQAKAAAIAEQACABAAAFQAFAAADACQACADAAAFQAKAAAKAAQAFAAAFAAQAFAAADACQACADAAAFQAFAAAFAAQAFAAADACQACADAAADQAFAAAFAAQAFAAAFAAQA6ACAigSQADgCAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQgCgcgIgWQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgKAAgKAAQAAAFgCACQgDADgFAAQAAAKAAAKQAAAFAAAFQAPAAAOAEQABABAAAFQARAIgLAeQgBACgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgBAAQgkAMgNgRQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAAAgBQgFgdAAgeQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQA1gGAuAKQABABAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAFADAGQACAEAAAFQAAAtAAAtQAAAFAAAFQAAAFgCACQgDABgFAAQAAAFgCAEQgvBWiXgPQgFAAgEABQgWAFABgQQgFAAgCgDQgDgCAAgFQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgggBgIgbQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgfgIQgggHiOgFQAAAFAAAFQAFAAAFAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAKAFAIAHQACADAAAFQAAAFAAADQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQAAAFAAAFQAFAAABABQASA+giARQAAAFAAAFQAAAFgBAAQgTAFgUAAQAAAeAAAeQAAAFAAAFQAAAFgCAEQgDAGgFAFQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCABQgIAEgKAAQgFAAgFABQggAGgIgRQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQAAgFAAgFQgFAAgCgDQgDgCAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAAgKAAgKQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFABgFQABgQgWAGQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCAEQgDAGgFAFQAAAFgCACQgDADgFAAQAAAFgCAEQgDAGgFAFQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgEAAQAAAFgBACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQBCARBcgHQAFAAAFAAQAFAAADgDQACgCAAgFQAAgFAAgFQAjAAAjAAQAFAAAFAAQAKAAAKAAQAFAAAFAAQAAgFAAgFQBLAABLAFQAAAAAAAFQAFAAAFAAQAFAAAFAAQAtAAAtAAQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAFAAAFAAQAAgFAAgFICCBoQgBACgBABQgDADgFAAQAAAFgBAAQgYAFgZAAQAAAFAAAFQAFAAAFAAQAFAFADAGQACAEAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAFAAAFIgFAAQAAAFAAAFQgDARgbgHQAAAFAAAFQAAAFAAAFQAFAAADACQACADAAAFQAAAFAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQARgBgGAVQAAAEgBAFQAAAAAAABQAAAEAAAEIgMAAIAAE4QgWAAgQgKQgFAAgFAAQgFAAgEABQgWAFABgQQgFAAgFABQglAGgNgRQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgEABQgWAFABgQQAAgFAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFAAQgFAAgEgCQgGgDgFgFQgFAAgCgDQgDgCAAgFQgFAAgFABQgbAGgDgRQgFAAgCgDQgDgCAAgFQgFAAgEABQgWAFABgQQgFAAgFAAQgFAAgFAAQgFAAgCgDQgDgCAAgFQgFAAgFAAIAAAAQgyAAgyAAQgFAAgFAAQgeAAgeAAQAAAFgCABQgIAEgKAAQgFAAgFAAQAAAFgBAAQgTAFgUAAQgFAAgFAAQgNAAgPAAQAAAFgBAAQhFALgygNQgFgCgFgBQgFAAgFAAQgFAAgFAAQgRADgOgBQgYgBgPgLQgFAAgEgCQgGgDgFgFQgFAAgFAAQgjAAgjAAQAAAFgCABQgIAEgKAAQAAAFgBAAQgdAFgeAAQAAAFgCABQgIAEgKAAQgFAAgFAAQgPAAgPAAQAAAFgBAAQhHAMgwgRQgFAAgFAAQgKAAgKAAQgFAAgEABQgWAFABgQQgFAAgFAAQgZAAgZAAQgFAAgFAAQAAABAAACIhtAAQgBgBAAgCQgFAAAAgBQgFgdAAgeQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAKAAAKAAQAFAAAFAAQAPAAAPAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAPAAAPAAQAFAAAFAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAFAAAFAAQAAgFAAgFQAUAAAUAAQAFAAAFAAQAAgFAAgFQAFAAAFAAQAAgFAAgFQAFAAADgDQACgCAAgFQgFAAgFAAQgFAAgCgDQgDgCAAgFQAAgFAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgOgKgGgTQgBgEgBgEQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQAAgCAAgBIgGAAQgBgEgBgEQgEAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgDAAgCgBQgBgBgBgBQgCgCAAgFQAAgBAAAAQAAgFAAgEQgFAAgDgDQgCgCAAgFQAAgFAAgFQAAgFAAgFQgFAAgFAAQgPABAGgVQAAgFAAgFQAAgFAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgCgCAAgFQAAgFAAgFQAAgUAAgUQgFAAgDgDQgCgCAAgFIgBAAQAliGglhzIgDAAQAAgFAAgGQAAgFAAgEQgjAAgjAAQgFAAgFAAQgFAAgDgCQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgFAAQgFAAgDgDQgCgCAAgFQAAgFAAgFIgFAAQAAgFAFgFQAAgFAAgFQAAgFACgDQADgCAFAAQAAgFAAgFQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgKAAgIgEQgCgBAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQAAgFAAgFQAAgFAAgFQgFAAgDgDQgCgCAAgFQgFAAAAgBQgNhmAShNIAAgFQAVABgBgQQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQAAgFAAgFQgFgFgDgGQgCgEAAgFQgFAAgDgDQgCgCAAgFQgRABAGgWQABgEAAgFQgFAAgDgDQgCgCAAgFQgSgXAHgvQABgFAAgFQAAgFgBgFQgGgbARgDQAAgFACgDQADgCAFAAQAAgFgBgFQgGgVARABQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgDQADgCAFAAQAAgFACgBQAIgEAKAAQAAAFAAAFIAFAAQgDhEASgqIAAAAAFTgIQAhAZgegTQgDgBAAgFIAAAAAFnAoQAXAFgXAAIAAgFAJXlXIAAgFQAXAFgXAAIAAAAANvAoQAXAFgXAAIAAgFApLiLQAAgFAAgFQAAgFAAgFQgFAAgFAAQgFAAgFAAQAAAFAAAFQAAAFAAAFQAFAAAFAAQAFAAAFAAIAAAAAAxE7IAAgFQAXAFgXAAIAAAAAsgqMQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAKgEAIQgBACgFAAQAAAFAAAFQAFAAAFAAQAAAFAAAFQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAAAFAAAFQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAFAAQAAAFAAAFQAFAAAFAAQAFAAAFAAQAAgFACgDQADgCAFAAQAAgFAAgFQAAgFgBgFQgGggARgIQAAgFAAgFQAAgFAAgFQAAgKAAgKQAAgFAAgFQgRgDAGgbQABgFAAgFQgFAAgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACIAAAAAqdNIQAJAAAHADIgQAAIAAgHQAAACAAACIAAAA").cp();
	this.shape_20.setTransform(387,88);

	this.addChild(this.shape_20,this.instance_12,this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(281,-4,245.9,231.6);
p.frameBounds = [rect];


(lib.reinDeer2 = function() {
	this.initialize();

	// Layer 1
	this.instance_13 = new lib.reinDeer1();
	this.instance_13.setTransform(-150.8,-325.8,1,1,15,0,0,378,116.9);

	this.instance_14 = new lib.reinDeer1();
	this.instance_14.setTransform(47.1,-315.4,1,1,15,0,0,378,116.9);

	this.instance_15 = new lib.reinDeer1();
	this.instance_15.setTransform(-90.7,-524.1,1,1,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("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").cp();
	this.shape_21.setTransform(269.2,-298.5);

	this.addChild(this.shape_21,this.instance_15,this.instance_14,this.instance_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-273.1,-467.8,890,299.7);
p.frameBounds = [rect];


(lib.santa = function() {
	this.initialize();

	// Layer 1
	this.instance_16 = new lib.reinDeer2();
	this.instance_16.setTransform(486,562.7,1,1,0,0,0,238.1,115.8);

	this.addChild(this.instance_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-25.2,-20.9,890,299.7);
p.frameBounds = [rect];


(lib.santa_mc = function() {
	this.initialize();

	// Layer 1
	this.instance_17 = new lib.santa();
	this.instance_17.setTransform(158.3,-80,0.205,0.302,0,0,0,419.6,242.6);

	this.addChild(this.instance_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(67.2,-159.7,182.3,90.6);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;