var dropdown = document.getElementById("dropdown1");
var dropdownbackground = document.getElementById("dropdownbackground");
var dropdown2 = document.getElementById("dropdown2");
var dropdownbackground2 = document.getElementById("dropdownbackground2");
dropdown.style.display = "none";
dropdown2.style.display = "none";
dropdownbackground.style.display = "none";
dropdownbackground2.style.display = "none";

function togglemenu(){
	if (dropdown.style.display == "none"){
		dropdownbackground.style.display = "block";
		dropdown1.style.display = "block";
	}else{
		dropdownbackground.style.display = "none";
		dropdown1.style.display = "none";
	}
}

function togglemenu2(){
	if (dropdown2.style.display == "none"){
		dropdownbackground2.style.display = "block";
		dropdown2.style.display = "block";
	}else{
		dropdownbackground2.style.display = "none";
		dropdown2.style.display = "none";
	}
}