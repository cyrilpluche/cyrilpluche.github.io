$(document).ready(function(){
	document.getElementById("vauban-structurer").style["display"] = "none";
	const url = "https://cyrilpluche.github.io"
	// $('#vauban-structurer').load("https://cyrilpluche.github.io/");
	$.get(url, function( html ) {
		// my_var contains whatever that request returned
		let structurer = html.split("<body>")[1].split("</body>")[0] 

		let header = html.split("<head>")[1].split("</head>")[0]
		// header = header.replace(`<title>vauban-static</title>`)
		// header = header.replace(`<link data-n-head="1"rel="icon"type="imagex-icon"href="favicon.ico">`)
		// header = header.replace(`<meta data-n-head="1" charset="utf-8">`)
		// header = header.replace(`<meta data-n-head="1" name="viewport" content="width=device-width initial-scale=1">`)
		// header = header.replace(`<meta data-n-head="1" data-hid="description" name="description" content="static components of vauban">`)
		console.log(header) 

		document.getElementsByClassName("head").innerHTML += header
		document.getElementById("vauban-structurer").innerHTML = structurer
		document.getElementById("vauban-structurer").style["display"] = "block";
	});
	// setTimeout(function(){
	// 	document.getElementById("vauban-structurer").style["display"] = "block";
	// },1500)  
});