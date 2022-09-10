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
import AddTagModal from "../components/AddTagModal";
import ChangeStatusModal from "../components/ChangeStatusModal";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const solutions = [{
	name: 'Rename', icon: AtSymbolIcon,
}, {
	name: 'Add Tags',
	description: 'Add Tags to board (only visible for you)',
	to: '/create-board',
	icon: HashtagIcon,
	type: "tag"
}, {
	name: 'Change status',
	description: 'Changing status allows you to not receive any email from this room.',
	to: '/join-room',
	icon: MegaphoneIcon,
	type: 'status'
},]

function MyRooms() {
	const [rooms, setRooms] = useState([]);
	const {isAuthenticated} = useContext(userContext)
	// const [showModal, setShowModal] = useState(false);
	const [showModalTag, setShowModalTag] = useState(false);
	const [showModalStatus, setShowModalStatus] = useState(false);
	useEffect(() => {
		getRooms(setRooms)
	}, []);

	if (isAuthenticated) {
		return (<MainLayout>
			<AddTagModal showModal={showModalTag} setShowModal={setShowModalTag}/>
			<ChangeStatusModal showModal={showModalStatus} setShowModal={setShowModalStatus}/>
			<div className={'grid-cols-4 grid gap-5 mt-3 max-w-6xl m-auto'}>
				{/*TODO move this to another file*/}
				{rooms.length !== 0 && rooms.map(room => (<div key={room.id}
															   className={'flex mb-3 h-32 relative align-middle items-center bg-slate-100'}>
					{room.is_owner && <span
						className={'absolute -top-2 -right-2 rounded-md bg-[#4f46e5] text-white p-1'}>Owner</span>}
					<div className={'w-11/12 m-auto h-4/5'}>
						<div className={'flex'}>
							<div
								className={`align-middle p-2 w-12 h-12 leading-loose items-center text-center rounded-full self-center justify-center items-center`}
								style={{backgroundColor: room.color}}>
								<p className={'font-bold'}>
									{room.name[0].toUpperCase()}
								</p>
							</div>
							<Link className={'self-center ml-4 '} to={`/room/${room.id}`}>
								{room.name}
							</Link>
						</div>
					</div>
					<div className={'p-1 rounded bottom-3 right-3 absolute'}>
						<Popover className="relative">
							{({open}) => (<>
								<Popover.Button
									className={classNames(open ? 'text-gray-900' : 'text-gray-500', ' group inline-flex items-center rounded-md hover:bg-slate-200 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
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
												{solutions.map((item) => (<p
														className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 hover:cursor-pointer"
														onClick={() => item.type === 'tag' ? setShowModalTag(!showModalTag) : setShowModalStatus(!showModalStatus)}
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
											</div>
											{room.is_owner && <div
												className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
												<div className={'flow-root m-auto'}>
													{/*TODO create delete and rename */}
													<button
														onClick={e => alert('delete room(TODO)')}
														className="-m-3 flex items-center rounded-md p-1 px-2 bg-rose-500 text-base text-gray-900 hover:bg-rose-600"
													>
														<XMarkIcon
															className="h-4 w-4 flex-shrink-0"
															aria-hidden="true"/>
														<span className="">Delete Board</span>
													</button>
												</div>
												<div className={'flow-root'}>
													<button
														onClick={e => alert('rename room(TODO)')}
														className="-m-3 text-white flex items-center rounded-md p-1 px-2 bg-emerald-500 text-base hover:bg-emerald-600"
													>
														<PencilIcon
															className="h-4 w-4 flex-shrink-0"
															aria-hidden="true"/>
														<span className="">Rename Board</span>
													</button>
												</div>
											</div>}
										</div>
									</Popover.Panel>
								</Transition>
							</>)}
						</Popover>

					</div>
				</div>))}
			</div>
		</MainLayout>);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default MyRooms;