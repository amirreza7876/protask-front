import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Link, Navigate} from "react-router-dom";
import getRooms from "../apiCalls/getRooms";
import MainLayout from "../layouts/MainLayout";
import {UsersIcon} from "@heroicons/react/20/solid";


function MyRooms() {
	const [rooms, setRooms] = useState([]);
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getRooms(setRooms)
	}, []);

	if (isAuthenticated) {
		return (
			<MainLayout>
				<div className={'grid-cols-4 grid gap-5 mt-3 max-w-6xl m-auto'}>
					{rooms.length !== 0 && rooms.map(room => (
						<div key={room.id}
							 className={'flex mb-3 h-32 relative align-middle items-center bg-slate-100'}>
							{room.is_owner &&
								<span className={'absolute -top-2 -right-2 rounded-md bg-[#4f46e5] text-white p-1'}>Owner</span>
							}
							<div className={'w-11/12 m-auto h-4/5'}>
								<div className={'flex'}>
									<div
										className={'align-middle bg-purple-300 p-2 w-12 h-12 leading-loose items-center text-center rounded-full self-center justify-center items-center'}>
										<p>
											{room.name[0].toUpperCase()}
										</p>
									</div>
									<Link className={'self-center ml-4'} to={`/room/${room.id}`}>
										{room.name}
									</Link>
								</div>
								<div>
									<span className={'flex ml-16'}><UsersIcon
										className={'self-center w-4 h-4'}/> {room.members.length}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</MainLayout>);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default MyRooms;