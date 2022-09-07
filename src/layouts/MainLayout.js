import React from 'react';
import NavigationBar from "../components/NavigationBar";

function MainLayout({children}) {
	return (
		<>
			<NavigationBar/>
			{children}
		</>
	);
}

export default MainLayout;