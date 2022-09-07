import React, {useState} from 'react';
import api from "../api";
import {useNavigate} from "react-router-dom";

function CreateRoom(props) {
	const navigate = useNavigate()
	const [roomName, setRoomName] = useState('');
	const [requestString, setRequestString] = useState('');
	const [roomIsCreated, setRoomIsCreated] = useState(false);

	const handleCreateRoom = async (e) => {
		e.preventDefault()
		const response = await api.post('/rooms/create/', {'name': roomName})
		if (response.status === 200) {
			setRequestString(response.data.request_string)
			setRoomIsCreated(true)
		}
	}

	if (roomIsCreated) {
		navigate('/invite', {state: {status: "NEW_ROOM", requestString}})
	}

	return (
		<div>
			Create room
			<form onSubmit={e => handleCreateRoom(e)}>
				<input type="text" name="" value={roomName} onChange={e => setRoomName(e.target.value)} id=""/>
				<input type="submit" value={'Create Room'} name="" id=""/>
			</form>
		</div>
	);
}

export default CreateRoom;