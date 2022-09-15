import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {InboxArrowDownIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";
import getInvites from "../apiCalls/getInvites";
import status from "../utils/checkStatus";
import handleInvite from "../utils/handleInvite";
import MyInvitesList from "../components/MyInvitesList";
import getRequests from "../apiCalls/getRequests";

function Notifications() {
	const [invites, setInvites] = useState([]);
	const [showInvites, setShowInvites] = useState(false);
	const [showRequests, setShowRequests] = useState(false);
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		getInvites(setInvites)
		getRequests(setRequests)

	}, []);

	return (
		<div className={'w-1/3 m-auto mt-4'}>
			<div className={'flex hover:bg-slate-100'}>
				<PaperAirplaneIcon className={'h-6 w-6 self-center'}/>
				<button className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer text-left "
						onClick={() => setShowRequests(!showRequests)}>
					Requests
				</button>
			</div>
			{/*TODO move to another file*/}
			<div className={'grid grid-cols-2 gap-3'}>
				{showRequests &&
					requests.length !== 0 && requests.map(request => {
						return (
							<div
								className="w-full h-fit my-3 max-w-sm bg-gray-100 py-5 bg-white rounded-lg border border-gray-200 shadow-md m-auto">
								<div className="flex flex-col items-center space-y-3">
									<p className="text-sm flex text-gray-500 dark:text-gray-400">Request has been sent
										to {request.for_room.name}
									</p>
									<p className={`text-sm flex text-gray-500 font-bold 
											${request.status === 'a' && 'text-green-700'}
											${request.status === 'r' && 'text-red-700'}
											${request.status === 'r' && 'text-gray-700'}
											`}>
										{status(request.status)}
									</p>
									{request.status === 'a' && request.accepted &&
										<Link className={'bg-blue-500 text-white p-3 rounded-lg'}
											  to={`/room/${request.for_room.id}`}>Go to Board</Link>
									}
								</div>
							</div>
						)
					})
				}
			</div>
			<div className={'flex hover:bg-slate-100'}>
				<InboxArrowDownIcon className={'self-center h-6 w-6'}/>
				<button className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer text-left"
						onClick={() => setShowInvites(!showInvites)}>
					Invitations
				</button>
			</div>
			<MyInvitesList showInvites={showInvites} invites={invites}/>
		</div>
	);
}

export default Notifications;