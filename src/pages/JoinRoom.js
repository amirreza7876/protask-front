import React, {useState} from 'react';
import searchForRoom from "../utils/searchForRoom";

function JoinRoom(props) {
	const [roomString, setRoomString] = useState('');
	return (
		<div>
			Join Room
			<form onSubmit={e => searchForRoom(e, roomString)}>
				<input type="text" name="" value={roomString} onChange={e => setRoomString(e.target.value)} id=""/>
				<input type="submit" value={'Send Request'} name="" id=""/>
			</form>
		</div>
	);
}

export default JoinRoom;