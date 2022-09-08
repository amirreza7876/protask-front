import React from 'react';
import {Link} from "react-router-dom";

function Notifications(props) {
	return (
		<div>
			<Link to={'/my-requests'}
				  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
				Join Requests
			</Link>
			<Link to={'/my-invitations'}
				  className="block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-500">
				Join Invites
			</Link>
		</div>
	);
}

export default Notifications;