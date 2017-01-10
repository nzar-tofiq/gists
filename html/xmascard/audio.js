var srcAry = ["All I Want For Chirstmas",
				"Christmas Time",
				"Do They Know Its Christmas",
				"Last Christmas",
				"Silent Night",
				"One More Sleep",
				"Underneath The Tree"];


var div = document.createElement("div");
var trackNo = Math.floor(Math.random()*7);
var songName = srcAry[trackNo];
var source = "sounds/"+songName+".mp3";
div.innerHTML = '<audio src="'+source+'" id="audio1" autoplay controls></audio> <input type="button" id="change" value="Change music" onclick="changeTrack();">';

document.getElementsByTagName("body")[0].appendChild(div);
var audio = document.getElementById("audio1");
audio.volume = 0.3;

function changeTrack(){
	if(trackNo < srcAry.length-1){
		trackNo++;
		playTrack();
	}else {
		trackNo=0;
		playTrack();
	}
}

function playTrack(){
	songName = srcAry[trackNo];
	source = "sounds/"+songName+".mp3";
	audio.src = source;
	audio.play();
}

audio.addEventListener("ended",function(){
	changeTrack();
});
