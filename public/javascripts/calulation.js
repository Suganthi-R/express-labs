

function Amortization()
{
	let p = parseFloat(document.getElementById('principal amount').value);
	let r = parseFloat(document.getElementById('rate of interest').value);
	let n = parseFloat(document.getElementById('no of pay').value);
	let a = parseFloat(document.getElementById('result').value);
	let z=n*12;
	let y=(r/100)/12;


	if(validate(p,y,z)){
	var x = p * (y * Math.pow(1 + y, z)) / (Math.pow(1 + y, z) - 1)

	document.getElementById('result').value= tocurrency(x);
	return true;
	}
}


function futurevalue() {
	var n = parseFloat(document.getElementById('noofperiods').value); //no of periods in year
	var a = parseFloat(document.getElementById('amount').value);
	var r = parseFloat(document.getElementById('rate').value);  // rate in percentage
let z = n * 12; // no of periods in months
	let y = (r / 100); // rate
	// a  starting amount  ; y rate ;   d deposit value  ; z no of periods.


	if (validate(a, y, n)) {
		var x = (a *(1+(z*y)));
		var i= Math.round(x * 100) / 100;
		document.getElementById('result1').value = tocurrency(i);
		
		return true;
	}
}

function cagrcalci() {
	var n = parseFloat(document.getElementById('noperiods').value); //no of periods in year
	var b = parseFloat(document.getElementById('bvalue').value);
	var e= parseFloat(document.getElementById('evalue').value);  // rate in percentage
let z = 1/n; // no of periods in months
// rate
	// a  starting amount  ; y rate ;   d deposit value  ; z no of periods.


	if (validate(b, e, n)) {
		var x = (e/b);
		var g=(Math.pow(x,z))-1;
		var h= Math.round(g * 10000) / 100;
		document.getElementById('result2').value = tocurrency(h);
		return true;
	}
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

function validate(p,y,n) {

	// check amount field
	if ((!Number.isInteger(p) || p < 0 || p == "")) {
		alert("Enter valid Principal Amount or Beginning amount");
		document.getElementById("principal amount").focus();
		return false;
	}

	//check rate field
	if ( y < 0 || y == "") {
		alert("Enter valid rate or end value");
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



