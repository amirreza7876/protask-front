import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import {UserContextProvider} from "./userContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<UserContextProvider>
			<Routes>
				<Route path={'login'} element={<Login/>}/>
				<Route path={'register'} element={<Register/>}/>
				<Route path={'dashboard'} element={<Dashboard/>}/>
				<Route index element={<App/>}/>
			</Routes>
		</UserContextProvider>
	</BrowserRouter>,
);
