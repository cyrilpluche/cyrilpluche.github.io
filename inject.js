$(document).ready(function(){
	document.getElementById("vauban-structurer").style["display"] = "none";
	$('#vauban-structurer').load("https://cyrilpluche.github.io/");
	setTimeout(function(){
		document.getElementById("vauban-structurer").style["display"] = "block";
		let header = document.head.innerHTML

		header = header.replace(`<title>vauban-static</title>`)
		header = header.replace(`<link data-n-head="1"rel="icon"type="imagex-icon"href="favicon.ico">`)
		header = header.replace(`<meta data-n-head="1" charset="utf-8">`)
		header = header.replace(`<meta data-n-head="1" name="viewport" content="width=device-width initial-scale=1">`)
		header = header.replace(`<meta data-n-head="1" data-hid="description" name="description" content="static components of vauban">`)
		document.head.innerHTML = header
	},1500)  
});