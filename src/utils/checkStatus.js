const status = (statusChar) => {
	switch (statusChar) {
		case 'p':
			return 'Pending'
		case 'a':
			return "Accepted"
		case 'r':
			return 'Rejected'
	}
}

export default status;