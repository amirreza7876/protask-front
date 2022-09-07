import React, {useContext} from 'react';
import {userContext} from "../userContext";
import {Link, Navigate} from "react-router-dom";

function Dashboard() {
	const {isAuthenticated} = useContext(userContext)
	if (isAuthenticated) {
		return (
			<div
				className="w-48 text-sm font-medium rounded-md text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				<Link to={'/'}
					  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-500">
					Home
				</Link>
				<Link to={'/create-room'}
					  className="block py-2 px-4 w-full text-white bg-blue-400 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
					Create room
				</Link>
				<Link to={'/join-room'}
					  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
					JoinRoom
				</Link>
				<Link to={'/my-rooms'}
					  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
					My rooms
				</Link>
				<Link to={'/my-requests'}
					  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
					Join Requests
				</Link>
				<Link to={'/my-invitations'}
					  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
					Join Invites
				</Link>
			</div>
		)
			;
	} else {
		return (
			<Navigate to={'/login'}/>
		)
	}
}

export default Dashboard;