

function interest()
{    
	
	let p = parseFloat(document.getElementById('principal amount').value);
	let r = parseFloat(document.getElementById('rate of interest').value);
	let n = parseFloat(document.getElementById('no of pay').value);
	let a = parseFloat(document.getElementById('result').value);
	let z=n*12;
	let y=(r/100)/12;


	if(validate(p,y,z)){
	var x = p * (y * Math.pow(1 + y, z)) / (Math.pow(1 + y, z) - 1)

	document.getElementById('result').value = tocurrency(x);
	return true;
	}




function tocurrency(passedVal) {
	dollarsym = "$ "
	wd = "w"


	var tempnum = passedVal.toString()
	for (i = 0; i < tempnum.length; i++) {
		if (tempnum.charAt(i) == ".") {
			wd = "d"
			break
		}
	}
	if (wd == "w") {
		return dollarsym + tempnum + ".00"
	}
	else {
		if (tempnum.charAt(tempnum.length - 2) == ".") {
			return dollarsym + tempnum + "0"
		}
		else {
			tempnum = Math.round(tempnum * 100) / 100
			return dollarsym + tempnum
		}
	}

}

function validate(p,y,z) {

	// check amount field
	if ((!Number.isInteger(p) || p < 0 || p == "")) {
		alert("Enter valid Principal Amount");
		document.getElementById("principal amount").focus();
		return false;
	}

	//check rate field
	if ( y < 0 || y == "") {
		alert("Enter valid rate");
		r.focus()
		return false;
	}
	// check no of terms field
	if (!Number.isInteger(n) || n < 0 || n == {}) {
		alert("Enter valid no of terms");
		n.focus()
		return false;
	}
	return true;
}


}
