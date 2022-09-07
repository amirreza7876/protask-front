import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Navigate} from "react-router-dom";
import getInvites from "../apiCalls/getInvites";

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
							<button>
								Accept
							</button>
							<button>
								Reject
							</button>
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