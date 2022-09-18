import api from "../api";
import getRoomDetail from "../apiCalls/getRoomDetail";

const handleRemoveUser = async (username, id, setRoomDetail, setShowModal) => {
	const response = await api.patch(`/rooms/remove-member/${id}`, {username}).then(res => res.data)
	await getRoomDetail(setRoomDetail, id)
	setShowModal(false)
	// console.log(response)

}

export default handleRemoveUser;