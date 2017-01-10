window.onload = (function(){
	var timer = 60;
	var circle = document.getElementById("clickArea");
	circle.style.display = "none";
	document.getElementsByTagName("input")[0].onclick =  function(){
		document.getElementsByTagName("input")[0].style.display = "none"
		circle.style.display = "block";
			setInterval(function(){
			timer--;
			if(timer>=0)
				document.getElementById("timer").innerHTML = "Time Remaining: "+ timer +" Seconds";
			},1000);
		setTimeout(function(){
			circle.style.display = "none";
		}, 60000);
		var count = 0;
		circle.onclick = function(){
			count++	;
			document.getElementById("clickCounter").innerHTML=count;
		}
	}
});