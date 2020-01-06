$(document).ready(function(){
	document.getElementById("vauban-structurer").style["display"] = "none";
	$('#vauban-structurer').load("https://cyrilpluche.github.io/");
	setTimeout(function(){
		document.getElementById("vauban-structurer").style["display"] = "block";
	},1500)  
});