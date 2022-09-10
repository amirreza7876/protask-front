export default function ValidateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,10})+$/.test(email)) {
		return true
	}
	return false
}
