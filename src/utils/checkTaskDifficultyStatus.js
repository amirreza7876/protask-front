const difficultyStatus = (character) => {
	switch (character) {
		case 'e':
			return 'Easy'
			break
		case 'el':
			return "Elementary"
			break
		case 'm':
			return 'Medium'
			break
		case 'h':
			return 'Hard'
			break
	}
}
export default difficultyStatus;