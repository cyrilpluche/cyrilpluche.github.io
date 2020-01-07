$(document).ready(function(){
	document.getElementById("vauban-structurer").style["display"] = "none";
	$('#vauban-structurer').load("https://cyrilpluche.github.io/");
	setTimeout(function(){
		document.getElementById("vauban-structurer").style["display"] = "block";
		let header = document.head.innerHTML
		document.head.innerHTML = header.replace(`
			<title>vauban-static</title><link data-n-head="1" rel="icon" type="image/x-icon" href="/favicon.ico"><meta data-n-head="1" charset="utf-8"><meta data-n-head="1" name="viewport" content="width=device-width, initial-scale=1"><meta data-n-head="1" data-hid="description" name="description" content="static components of vauban">
		`, "")
	},1500)  
});