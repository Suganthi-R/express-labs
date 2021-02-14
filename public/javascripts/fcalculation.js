

function finterest() {
	let n = parseFloat(document.getElementById('noofperiods').value); //no of periods in year
	let a = parseFloat(document.getElementById('amount').value);
	let r = parseFloat(document.getElementById('rate').value);  // rate in percentage
	let re= parseFloat(document.getElementById('result1').value);


	let z = n / 12; // no of periods in months
	let y = (r / 100); // rate
	// a  starting amount  ; y rate ;   d deposit value  ; z no of periods.


	if (validate(a, y, z)) {
		var x = (a * (1 + (y * n)))

		document.getElementById('result1').value = tocurrency(x);
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
}

function validate(a, r, n) {

	// check amount field
	if ((!Number.isInteger(a) || a < 0)) {
		alert("Enter valid Amount");
		document.getElementById("amount").focus();
		return false;
	}

	//check rate field
	if (r < 0 || r == "") {
		alert("Enter valid rate");
		r.focus();
		return false;
	}

	if (!Number.isInteger(n) || n < 0 || n == {}) {
		alert("Enter valid no of periods");
		document.getElementById("noofperiods").focus();
		return false;
	}
	return true;
}



