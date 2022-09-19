const taskStatus = (statusChar) => {
	switch (statusChar) {
		case 'a':
			return 'Assigning'
		case 'd':
			return "Done"
		case 'dg':
			return 'Doing'
		case 's':
			return 'Stuck'
		case 't':
			return 'Testing'
	}
}

export default taskStatus;