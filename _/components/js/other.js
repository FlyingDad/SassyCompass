function other(){
	var h1 = document.querySelector('#header');
	h1.textContent = "Changed the header";
	console.log("other");
	return "Other file";
}

other();