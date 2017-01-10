$(document).ready(function() {
	//total Score gathered by the user
	totalScore = 0;
	possibleScore = 75;
	//if task was completeted according to local storage then set the points
	if(localStorage.getItem("libt1") === "done"){
		$("#libform1").html("Task completed").css("background","#0C0");
		totalScore += 5;
	}
	if(localStorage.getItem("libt2") === "done"){
		$("#libform2").html("Task completed").css("background","#0C0");
		totalScore += 10;
	}
	if(localStorage.getItem("cgt1") === "done"){
		$("#cgform1").html("Task completed").css("background","#0C0");
		totalScore += 5;
	}
	if(localStorage.getItem("cgt2") === "done"){
		$("#cgform2").html("Task completed").css("background","#0C0");
		totalScore += 10;
	}
	if(localStorage.getItem("caft1") === "done"){
		$("#cafform1").html("Task completed").css("background","#0C0");
		totalScore += 5;
	}
	if(localStorage.getItem("caft2") === "done"){
		$("#cafform2").html("Task completed").css("background","#0C0");
		totalScore += 10;
	}
	if(localStorage.getItem("apt1") === "done"){
		$("#apform1").html("Task completed").css("background","#0C0");
		totalScore += 5;
	}
	if(localStorage.getItem("apt2") === "done"){
		$("#apform2").html("Task completed").css("background","#0C0");
		totalScore += 10;
	}
	if(localStorage.getItem("hpt1") === "done"){
		$("#hpform1").html("Task completed").css("background","#0C0");
		totalScore += 5;
	}
	if(localStorage.getItem("hpt2") === "done"){
		$("#hpform2").html("Task completed").css("background","#0C0");
		totalScore += 10;
	}
	
//Library tasks
	//Setting score and saving completed Library task 1
	$("#libform1").submit(function(e){
		e.preventDefault();
		var input = $("#libtxt1").val();
		if(input === "a"){
			//localStorage.removeItem("libt1");
			localStorage.setItem("libt1","done");
			$("#libform1").html("Task completed").css("background","#0C0");
			totalScore += 5;
			$("#score").html(totalScore+' / '+possibleScore);
		}else{
			$("#libbtn1").html("Try again");
		}
	});
	//Setting score and saving completed Library task 2
	$("#libtxt2").change(function (event) {
		var files = event.target.files, file;
		if (files && files.length > 0) {
			file = files[0];
		}

		var image = new MegaPixImage(file);
		var reader = new FileReader();

		reader.onloadend = function () {
			var exif = EXIF.readFromBinaryFile(new BinaryFile(reader.result));
			
			image.onrender = function(target) {
					qrcode.callback = function(data) {
						if(data === "libraryqr"){
							localStorage.setItem("libt2","done");
							$("#libform2").html("Task completed").css("background","#0C0");
							totalScore += 10;
							$("#score").html(totalScore+' / '+possibleScore);
						} else {
							$("#libform2").append("<p>Wrong - Try again</p>");
						}
					};
				qrcode.decode(target.src);
			};
			
			image.render($("#libqr")[0], {
				height: 200,
				orientation: exif.Orientation
			});
		};
		reader.readAsBinaryString(file);
	});
	
//crazy golf tasks
	//Setting score and saving completed Crazy Golf task 1
	$("#cgform1").submit(function(e){
		e.preventDefault();
		var input = $("#cgtxt1").val();
		if(input === "a"){
			localStorage.removeItem("cgt1");
			localStorage.setItem("cgt1","done");
			$("#cgform1").html("Task completed").css("background","#0C0");
			totalScore += 5;
			$("#score").html(totalScore+' / '+possibleScore);
		}else{
			$("#cgbtn1").html("Try again");
		}
	});
	//Setting score and saving completed Crazy Golf task 2
	$("#cgtxt2").change(function (event) {
		var files = event.target.files, file;
		if (files && files.length > 0) {
			file = files[0];
		}

		var image = new MegaPixImage(file);
		var reader = new FileReader();

		reader.onloadend = function () {
			var exif = EXIF.readFromBinaryFile(new BinaryFile(reader.result));
			
			image.onrender = function(target) {
					qrcode.callback = function(data) {
						if(data === "crazygolfqr"){
							localStorage.setItem("cgt2","done");
							$("#cgform2").html("Task completed").css("background","#0C0");
							totalScore += 10;
							$("#score").html(totalScore+' / '+possibleScore);
						} else {
							$("#cgform2").append("<p>Wrong - Try again</p>");
						}
					};
				qrcode.decode(target.src);
			};
			
			image.render($("#cgqr")[0], {
				height: 200,
				orientation: exif.Orientation
			});
		};
		reader.readAsBinaryString(file);
	});
	
//cafe tasks
	//Setting score and saving completed Uni Cafe task 1
	$("#cafform1").submit(function(e){
		e.preventDefault();
		var input = $("#caftxt1").val();
		if(input === "a"){
			localStorage.removeItem("caft1");
			localStorage.setItem("caft1","done");
			$("#cafform1").html("Task completed").css("background","#0C0");
			totalScore += 5;
			$("#score").html(totalScore+' / '+possibleScore);
		}else{
			$("#cafbtn1").html("Try again");
		}
	});
	//Setting score and saving completed Uni Cafe task 2
	$("#caftxt2").change(function (event) {
		var files = event.target.files, file;
		if (files && files.length > 0) {
			file = files[0];
		}
		var image = new MegaPixImage(file);
		var reader = new FileReader();
		reader.onloadend = function () {
			var exif = EXIF.readFromBinaryFile(new BinaryFile(reader.result));
			
			image.onrender = function(target) {
					qrcode.callback = function(data) {
						if(data === "cafe"){
							localStorage.setItem("caft2","done");
							$("#cafform2").html("Task completed").css("background","#0C0");
							totalScore += 10;
							$("#score").html(totalScore+' / '+possibleScore);
						} else {
							$("#cafform2").append("<p>Wrong - Try again</p>");
						}
					};
				qrcode.decode(target.src);
			};
			image.render($("#cafqr")[0], {
				height: 200,
				orientation: exif.Orientation
			});
		};
		reader.readAsBinaryString(file);
	});
	
//Alexanra park tasks
	//Setting score and saving completed Alexandra Park task 1
	$("#apform1").submit(function(e){
		e.preventDefault();
		var input = $("#aptxt1").val();
		if(input === "a"){
			localStorage.removeItem("apt1");
			localStorage.setItem("apt1","done");
			$("#apform1").html("Task completed").css("background","#0C0");
			totalScore += 5;
			$("#score").html(totalScore+' / '+possibleScore);
		}else{
			$("#apbtn1").html("Try again");
		}
	});
	//Setting score and saving completed Alexandra Park task 2
	$("#aptxt2").change(function (event) {
		var files = event.target.files, file;
		if (files && files.length > 0) {
			file = files[0];
		}
		var image = new MegaPixImage(file);
		var reader = new FileReader();
		reader.onloadend = function () {
			var exif = EXIF.readFromBinaryFile(new BinaryFile(reader.result));
			image.onrender = function(target) {
					qrcode.callback = function(data) {
						if(data === "alexandraparkqr"){
							localStorage.setItem("apt2","done");
							$("#apform2").html("Task completed").css("background","#0C0");
							totalScore += 10;
							$("#score").html(totalScore+' / '+possibleScore);
						} else {
							$("#apform2").append("<p>Wrong - Try again</p>");
						}
					};
				qrcode.decode(target.src);
			};
			image.render($("#apqr")[0], {
				height: 200,
				orientation: exif.Orientation
			});
		};
		reader.readAsBinaryString(file);
	});
	
//Hastings Pier
	//Setting score and saving completed Hastings Pier task 1
	$("#hpform1").submit(function(e){
		e.preventDefault();
		var input = $("#hptxt1").val();
		if(input === "a"){
			localStorage.removeItem("hpt1");
			localStorage.setItem("hpt1","done");
			$("#hpform1").html("Task completed").css("background","#0C0");
			totalScore += 5;
			$("#score").html(totalScore+' / '+possibleScore);
		}else{
			$("#hpbtn1").html("Try again");
		}
	});
	//Setting score and saving completed Hastings Pier task 2
	$("#hptxt2").change(function (event) {
		var files = event.target.files, file;
		if (files && files.length > 0) {
			file = files[0];
		}
		var image = new MegaPixImage(file);
		var reader = new FileReader();

		reader.onloadend = function () {
			var exif = EXIF.readFromBinaryFile(new BinaryFile(reader.result));
			
			image.onrender = function(target) {
					qrcode.callback = function(data) {
						if(data === "hastingspierqr"){
							localStorage.setItem("hpt2","done");
							$("#hpform2").html("Task completed").css("background","#0C0");
							totalScore += 10;
							$("#score").html(totalScore+' / '+possibleScore);
						} else {
							$("#hpform2").prepend("<p>Wrong - Try again</p>").css("color","#F00");
						}
					};
				qrcode.decode(target.src);
			};
			
			image.render($("#hpqr")[0], {
				height: 200,
				orientation: exif.Orientation
			});
		};
		reader.readAsBinaryString(file);
	});
	scorePerCent = (totalScore/75)*100;
	$("#score").html("<div id='points'>Score:"+totalScore+' / '+possibleScore+"</div>");
	$("#points").css("width",scorePerCent+"%").css("background","lime").css("height","inherit").css("text-align","center");
});