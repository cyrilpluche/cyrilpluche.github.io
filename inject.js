$(document).ready(function(){
	document.getElementById("vauban-structurer").style["display"] = "none";
	// $('#vauban-structurer').load("https://cyrilpluche.github.io/");
	$.get("https://cyrilpluche.github.io/", function( html ) {
		// my_var contains whatever that request returned
		let structurer = html 
		// structurer = structurer.replace(`<title>vauban-static</title>`)
		// structurer = structurer.replace(`<link data-n-head="1"rel="icon"type="imagex-icon"href="favicon.ico">`)
		// structurer = structurer.replace(`<meta data-n-head="1" charset="utf-8">`)
		// structurer = structurer.replace(`<meta data-n-head="1" name="viewport" content="width=device-width initial-scale=1">`)
		// structurer = structurer.replace(`<meta data-n-head="1" data-hid="description" name="description" content="static components of vauban">`)
		console.log(structurer)
		document.getElementById("vauban-structurer").innerHTML = structurer
		document.getElementById("vauban-structurer").style["display"] = "block";
	});
	// setTimeout(function(){
	// 	document.getElementById("vauban-structurer").style["display"] = "block";
	// },1500)  
});