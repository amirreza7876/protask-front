import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useLocation, useParams} from "react-router-dom";
import {userContext} from "../userContext";
import getRoomRequests from "../apiCalls/getRoomRequests";
import handleRequest from "../utils/handleRequest";
import status from "../utils/checkStatus";

function RoomRequests(props) {
	const {id, requestString} = useParams()
	const [roomRequests, setRoomRequests] = useState({});
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getRoomRequests(setRoomRequests, requestString, id)
	}, []);

	if (isAuthenticated) {
		if (Object.keys(roomRequests).length !== 0) {
			if (roomRequests.status === 200) {
				return (
					<div className={'col-span-4 mx-4'}>
						<div className={'grid grid-cols-4 gap-4 place-items-center'}>
							{Object.keys(roomRequests.data).length !== 0 ? roomRequests.data.map(request => (
									<div
										className="w-full h-fit m-auto m-3 max-w-sm bg-gray-100 py-5 bg-white rounded-lg border border-gray-200 shadow-md">
										<div className="flex flex-col items-center">
											<h5 className="mb-1 text-xl font-medium text-gray-900">{request.from_user.username}</h5>
											{/*<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>*/}
											{request.status !== 'p' && status(request.status)}
											{request.status === 'p' &&
												<div className="flex mt-2 space-x-3">
													<button onClick={e => handleRequest(e, 'accept', request)}
															className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">Accept
													</button>
													<button onClick={e => handleRequest(e, 'reject', request)}
															className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200">Reject
													</button>
												</div>
											}
										</div>
									</div>
								)) :
								<div className={'col-span-4'}>
									No Requests
								</div>}
						</div>
					</div>
				)
			} else {
				return (<Navigate to={'/boards/'}/>)
			}
		}

	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default RoomRequests;