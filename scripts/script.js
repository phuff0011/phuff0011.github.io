/*
Student Name: Landon Huff
File Name: script.js
Current Date: 04/11/2024
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var headshot = document.getElementById("headshot");
	if (menu.style.display === "block" && headshot.style.display === "none") {
		menu.style.display = "none";
		headshot.style.display = "block";
	} else {
		menu.style.display = "block";
		headshot.style.display = "none";
	}
}	