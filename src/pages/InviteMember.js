import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useLocation, useParams} from "react-router-dom";
import handleInviteMember from "../utils/handleInviteMember";
import {userContext} from "../userContext";
import getRoomInvites from "../apiCalls/getRoomInvites";
import status from "../utils/checkStatus";

function InviteMember() {
	const location = useLocation()
	const {id} = useParams()
	const {requestString} = location.state
	const [username, setUsername] = useState('');
	const {isAuthenticated} = useContext(userContext)
	const [roomInvites, setRoomInvites] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault()
		await handleInviteMember(username, requestString)
		await getRoomInvites(setRoomInvites, id)
	}

	useEffect(() => {
		getRoomInvites(setRoomInvites, id)
	}, []);

	if (isAuthenticated) {
		return (
			<div className={'col-span-4'}>
				<form className=" w-1/3 m-auto py-16" onSubmit={e => handleSubmit(e)}>
					<h3 className={'m-4 text-3xl text-center'}>Send Invitation</h3>
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
				{roomInvites.status === 200 && Object.keys(roomInvites).length !== 0 &&
						<div className={'grid grid-cols-5'}>
							{Object.keys(roomInvites.data).length !== 0 ? roomInvites.data.map(invite => {
									return (
										<div
											className="w-11/12 h-fit m-auto max-w-sm bg-gray-100 py-5 bg-white rounded-lg border border-gray-200 shadow-md">
											<div className="flex flex-col items-center">
												<p className="text-sm flex text-gray-500 dark:text-gray-400">Invitation sent
													to {invite.for_user.username}
												</p>
												<p className={`text-sm flex text-gray-500 font-bold 
													${invite.status === 'a' && 'text-green-700'}
													${invite.status === 'r' && 'text-red-700'}
													${invite.status === 'p' && 'text-gray-500'}
													`}>
													{status(invite.status)}
												</p>
											</div>
										</div>
									)
								}) :
								<div className={'col-span-5 m-auto'}>
									No Invites
								</div>}
						</div>
				}
			</div>
		)
	} else {
		return (
			<Navigate to={'/boards/'}/>
		)
	}
}

export default InviteMember;