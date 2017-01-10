/**
 * Encapsulates all variables and methods within the quiz "namespace". This is one good method of defining a namespace in JavaScript, [Addy Osmani]{@link http://addyosmani.com/blog/essential-js-namespacing/} goes through different appraoches. If the namespace exists then it's reused, if it's undefined then it's instantiated as an empty object literal.
 * @name quiz
 * @namespace
 */
var quiz = quiz === undefined ? {} : quiz;

/**
 * A variable to store the quiz
 * @type {Object}
 */
quiz.data = null;

/**
 * Checks if the current browser supports the local storage and geolocation APIs
 * @returns {Boolean}
 */
quiz.isSupportedDevice = function() {
	try {
		// Check for local storage API
		if("localStorage" in window && window["localStorage"] !== null) {
			localStorage.setItem("test", "test");
			localStorage.removeItem("test");
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
	return true;
};

/**
 * Saves the current quiz data stored in {@link quiz.data}
 */
quiz.save = function() {
	localStorage.setItem("quiz", JSON.stringify(quiz.data));
};

/**
 * Updates the HTML
 * @param {Object} task - The task to update
 */
quiz.update = function(task) {
	var input = $("#t" + task.id);
	var result = $("#t" + task.id + "_result");
	var solve = $("#t" + task.id + "_solve");
	
	if(task.completed) {
		result.html("Correct answer given in " + task.attempts + " attempts");
		input.textinput("disable");
		solve.button("disable");
		input.css({'background-color' : '#B0E57C'});
	} else {
		result.html("Attempted " + task.attempts + " times");
		input.css({"background-color" : "#FFAEAE"});
	}
	input.val(task.last);
};

/**
 * Check if the user has answered the text-based question correctly
 * @param {Object} task - The task to check the solution against
 */
quiz.check = function(task) {
	// Get the user entered value
	var input = $("#t" + task.id);
	task.last = input.val();
	
	// Decide if it's right
	if(task.last.toLowerCase() === task.solution) {
		task.completed = true;
	}
	
	// Update the stored data and then update the HTML
	task.attempts++;
	quiz.save();
	quiz.update(task);
};

/**
 * Creates and adds a new event handler to each solve button
 * @param {object} task - The task to check the solution against
 */
quiz.addSolveHandler = function(task) {
	$("#t" + task.id + "_solve").click(function () {
		quiz.check(task);
	});
};

/**
 * Initialize the HTML by using loading and applying the template to the quiz data.
 */
quiz.initialize = function() {
	var template, i, task, progress;
	
	$("#clearData").click(function() {
		localStorage.clear();
		location.reload();
	});
	
	// Compile the template and add it to the HTML
	template = Handlebars.compile($("#quiz-template").html());
	$("#content").html(template(quiz.data)).trigger("create");
	
	// Set up event handlers and update the display of each task
	for(i = 0; i < quiz.data.tasks.length; i++) {
		task = quiz.data.tasks[i];
		quiz.addSolveHandler(task);
		quiz.update(task);
	}
};

/**
 * Checks if the device is supported, telling the user if not, then loads quiz data before initialising the view. quiz data is either loaded from isolated storage or asynchronously loaded from JSON file (i.e. the first time the app runs).
 * @see {@link http://diveintohtml5.info/storage.html}
 */
quiz.play = function() {
	// Check if the device supports the features we need
	if(!quiz.isSupportedDevice()) {
		$("#content").html("Sorry, your device is not supported.");
		return;
	}
	
	// Load data and apply it to the template
	var data = localStorage.getItem("quiz");
	if(data !== null) {
		quiz.data = JSON.parse(data);
		quiz.initialize();
	} else {
		$.getJSON("quiz.json", function(data) {
			quiz.data = data;
			quiz.save();
			quiz.initialize();
		});
	}
};

$(document).ready(quiz.play);
