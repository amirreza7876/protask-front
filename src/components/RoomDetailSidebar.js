import React, {useState} from 'react';
import {Bars3CenterLeftIcon, ChevronDownIcon, ChevronUpIcon, MinusCircleIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import DeleteUserModal from "./modals/DeleteUserModal";
import RoomMembers from "./RoomMembers";
import {InboxArrowDownIcon} from "@heroicons/react/24/solid";
import {
	ChatBubbleLeftRightIcon,
	PuzzlePieceIcon,
	RectangleGroupIcon,
	UserGroupIcon,
	UserPlusIcon
} from "@heroicons/react/24/outline";

function RoomDetailSidebar({roomDetail, setRoomDetail}) {
	const [showMembers, setShowMembers] = useState(false);
	const [showDeleteUser, setShowDeleteUser] = useState(false);
	const [userDataToDelete, setUserDataToDelete] = useState();

	return (<div className={'col-span-1 bg-slate-900 min-h-screen text-white'}>
		<DeleteUserModal setRoomDetail={setRoomDetail} showModal={showDeleteUser} setShowModal={setShowDeleteUser}
						 userDataToDelete={userDataToDelete}/>
		<ul>
			<li className={'mt-3 flex text-xl justify-center'}>
				<p className={'font-extrabold tracking-wd font-moon uppercase'}>
					{roomDetail.data.name}
				</p>
				<p className={'ml-1'}>
					by {roomDetail.data.leader.username}
				</p>
			</li>
			<li className={'w-full mt-3 hover:bg-indigo-600 mt-12'}>
				<Link to={`tasks`} className={'flex pl-3 py-3 w-full'}>
					<PuzzlePieceIcon className={'h-6 w-6'}/>
					<p className={'ml-4'}>
						Board Tasks
					</p>
				</Link>
			</li>
			<li className={`flex  pl-3 w-full hover:bg-indigo-600 py-3 ${showMembers && "bg-indigo-600"}`}
				onClick={() => setShowMembers(!showMembers)}>
				<UserGroupIcon className={'h-6 w-6'}/>
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
					<UserPlusIcon className={'h-6 w-6 '}/>
					<p className={'ml-4'}>
						Invite Member
					</p>
				</Link>
			</li>}
			<li className={'w-full hover:bg-indigo-600'}>
				<Link to={`requests`} className={'flex pl-3 py-3 w-full'}>
					<InboxArrowDownIcon className={'w-6 h-6'}/>
					<p className={'ml-4'}>
						Requests
					</p>
				</Link>
			</li>
			<li className={'w-full hover:bg-indigo-600'}>
				<Link to={'conversation/'} className={'flex pl-3 py-3 w-full'}>
					<ChatBubbleLeftRightIcon className={'h-6 w-6'}/>
					<p className={'ml-4'}>
						Conversation
					</p>
				</Link>
			</li>
			<li className={'hover:bg-indigo-800 mt-12'}>
				<Link to={'/boards'} className={'flex w-full pl-3 py-3'}>
					<RectangleGroupIcon className={'h-6 w-6'}/>
					<p className={'ml-4'}>
						Back to boards
					</p>
				</Link>
			</li>
		</ul>
	</div>);
}

export default RoomDetailSidebar;