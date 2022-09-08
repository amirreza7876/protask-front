import React, {useState} from 'react';
import api from "../api";
import {useNavigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
		<MainLayout>
			<div>
				<form className="m-auto w-full max-w-sm" onSubmit={e => handleCreateRoom(e)}>
					<div className="flex items-center border-b border-[#4f46e5] py-2">
						<input
							className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text" value={roomName} onChange={e => setRoomName(e.target.value)}
							placeholder="Name The Board"
							aria-label="Full name"/>
						<button
							className="flex-shrink-0 bg-[#4f46e5] hover:bg-[#2e2990] text-md text-white py-1 px-2 rounded"
							type="submit">
							Create
						</button>
					</div>
				</form>
			</div>
		</MainLayout>
	);
}

export default CreateRoom;