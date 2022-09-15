import React from 'react';
import handleInvite from "../utils/handleInvite";
import status from "../utils/checkStatus";

function MyInvitesList({showInvites, invites}) {
	return (
		<div className={'grid grid-cols-2 gap-3'}>
			{showInvites &&
				invites.length !== 0 && invites.map(invite => {
					return (
						<div
							className="w-full h-fit my-3 max-w-sm bg-gray-100 py-5 bg-white rounded-lg border border-gray-200 shadow-md m-auto">
							<div className="flex flex-col items-center">
								<p className="text-sm flex text-gray-500 dark:text-gray-400">{invite.from_room.name} wants
									you to join.
								</p>
								{
									invite.status === 'p' &&
									<div className={' space-x-3'}>
										<button
											className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
											onClick={e => handleInvite(e, 'accept', invite)}>Accept
										</button>
										<button
											className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200"
											onClick={e => handleInvite(e, 'reject', invite)}>Reject
										</button>
									</div>
								}
								{
									invite.status !== 'p' &&
									<p className={`text-sm flex text-gray-500 font-bold 
											${invite.status === 'a' && 'text-green-700'}
											${invite.status === 'r' && 'text-red-700'}
											`}>
										{status(invite.status)}
									</p>
								}
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default MyInvitesList;