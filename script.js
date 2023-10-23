function validateRegister() {
	const form = document.forms['register'];
	const password = form['password'].value;
	const confirmPassword = form['confirmPassword'].value;
	if (password !== confirmPassword) {
		alert('Password and Confirm Password must be the same');
		return false;
	}
	return true;
}
