import React from 'react';
import status from "../utils/checkStatus";
import {Link} from "react-router-dom";

function MyRequestList({showRequests, setRequests,requests}) {
	return (
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
										  to={`/room/${request.for_room.id}`}>Take me to board</Link>
								}
							</div>
						</div>
					)
				})
			}
		</div>);
}

export default MyRequestList;