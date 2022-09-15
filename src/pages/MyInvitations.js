import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Navigate} from "react-router-dom";
import getInvites from "../apiCalls/getInvites";
import status from "../utils/checkStatus";
import handleInvite from "../utils/handleInvite";

function MyInvitations(props) {
	const {isAuthenticated} = useContext(userContext)
	const [invites, setInvites] = useState([]);

	useEffect(() => {
		getInvites(setInvites)
	}, []);

	if (isAuthenticated) {

		return (
			<div>
				<p>
					My invitations
				</p>
				{invites.length !== 0 && invites.map(invite => {
					return (
						<div>
							<p>
								{invite.from_room.name} invites you to join
							</p>
							<p>
								{
									invite.status !== 'p' && status(invite.status)
								}
							</p>
							{
								invite.status === 'p' &&
								<div>
									<button onClick={e => handleInvite(e, 'accept', invite)}>Accept</button>
									<button onClick={e => handleInvite(e, 'reject', invite)}>Reject</button>
								</div>}
						</div>
					)
				})}

			</div>

		);
	} else {
		return (
			<Navigate to={'/login'}/>
		)
	}
}

export default MyInvitations;