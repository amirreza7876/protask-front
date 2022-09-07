import React, {useState} from 'react';
import searchForRoom from "../utils/searchForRoom";

function JoinRoom(props) {
	const [requestString, setRequestString] = useState('');
	return (
		<div>
			Join Room
			<form onSubmit={e => searchForRoom(e, requestString)}>
				<input type="text" name="" value={requestString} onChange={e => setRequestString(e.target.value)} id=""/>
				<input type="submit" value={'Send Request'} name="" id=""/>
			</form>
		</div>
	);
}

export default JoinRoom;