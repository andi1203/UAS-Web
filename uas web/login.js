function Login() {
	// body...

	var username = document.getElementById('inputEmail').value;
	var pass	 = document.getElementById('inputPassword').value;

	if (username == "habibullah@gmail.com" && pass == "12345") {
		alert("SELAMAT DATANG");
		window.location = "form.html";
		return false;
	} else {
		alert("Username atau Password salah");
	}
}