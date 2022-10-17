import React, {Fragment, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Popover, Transition} from "@headlessui/react";
import {EllipsisHorizontalIcon, HashtagIcon, MegaphoneIcon} from "@heroicons/react/20/solid";
import {ArrowRightOnRectangleIcon, PencilIcon as OutlinePencil} from "@heroicons/react/24/outline";
import {XMarkIcon} from "@heroicons/react/24/outline";
import AddTagModal from "./modals/AddTagModal";
import ChangeStatusModal from "./modals/ChangeStatusModal";
import changeBoardName from "../apiCalls/changeBoardName";
import LeaveBoardModal from "./modals/LeaveBoardModal";
import DeleteBoardModal from "./modals/DeleteBoardModal";
import {CheckIcon} from "@heroicons/react/24/solid";


function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const solutions = [
	{
		name: 'Add Tags',
		description: 'Add Tags to board (only visible for you)',
		to: '/create-board',
		icon: HashtagIcon,
		type: "tag"
	}, {
		name: 'Change status',
		description: 'Changing status allows you to not receive any email from this board.',
		to: '/join-room',
		icon: MegaphoneIcon,
		type: 'status'
	}, {
		name: 'Rename',
		icon: OutlinePencil,
		type: 'name'
	},
]


function RoomCard({room, setRooms}) {
	const navigate = useNavigate();
	const [showModalTag, setShowModalTag] = useState(false);
	const [showModalStatus, setShowModalStatus] = useState(false);
	const [showModalLeaveBoard, setShowModalLeaveBoard] = useState(false);
	const [showModalDeleteBoard, setShowModalDeleteBoard] = useState(false);
	const [editName, setEditName] = useState(false);
	const [boardName, setBoardName] = useState();
	const refreshPage = () => {
		navigate(0);
	}
	const handleChangeBoardName = async () => {
		setEditName(!editName)
		await changeBoardName(room.id, boardName)
		refreshPage()
	}
	useEffect(() => {
		setBoardName(room.name)
	}, []);
	console.log(room)
	return (
		<div key={room.id}
			 className={`flex mb-3 h-32 relative align-middle items-center bg-slate-100 rounded-md`}
			 style={{backgroundImage: `linear-gradient(${room.color}80,${room.color}99,${room.color}b3,${room.color}cc, ${room.color}e6`}}
		>
			<
				AddTagModal
				showModal={showModalTag}
				setShowModal={setShowModalTag}
				boardName={boardName}
			/>
			<ChangeStatusModal showModal={showModalStatus} setShowModal={setShowModalStatus}/>
			<LeaveBoardModal setRooms={setRooms} showModal={showModalLeaveBoard} setShowModal={setShowModalLeaveBoard}
							 boardName={boardName} boardId={room.id}/>
			<DeleteBoardModal showModal={showModalDeleteBoard} setShowModal={setShowModalDeleteBoard}
							  boardName={boardName} boardId={room.id}/>
			{
				room.is_owner &&
				<span className={'absolute -top-2 -right-2 rounded-md bg-[#4f46e5] text-white p-1'}>Owner</span>
			}
			<div className={'w-11/12 m-auto h-4/5'}>
				<div className={'flex h-full'}>
					{editName && room.is_owner ?
						<div className={'grid m-auto'}>
							<div
								className={`align-middle p-2 w-12 h-12 leading-loose items-center text-center text-white rounded-full place-self-center`}
								style={{backgroundColor: room.color, blockSize: "auto"}}>
								<p className={'text-xl'}>
									{room.name[0].toUpperCase()}
								</p>
							</div>
							<div className={'w-3/4 flex mt-2 justify-self-center space-x-2 justify-center'}>
								<input type="text" value={boardName}
									   onChange={(e) => setBoardName(e.target.value)}
									   className='w-1/2 border-2 border-gray-600 self-center rounded-md py-1 px-2 text-center'
									   name=""
									   id=""/>
								<button className={'rounded-full bg-transparent'}
										onClick={() => handleChangeBoardName()}>
									<CheckIcon className={'h-6 w-6 self-center'}/>
								</button>
							</div>
						</div>
						:
						<div className={'grid m-auto'}>
							<div
								className={`align-middle p-2 w-12 h-12 leading-loose items-center text-center text-white rounded-full place-self-center`}
								style={{backgroundColor: room.color, blockSize: "auto"}}>
								<p className={'text-xl'}>
									{room.name[0].toUpperCase()}
								</p>
							</div>

							<div className={'flex justify-center'}>
								<Link className={'self-center text-white text-lg first-letter:uppercase'} to={`/room/${room.id}`}>
									{room.name}
								</Link>
							</div>
						</div>
					}
				</div>
			</div>
			<div className={'p-1 rounded bottom-1 right-3 absolute'}>
				<Popover className="relative">
					{({open}) => (<>
						<Popover.Button
							className={classNames(open ? 'text-gray-900' : 'text-gray-500', ' group inline-flex items-center rounded-md text-base hover:bg-transparent/10')}
						>
							<EllipsisHorizontalIcon className={'w-6 h-6'}/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel
								className="absolute z-10 -ml-4 mt-3 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-full">
								<div
									className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
									<div
										className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
										{solutions.map((item) => (
											item.type === 'name' ?
												room.is_owner &&
												<p
													className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 hover:cursor-pointer"
													onClick={() => setEditName(!editName)}
												>
													<item.icon
														className="h-6 w-6 flex-shrink-0 text-indigo-600"
														aria-hidden="true"/>
													<div className="ml-4">
														<p className="text-base font-medium text-gray-900">{item.name}</p>
													</div>
												</p>
												:
												<p
													className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 hover:cursor-pointer"
													onClick={() => item.type === 'tag' ? setShowModalTag(!showModalTag) : item.type === 'status' ? setShowModalStatus(!showModalStatus) : null}
												>
													<item.icon
														className="h-6 w-6 flex-shrink-0 text-indigo-600"
														aria-hidden="true"/>
													<div className="ml-4">
														<p className="text-base font-medium text-gray-900">{item.name}</p>
														<p className="mt-1 text-sm text-gray-500">{item.description}</p>
													</div>
												</p>

										))}
										<p
											className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 hover:cursor-pointer"
											onClick={() => setShowModalLeaveBoard(!showModalLeaveBoard)}
										>
											<ArrowRightOnRectangleIcon
												className="h-6 w-6 flex-shrink-0 text-red-600"
												aria-hidden="true"/>
											<div className="ml-4">
												<p className="text-base font-medium text-red-600">Leave Board</p>
											</div>
										</p>
										{room.is_owner &&
											<p
												className="-m-3 flex items-start rounded-lg p-3 bg-slate-50 shadow hover:shadow-red-500  hover:bg-red-500 hover:text-white hover:cursor-pointer"
												onClick={() => setShowModalDeleteBoard(!showModalDeleteBoard)}
												// onClick={() => item.type === 'tag' ? setShowModalTag(!showModalTag) : item.type === 'status' ? setShowModalStatus(!showModalStatus) : null}
											>
												<XMarkIcon
													className="h-6 w-6 flex-shrink-0 "
													aria-hidden="true"/>
												<div className="ml-4">
													<p className="text-base font-medium ">Delete Board</p>
												</div>
											</p>
										}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>)}
				</Popover>
			</div>
		</div>
	)
		;
}

export default RoomCard;