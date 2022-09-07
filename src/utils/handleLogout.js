const handleLogout = () => {
	localStorage.removeItem('token')
	window.location.reload()
}

export default handleLogout