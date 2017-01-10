$(document).ready(function(){
	var canv5 = document.getElementById('canv5');
	var ctx5 = canv5.getContext('2d');
	var img = document.createElement('img');
	img.onload = function(){
		ctx5.drawImage(img, 0, 0, 400, 800, 0, 0, 300, 400);
		var pixels = ctx5.getImageData(0, 0, img.width, img.height);
		//the for loop is to create an x-ray of the image by changing every pixel's colour
		//but it dosen't work because of security issues
		for (var i=0; i<pixels.data.length; i++){
			pixels.data[i+0] =255 - pixels.data[i+0]; //red
			pixels.data[i+1] =255 - pixels.data[i+2]; //green
			pixels.data[i+2] =255 - pixels.data[i+1]; //blue
		}
		ctx5.putImageData(pixels, 0, 0);
	};
	img.src = "images/husky400_300.png";
	
	var canv6 = document.getElementById('canv6');
	var ctx6 = canv6.getContext('2d');
	var ballImage = document.createElement('img');
	ballImage.src = 'images/husky.png';
	ctx6.fillStyle = 'rgb(255,255,255)';
	ctx6.fillRect(0,0,ctx6.canvas.width, ctx6.canvas.height);
	ctx6.fillStyle = 'rgb(0,255,0)';
	ctx6.fillRect(10,20,50,50);
	//this is brilliant you can save a canvas as an image on the file system by showing it as png on browser
	//window.location = ctx6.canvas.toDataURL('image/img');
	var canv7 = document.getElementById('canv7');
	var ctx7 = canv7.getContext('2d'), 
	ballctx,
	x = 100,//starting point
	y =50,
	dx = 2,
	dy = 4,
	width = 800,
	heigh = 600;
	
	//load the image
	ballImg = document.createElement('img');
	ballImg.src = 'images/husky.png';
	
	ballImg.onload = function(){
		//create another canvas rotate it and put it in the main canvas
		var ball = document.createElement('canvas');
		ball.height= 100;
		ball.width = 100;
		ballctx = ball.getContext('2d');
		//translate to centre and rotate
		ballctx.translate(50,50);
		setInterval(draw, 25);
	};
	
	function draw(){
		ctx7.clearRect(0,0,width, heigh);
		ballctx.rotate(Math.PI/180*2);
		
		//draw the image inside ball canvas at (0, 0)
		ballctx.drawImage(ballImg, 0,0,ballImg.width, ballImg.height, -25, -25,50,50);
		
		//copy the rotated ball with the image
		ctx7.drawImage(ballctx.canvas, x, y);
		x += dx;
		y += dy;
		
		if (x + dx > ctx7.canvas.width-75 || x+dx < -25)
			dx = -dx;
		
		if (y +dy > ctx7.canvas.height-75 || y+dy<-25)
			dy = -dy;	
	}
	
	
	
	var canv = document.getElementById('star');
	var ctx = canv.getContext('2d');
	
	//draw random stars
	for (var j = 1; j<50; j++){
		ctx.save();
		ctx.fillStyle = '#fff';
		ctx.translate(75-Math.floor(Math.random()*150), 75-Math.floor(Math.random()*150));
		drawStar(ctx, Math.floor(Math.random()*4)+2, Math.floor(Math.random()*4)+2, 5, 0, 0);
		ctx.restore();
	}
	
	function drawStar(ctx,cx,cy,spikes,r0,r1){
		var rot=Math.PI/2*3,x=cx,y=cy,step=Math.PI/spikes
	 
		ctx.strokeSyle="#000";
		ctx.beginPath();
		ctx.moveTo(cx,cy-r0)
		for(i=0;i<spikes;i++){
			x=cx+Math.cos(rot)*r0;
			y=cy+Math.sin(rot)*r0;
			ctx.lineTo(x,y)
			rot+=step
			
			x=cx+Math.cos(rot)*r1;
			y=cy+Math.sin(rot)*r1;
			ctx.lineTo(x,y)
			rot+=step
		}
		ctx.lineTo(cx,cy-r0)
		ctx.stroke();
		ctx.closePath();
	}
});