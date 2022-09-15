import React, {useState} from 'react';
import handleInvite from "../utils/handleInvite";
import {useLocation} from "react-router-dom";
import handleInviteMember from "../utils/handleInviteMember";
import MainLayout from "../layouts/MainLayout";

function InviteMember(props) {
	const location = useLocation()
	const {requestString} = location.state
	const [username, setUsername] = useState('');
	return (
		// <div>
		// 	<form onSubmit={e => handleInviteMember(e, username, requestString)}>
		// 		<input type="text" value={username} placeholder={'Username or Email'}
		// 			   onChange={e => setUsername(e.target.value)} name="" id=""/>
		// 		<input type="submit" value={'Invite'} name="" id=""/>
		// 	</form>
		// </div>
		<div className={'col-span-4'}>
			<form className="m-auto w-full max-w-sm" onSubmit={e => handleInviteMember(e, username, requestString)}>
				<div className="flex items-center border-b border-[#4f46e5] py-2">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text" value={username} placeholder={'Username or Email'}
						onChange={e => setUsername(e.target.value)}
						aria-label="Full name"/>
					<button
						className="flex-shrink-0 bg-[#4f46e5] hover:bg-[#2e2990] text-md text-white py-1 px-2 rounded"
						type="submit">
						Invite
					</button>
				</div>
			</form>
		</div>
	);
}

export default InviteMember;