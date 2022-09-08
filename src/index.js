import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import {UserContextProvider} from "./userContext";
import JoinRoom from "./pages/JoinRoom";
import CreateRoom from "./pages/CreateRoom";
import MyRooms from "./pages/MyRooms";
import RoomDetail from "./pages/RoomDetail";
import MyRequests from "./pages/MyRequests";
import InviteMember from "./pages/InviteMember";
import RoomRequests from "./pages/RoomRequests";
import MyInvitations from "./pages/MyInvitations";
import RoomInvites from "./pages/RoomInvites";
import Notifications from "./pages/Notifications";
import CreateBoard from "./pages/CreateRoom";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<UserContextProvider>
			<Routes>
				<Route path={'login'} element={<Login/>}/>
				<Route path={'register'} element={<Register/>}/>
				<Route path={'dashboard'} element={<Dashboard/>}>
					<Route path={'profile'} element={<Profile/>}/>
					<Route path={'activity'} element={<Activity/>}/>
					<Route path={'settings'} element={<Settings/>}/>
				</Route>

				<Route path={'create-board'} element={<CreateBoard/>}/>
				<Route path={'join-room'} element={<JoinRoom/>}/>
				<Route path={'boards'} element={<MyRooms/>}/>
				<Route path={'my-requests'} element={<MyRequests/>}/>
				<Route path={'my-invitations'} element={<MyInvitations/>}/>
				<Route path={'invite'} element={<InviteMember/>}/>
				<Route path={'notifications'} element={<Notifications/>}/>
				<Route path={'room/:id'} element={<RoomDetail/>}/>
				<Route path={'room/:id/:requestString/requests'} element={<RoomRequests/>}/>
				<Route path={'room/:id/:requestString/invites'} element={<RoomInvites/>}/>
				<Route index element={<App/>}/>
			</Routes>
		</UserContextProvider>
	</BrowserRouter>,
);
