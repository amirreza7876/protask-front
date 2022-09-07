import React, {useState} from 'react';
import handleInvite from "../utils/handleInvite";
import {useLocation} from "react-router-dom";

function InviteMember(props) {
	const location = useLocation()
	const state = location.state
	const [username, setUsername] = useState('');
	return (
		<div>
			<form onSubmit={e => handleInvite(e)}>
				<input type="text" value={username} placeholder={'Username or Email'}
					   onChange={e => setUsername(e.target.value)} name="" id=""/>
				<input type="submit" value={'Invite'} name="" id=""/>
			</form>
		</div>
	);
}

export default InviteMember;