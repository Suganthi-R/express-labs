function display() {
	let amcalci=document.getElementById("AC");
	let fvcalci=document.getElementById("FV");
	let cagrcalci=document.getElementById("CR");
	let selected=document.getElementById("options");
	let value=selected.value;


	switch (value) {
		case "1":
			shown(amcalci);
            hiden(fvcalci);
            hiden(cagrcalci);
			
			break;
			case "2":
				shown(fvcalci);
				hiden(amcalci);
				hiden(cagrcalci);
				
				break;
				case "3":
					shown(cagrcalci);
					hiden(fvcalci);
					hiden(amcalci);
					
					break;
				
		default:
			break;
	}

function	shown(id){
id.style.display="";

	}

function hiden(id) {
	id.style.display="none";
}
}