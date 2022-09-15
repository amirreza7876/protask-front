const handleLogout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('token')
	window.location.reload()
}

export default handleLogout