$(document).ready(function(){

	// const originTitle = document.getElementsByTagName("head").innerHTML
	// console.log({originTitle})
	// originTitle = originTitle.split("<title>")[1].split("</title>")[0]
	// console.log({originTitle}) 

	document.getElementById("vauban-structurer").style["display"] = "none";
	const url = "https://cyrilpluche.github.io"
	$('#vauban-structurer').load(url);

	let header = document.getElementsByTagName("head").innerHTML
	header = header.replace(`<title>vauban-static</title>`, "Vauban - Next-gen fund structuring and administration")

	console.log({header})
	document.getElementsByTagName("head").innerHTML = header

	document.getElementById("vauban-structurer").style["display"] = "block";


 
	// $.get(url, function( html ) {
	// 	// my_var contains whatever that request returned
	// 	let structurer = html.split("<body>")[1].split("</body>")[0] 

	// 	let header = html.split("<head>")[1].split("</head>")[0]
	// 	// header = header.replace(`<title>vauban-static</title>`)
	// 	// header = header.replace(`<link data-n-head="1"rel="icon"type="imagex-icon"href="favicon.ico">`)
	// 	// header = header.replace(`<meta data-n-head="1" charset="utf-8">`)
	// 	// header = header.replace(`<meta data-n-head="1" name="viewport" content="width=device-width initial-scale=1">`)
	// 	// header = header.replace(`<meta data-n-head="1" data-hid="description" name="description" content="static components of vauban">`)
	// 	console.log(header) 
	// 	console.log("skuu")
	// 	document.getElementsByTagName("head").innerHTML += header
	// 	console.log(document.getElementsByTagName("head").innerHTML)
	// 	document.getElementById("vauban-structurer").innerHTML = structurer
	// 	document.getElementById("vauban-structurer").style["display"] = "block";
	// });
	// setTimeout(function(){
	// 	document.getElementById("vauban-structurer").style["display"] = "block";
	// },1500)  
});