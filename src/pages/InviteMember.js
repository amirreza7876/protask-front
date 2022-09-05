import React, {useState} from 'react';
import handleInvite from "../utils/handleInvite";

function InviteMember(props) {
	const [username, setUsername] = useState('');
	return (
		<div>
			<form onSubmit={e => handleInvite(e)}>
				<input type="text" value={username} onChange={e => setUsername(e.target.value)} name="" id=""/>
				<input type="submit" value={'Invite'} name="" id=""/>
			</form>
		</div>
	);
}

export default InviteMember;