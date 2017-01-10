var ongoing = new Array;

window.addEventListener("load", function() {
	var c = document.getElementById("playarea");
	c.addEventListener("touchstart", handleStart, false);
	c.addEventListener("touchmove", handleMove, false);
	c.addEventListener("touchend", handleEnd, false);
	c.addEventListener("touchleave", handleEnd, false);
	c.addEventListener("touchcancel", handleCancel, false);
	
	var ctx = c.getContext("2d");
	drawLine(ctx, 200, 0, 200, 600);
	drawLine(ctx, 400, 0, 400, 600);
	drawLine(ctx, 0, 200, 600, 200);
	drawLine(ctx, 0, 400, 600, 400);
	
	console.info("Initialized");
});


function handleStart(evt) {
	evt.preventDefault();
	
	var c = document.getElementById("playarea");
	var ctx = c.getContext("2d");
	var touches = evt.changedTouches;
	
	for (var i=0; i < touches.length; i++) {
		// Log the touch
		console.log("touchstart (",touches[i].pageX,",",touches[i].pageY,")");
		
		// Visualize the touch
		drawCircle(ctx,
				touches[i].pageX - c.offsetLeft,
				touches[i].pageY - c.offsetTop);
		
		// Add touch object to ongoing touches
		ongoing.push(copyTouch(touches[i]));
	}
}

function handleMove(evt) {
	evt.preventDefault();
	
	var c = document.getElementById("playarea");
	var ctx = c.getContext("2d");
	var touches = evt.changedTouches;
		
	for (var i=0; i < touches.length; i++) {
		// Get the existing touch object
		var idx = getOngoingTouchId(touches[i].identifier);
		
		if(idx >= 0) {
			// Log the touch
			console.log("touchmove (",touches[i].pageX,",",touches[i].pageY,")");
			
			// Visualize the touch
			drawLine(ctx,
				ongoing[idx].pageX - c.offsetLeft,
				ongoing[idx].pageY - c.offsetTop,
				touches[i].pageX - c.offsetLeft,
				touches[i].pageY - c.offsetTop);

			// Replace the ongoing touch object
			ongoing.splice(idx, 1, copyTouch(touches[i]));
		} else {
			console.warning("can't find touch to move");
		}
	}
}

function handleEnd(evt) {
	evt.preventDefault();
	
	var c = document.getElementById("playarea");
	var ctx = c.getContext("2d");
	var touches = evt.changedTouches;

	for (var i=0; i < touches.length; i++) {
		// Get the existing touch object
		var idx = getOngoingTouchId(touches[i].identifier);
		
		if(idx >= 0) {
			// Log the touch
			console.log("touchend (",touches[i].pageX,",",touches[i].pageY,")");
		
			// Visualize the touch
			drawLine(ctx,
				ongoing[idx].pageX - c.offsetLeft,
				ongoing[idx].pageY - c.offsetTop,
				touches[i].pageX - c.offsetLeft,
				touches[i].pageY - c.offsetTop);
			drawCircle(ctx,
				touches[i].pageX - c.offsetLeft,
				touches[i].pageY - c.offsetTop);
			
			// Remove the ongoing touch object
			ongoing.splice(idx, 1);
		} else {
			console.warning("can't find touch to end");
		}
	}
}

function handleCancel(evt) {
	evt.preventDefault();
	var touches = evt.changedTouches;
	for (var i=0; i < touches.length; i++) {
		// Get the existing touch object
		var idx = getOngoingTouchId(touches[i].identifier);

		if(idx >= 0) {
			// Log the touch
			console.log("touchcancel (",touches[i].pageX,",",touches[i].pageY,")");	
			
			// Remove the ongoing touch object
			ongoing.splice(idx, 1);
		} else {
			console.warning("can't find touch to cancel");
		}
	}
}

function copyTouch(touch) {
	return {
		identifier:	touch.identifier,
		pageX:		touch.pageX,
		pageY:		touch.pageY
	};
}

function getOngoingTouchId(id) {
	for (var i=0; i < ongoing.length; i++) {
		if (ongoing[i].identifier === id) {
			return i;
		}
	}
	return -1;    // not found
}

function drawCircle(ctx, x, y) {
	ctx.beginPath();
	ctx.arc(x, y, 8, 0, 2 * Math.PI, false);
	ctx.fillStyle = "#000000";
	ctx.fill();
}

function drawLine(ctx, sx, sy, ex, ey) {
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#FF0000";
	ctx.moveTo(sx, sy);
	ctx.lineTo(ex, ey);
	ctx.stroke();
}