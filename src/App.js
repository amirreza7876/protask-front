import NavigationBar from "./components/NavigationBar";
import {useEffect, useRef, useState} from "react";
import getUserName from "./apiCalls/getUserName";
import MainLayout from "./layouts/MainLayout";

function App() {
	return (
		<div className="App">
			<MainLayout/>
		</div>
	);
}

export default App;
