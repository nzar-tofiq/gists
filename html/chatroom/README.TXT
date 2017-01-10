Project name: chatroom
Version: 2014-01-16
Authors: Nzar Tofiq, Owen Ayres, Mark Freeman
Objective-Description: A HTML5 client that implements the functionality identified below using AJAX. focusing on developing client side code.
	A: User registration (register.php) User registration requires a firstname, surname, chosen username and password. Users should be required to enter their password twice and all fields must not empty. This may use a combination of JavaScript and HTML5 form validation.
	B: User log in(login.php) A log in form that allows already registered users to sign in by entering thier username and password If the usernname and password are correct the user can access to the chatroom.
	C: Chatroom(channel.php) Once logged in users should be able to see the current messages in the chatroom this should update at regular intervals.
	D: Send message (send.php) A form that allows logged users to send a message to the chatroom. The message must detail the sender (the currently logged in user) and the message itself.
	E: User list (list.php) Display a list of currently logged in users, which should update at regular intervals. Users are �seen� each time they request the current messages from the chatroom. The list.php script will only return users who have been seen in the last 10 minutes.