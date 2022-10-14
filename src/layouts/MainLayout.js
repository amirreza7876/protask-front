import React from 'react';
import NavigationBar from "../components/NavigationBar";

function MainLayout({children, className}) {
	return (
		<>
			<NavigationBar/>
			<div className={className}>
				{children}
			</div>
		</>
	);
}

export default MainLayout;