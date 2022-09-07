import NavigationBar from "./components/NavigationBar";
import {useEffect, useRef, useState} from "react";
import getUserName from "./apiCalls/getUserName";

function App() {
	const [username, setUsername] = useState();

	useEffect(() => {
		getUserName(setUsername)
	}, []);

	return (
		<div className="App">
			Welcome {username}
			<NavigationBar/>
		</div>
	);
}

export default App;
