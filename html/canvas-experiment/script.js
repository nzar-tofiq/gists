// JavaScript Document
$(document).ready(function(){
	var canv = document.getElementById('canv');
	var ctx = canv.getContext('2d');
	ctx.fillRect(10, 20, 50, 50);
	ctx.fillStyle = 'rgb(0, 255, 0)';
	ctx.strokeStyle = 'rgb(0,182,0)';
	ctx.lineWidth = 5;
	ctx.strokeRect(9,19,52,52);
	var gradient = ctx.createLinearGradient(0,0,0,canv.height);
	gradient.addColorStop(0,'#fff');
	gradient.addColorStop(1,'#000');
	ctx.fillStyle = gradient;
	ctx.fillRect(0,0, canv.width, canv.height);
	
	var canv1 = document.getElementById('canv1');
	var ctx1 = canv1.getContext('2d');
	var gradient1 = ctx1.createRadialGradient(canv1.width/2, canv1.height/2, 0, canv1.width/2, canv1.height/2, 150);
	gradient1.addColorStop(0, '#fff');
	gradient1.addColorStop(1, '#000');
	ctx1.fillStyle = gradient1;
	ctx1.fillRect(0, 0, canv1.width, canv1.height);
	
	var canv2 = document.getElementById('canv2');
	var ctx2 = canv2.getContext('2d');
	var img = document.createElement("img");
	img.onload = function(){
		ctx2.fillStyle = ctx2.createPattern(this, 'repeat');
		ctx2.fillRect(0, 0, canv2.width, canv2.height);
		};
		img.src = "images/husky.png";
		
	//for arc if using degrees
	var degrees;
	var radians = degrees * Math.PI/180;
	
	var canv3 = document.getElementById('canv3');
	var ctx3 = canv3.getContext('2d');
	ctx3.beginPath();
	ctx3.arc(100, 50, 30, 0, Math.PI*2, true); //head
	ctx3.fill();
	
	ctx3.beginPath(); //smile
	ctx3.strokeStyle = "#c00";
	ctx3.lineWidth = 3;
	ctx3.arc(100, 50, 20, 0, Math.PI, false);
	ctx3.stroke();
	
	ctx3.beginPath(); //left eye
	ctx3.fillStyle = "#c00";
	ctx3.arc(90, 45, 3, 0, Math.PI*2, true);
	ctx3.fill();
	ctx3.moveTo(113,45); //lift the pen 
	//right eye
	ctx3.arc(110, 45, 3, 0, Math.PI*2, true);
	ctx3.fill();
	ctx3.stroke();//thicker eyes
	
	ctx3.beginPath();
	ctx3.moveTo(100, 80);// move the pen to the bottom of the head
	ctx3.lineTo(100, 120);//draw the body
	ctx3.lineTo(120, 140);//draw left leg
	ctx3.lineTo(100, 120);//come back over the same line
	ctx3.lineTo(80, 140);//draw the right leg
	ctx3.lineTo(100, 120);//come back over the same line
	ctx3.lineTo(100, 90);//go up a bit to where the shoulders will be
	ctx3.lineTo(80, 110);//draw the right arm
	ctx3.lineTo(100, 90);//come back over the ame line
	ctx3.lineTo(120, 110);
	ctx3.stroke();
	
	var canv4 = document.getElementById('canv4');
	var ctx4 = canv4.getContext('2d');
	//tranlate the reference point to the middle of the canvas instead of top left
	ctx4.translate(ctx4.canvas.width/2, ctx4.canvas.height/2);
	drawSpiral();
	setInterval(function(){
		ctx4.clearRect(-ctx4.canvas.width/2, -ctx4.canvas.height/2, ctx4.canvas.width, ctx4.canvas.height);
		ctx.rotate(Math.PI/180*0.5);
		drawSpiral(); 
	}, 10);
	
	function drawSpiral(){
		for (i=0; i< 720; i++) {
		  angle = 0.1 * i;
		  x=(1+angle)*Math.cos(angle);
		  y=(1+angle)*Math.sin(angle);
		  ctx4.lineTo(x, y);
		  ctx4.stroke();
		  ctx4.strokeStyle = "#fff";
		  ctx4.lineWidth = 2;
		}
	}
});
