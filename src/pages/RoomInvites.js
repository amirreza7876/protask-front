// import React, {useContext, useEffect, useState} from 'react';
// import {Navigate, useParams} from "react-router-dom";
// import {userContext} from "../userContext";
// import status from "../utils/checkStatus";
// import getRoomInvites from "../apiCalls/getRoomInvites";
//
// function RoomInvites(props) {
// 	const {id} = useParams()
// 	const [roomInvites, setRoomInvites] = useState({});
// 	const {isAuthenticated} = useContext(userContext)
//
// 	useEffect(() => {
// 		getRoomInvites(setRoomInvites, id)
// 	}, []);
//
// 	if (isAuthenticated) {
// 		if (Object.keys(roomInvites).length !== 0) {
// 			if (roomInvites.status === 200) {
// 				return (
// 					<div className={'col-span-4'}>
// 						<div className={'grid grid-cols-4'}>
// 							{Object.keys(roomInvites.data).length!==0?roomInvites.data.map(invite => {
// 								return (
// 									<div
// 										className="w-full h-fit m-auto m-3 max-w-sm bg-gray-100 py-5 bg-white rounded-lg border border-gray-200 shadow-md">
// 										<div className="flex flex-col items-center">
// 											<p className="text-sm flex text-gray-500 dark:text-gray-400">Invitation sent
// 												to {invite.for_user.username}
// 											</p>
// 											<p className={`text-sm flex text-gray-500 font-bold
// 											${invite.status === 'a' && 'text-green-700'}
// 											${invite.status === 'r' && 'text-red-700'}
// 											${invite.status === 'p' && 'text-gray-500'}
// 											`}>
// 												{status(invite.status)}
// 											</p>
// 										</div>
// 									</div>
// 								)
// 							}):
// 							<div className={'col-span-4 m-auto'}>
// 								No Invites
// 							</div>}
// 						</div>
// 					</div>
// 				);
// 			} else {
// 				return (
// 					<Navigate to={'/boards/'}/>
// 				)
// 			}
// 		}
// 	} else {
// 		return (<Navigate to={'/login'}/>)
// 	}
// }
//
// export default RoomInvites;