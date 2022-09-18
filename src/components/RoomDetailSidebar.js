import React, {useState} from 'react';
import {Bars3CenterLeftIcon, ChevronDownIcon, ChevronUpIcon, MinusCircleIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import DeleteUserModal from "./modals/DeleteUserModal";
import RoomMembers from "./RoomMembers";

function RoomDetailSidebar({roomDetail, setRoomDetail}) {
	const [showMembers, setShowMembers] = useState(false);
	const [showDeleteUser, setShowDeleteUser] = useState(false);
	const [userDataToDelete, setUserDataToDelete] = useState();

	return (<div className={'col-span-1 bg-slate-900 min-h-screen text-white'}>
		<DeleteUserModal setRoomDetail={setRoomDetail} showModal={showDeleteUser} setShowModal={setShowDeleteUser} userDataToDelete={userDataToDelete}/>
		<ul>
			<li className={'mt-3 ml-3'}>
				<h1 className={'font-extrabold text-3xl tracking-wd font-moon uppercase'}>
					{roomDetail.data.name}
				</h1>
			</li>
			<li className={'flex mt-3 pl-3 w-full'}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
					<path strokeLinecap="round" strokeLinejoin="round"
						  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
				</svg>
				<p className={'ml-4 font-bold text-xl first-letter:uppercase'}>Leader: {roomDetail.data.leader.username}</p>
			</li>
			<li className={'w-full mt-3 hover:bg-indigo-600'}>
				<Link to={`tasks`} className={'flex pl-3 py-3 w-full'}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
						 stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round"
							  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"/>
					</svg>
					<p className={'ml-4'}>
						Board Tasks
					</p>
				</Link>
			</li>

			<li className={`flex  pl-3 w-full hover:bg-indigo-600 py-3 ${showMembers && "bg-indigo-600"}`}
				onClick={() => setShowMembers(!showMembers)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round"
						  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
				</svg>
				<p className={'ml-4 flex relative w-full'}>
					Members
					{showMembers ? <ChevronUpIcon className={'h-6 w-6 absolute right-4'}/> :
						<ChevronDownIcon className={'h-6 w-6 absolute right-4'}/>}
				</p>
			</li>

			<RoomMembers roomDetail={roomDetail} showMembers={showMembers} setShowDeleteUser={setShowDeleteUser}
						 setUserDataToDelete={setUserDataToDelete}/>

			{roomDetail.data.is_owner && <li className={'w-full hover:bg-indigo-600'}>
				<Link to={'invite'} className={'w-full pl-3 py-3  flex h-full'}
					  state={{status: 'EXISTS', requestString: roomDetail.data.request_string}}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round"
							  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
					</svg>
					<p className={'ml-4'}>
						Invite Member
					</p>
				</Link>
			</li>}
			<li className={'w-full hover:bg-indigo-600'}>
				<Link to={`requests`} className={'flex pl-3 py-3 w-full'}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round"
							  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"/>
					</svg>
					<p className={'ml-4'}>
						Requests
					</p>
				</Link>
			</li>
			<li className={'w-full hover:bg-indigo-800'}>
				<Link to={'/boards'} className={'flex w-full pl-3 py-3'}>
					<Bars3CenterLeftIcon className={'h-6 w-6'}/>
					<p className={'ml-4'}>
						Boards
					</p>
				</Link>
			</li>
		</ul>
	</div>);
}

export default RoomDetailSidebar;