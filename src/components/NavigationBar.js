import React, {Fragment, useContext, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
	XMarkIcon,
} from '@heroicons/react/24/outline'
import {BellAlertIcon, BellIcon, ChevronDownIcon, CubeIcon, FingerPrintIcon, UserIcon} from '@heroicons/react/20/solid'
import getUserData from "../apiCalls/getUserData";
import {Link} from "react-router-dom";
import {userContext} from "../userContext";
import handleLogout from "../utils/handleLogout";
import bars3CenterLeftIcon from "@heroicons/react/20/solid/esm/Bars3CenterLeftIcon";

const solutions = [{
	name: 'Dashboard',
	description: 'Change user information and customize your panel.',
	to: '/dashboard',
	icon: UserIcon,
}, {
	name: 'New Board',
	description: 'Create a new board to focus on your ideas.',
	to: '/create-board',
	icon: CubeIcon,
}, {
	name: 'Join Board',
	description: 'Check invite you get and requests you sent.',
	to: '/join-room',
	icon: FingerPrintIcon,
}, {
	name: 'Boards',
	description: 'Check invite you get and requests you sent.',
	to: '/boards',
	icon: bars3CenterLeftIcon,
}, {
	name: 'Notifications',
	description: 'Check invite you get and requests you sent.',
	to: '/notifications',
	icon: BellAlertIcon,
},

]


function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function NavigationBar() {
	const [username, setUsername] = useState();
	const {isAuthenticated} = useContext(userContext)

	useEffect(() => {
		getUserData(setUsername)
	}, []);
	return (
		<Popover className="relative bg-white border-b-2">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div
					className="flex items-center justify-between  border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link to="/">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto sm:h-10"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</Link>
					</div>
					<Popover.Group as="nav" className="hidden space-x-10 md:flex">

						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Pricing
						</a>
						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Docs
						</a>

					</Popover.Group>
					{isAuthenticated ?
						<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
							<Popover.Group as="nav" className="hidden space-x-5 md:flex">
								<div>
									<Link to={'/notifications'}>
										{/*TODO switch between slate and red when user have new notifications.*/}
										<BellIcon
											className="h-6 w-6 flex-shrink-0 text-red-5000 hover:text-red-600 text-slate-600"
											aria-hidden="true"/>
									</Link>
								</div>
								<Popover className="relative">

									{({open}) => (<>
										<Popover.Button
											className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
										>
											<span>{username}</span>
											<ChevronDownIcon
												className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
												aria-hidden="true"
											/>
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
												className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
												<div
													className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
													<div
														className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
														{solutions.map((item) => (<Link key={item.name} to={item.to}>
															<a
																className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
															>
																<item.icon
																	className="h-6 w-6 flex-shrink-0 text-indigo-600"
																	aria-hidden="true"/>
																<div className="ml-4">
																	<p className="text-base font-medium text-gray-900">{item.name}</p>
																	<p className="mt-1 text-sm text-gray-500">{item.description}</p>
																</div>
															</a>
														</Link>))}
													</div>
													<div
														className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
														<div className={'flow-root'}>
															<button
																onClick={e => handleLogout(e)}
																className="-m-3 flex items-center rounded-md p-3 bg-red-600 text-base font-medium text-gray-900 hover:bg-red-700"
															>
																<XMarkIcon
																	className="h-6 w-6 flex-shrink-0"
																	aria-hidden="true"/>
																<span className="ml-3">Logout</span>
															</button>
														</div>
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>)}
								</Popover>
							</Popover.Group>
						</div>

						: <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
							<Link to={'/login'}>
								<a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
									Sign in
								</a>
							</Link>
							<Link to={'/register'}>
								<a
									className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
								>
									Sign up
								</a>
							</Link>
						</div>}
				</div>
			</div>
		</Popover>)
}