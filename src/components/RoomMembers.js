import React from 'react';
import {MinusCircleIcon} from "@heroicons/react/20/solid";
import handleRemoveUser from "../apiCalls/handleRemoveUser";

function RoomMembers({showMembers, roomDetail, setShowDeleteUser, setUserDataToDelete}) {
	const setDataAndShowModal = (event, username) => {
		event.preventDefault()
		setUserDataToDelete({username, roomId: roomDetail.data.id})
		setShowDeleteUser(true)
	}
	return (
		showMembers ?
			roomDetail.data.members.map(member => (<li key={member.id}
													   className={'flex justify-between w-full bg-indigo-600 hover:bg-indigo-500 pl-3'}>
				<div className={'flex py-3'}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round"
							  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
					</svg>
					<p className={'ml-4'}>
						{member.username}
					</p>
				</div>
				{member.username!== roomDetail.data.leader.username&&
					<div className={'flex p-3 hover:text-red-600 hover:cursor-pointer'}
						 onClick={(e) => setDataAndShowModal(e, member.username)}>
						< MinusCircleIcon className={'h-full w-6'}/>
					</div>
				}
			</li>))
			: null
	)
}

export default RoomMembers
;