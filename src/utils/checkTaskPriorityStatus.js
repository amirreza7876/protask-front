const priorityStatus = (statusChar) => {
	switch (statusChar) {
		case 'me':
			return 'Medium'
		case 'ma':
			return "Major"
		case 'l':
			return 'Low'
		case 'sh':
			return 'Show Stopper'
	}
}

export default priorityStatus;