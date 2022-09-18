import api from "../api";
import getRooms from "./getRooms";

const handleLeaveBoard = async (boardId, setRooms, setShowModal) => {
	await api.patch(`/rooms/leave/${boardId}`)
	await getRooms(setRooms)
	setShowModal(false)
}
export default handleLeaveBoard