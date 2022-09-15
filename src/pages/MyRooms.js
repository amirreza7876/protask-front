import React, {Fragment, useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Link, Navigate} from "react-router-dom";
import getRooms from "../apiCalls/getRooms";
import MainLayout from "../layouts/MainLayout";
import {
	AdjustmentsHorizontalIcon,
	AtSymbolIcon,
	Cog6ToothIcon,
	EllipsisHorizontalIcon,
	FingerPrintIcon,
	HashtagIcon,
	MegaphoneIcon,
	PencilIcon,
} from "@heroicons/react/20/solid";
import {Popover, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import AddTagModal from "../components/modals/AddTagModal";
import ChangeStatusModal from "../components/modals/ChangeStatusModal";
import RoomCard from "../components/RoomCard";


function MyRooms() {
	const [rooms, setRooms] = useState([]);
	const {isAuthenticated} = useContext(userContext)
	// const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		getRooms(setRooms)
	}, []);

	if (isAuthenticated) {
		return (<MainLayout>
			<div className={'grid-cols-4 grid gap-5 mt-10 max-w-6xl m-auto'}>
				{/*TODO move this to another file*/}
				{rooms.length !== 0 && rooms.map(room => (
					<RoomCard room={room}/>
				))}
			</div>
		</MainLayout>);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default MyRooms;