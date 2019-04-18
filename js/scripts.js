$("button").click(function(e) {
	let size = e.currentTarget.getAttribute("id");
	let textbox = $("#font");
	if (size === "twentyfour"){
		textbox.css("font-size", "24pt");
	}
	else if (size === "thirtysix"){
		textbox.css("font-size", "36pt");
	}
	else if (size === "fourtyeight"){
		textbox.css("font-size", "48pt");
	}
	else{
		textbox.css("font-size", "72pt");
	}
});