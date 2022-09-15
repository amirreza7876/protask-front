import React, {useContext, useEffect, useState} from 'react';
import {userContext} from "../userContext";
import {Link, Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import getUserData from "../apiCalls/getUserData";
import NavigationBar from "../components/NavigationBar";

function Dashboard() {
	const navigate = useNavigate()
	const {pathname} = useLocation()
	const currentPage = pathname.split('/')[2]
	const [username, setUsername] = useState('initState');
	if (!currentPage) {
		navigate('profile')
	}

	useEffect(() => {
		getUserData(setUsername)
	}, []);

	const {isAuthenticated} = useContext(userContext)
	if (isAuthenticated) {
		return (<div className={'w-screen'}>
			<NavigationBar/>
			<div className={'h-52 relative bg-slate-100'}>
				<div className={'m-auto flex w-1/2 justify-center absolute top-1/3 left-1/4'}>
					{/*TODO dynamic background color*/}
					<div
						className={`bg-indigo-800 align-middle p-2 w-12 h-12 leading-loose items-center text-center rounded-full self-center justify-center items-center`}>
						<p className={'font-bold text-white'}>
							{username[0].toUpperCase()}
						</p>
					</div>
					<h2 className={'self-center font-bold ml-4 text-gray-600'}>
						@{username}
					</h2>
				</div>
			</div>
			<div className={'bg-slate-100 w-full'}>
				<ul className="flex flex-wrap w-fit m-auto text-sm font-medium text-center text-gray-500 dark:text-gray-400">
					<li className="mr-2">
						<Link to="profile" aria-current="page"
							  className={`inline-block p-4 rounded-t-lg ${currentPage === 'profile' ? "text-blue-600 bg-white" : 'hover:text-blue-600 hover:bg-gray-200'}`}
						>Profile
						</Link>
					</li>
					<li className="mr-2">
						<Link to="activity"
							  className={`inline-block p-4 rounded-t-lg ${currentPage === 'activity' ? "text-blue-600 bg-white" : 'hover:text-blue-600 hover:bg-gray-200'}`}
						>Activity
						</Link>
					</li>
					<li className="mr-2">
						<Link to="settings"
							  className={`inline-block p-4 rounded-t-lg ${currentPage === 'settings' ? "text-blue-600 bg-white" : 'hover:text-blue-600 hover:bg-gray-200'}`}
						>Settings
						</Link>
					</li>
					<li className="mr-2">
						<Link to="notifications"
							  className={`inline-block p-4 rounded-t-lg ${currentPage === 'notifications' ? "text-blue-600 bg-white" : 'hover:text-blue-600 hover:bg-gray-200'}`}
						>Notifications
						</Link>
					</li>
				</ul>
			</div>
			<Outlet/>
		</div>);
	} else {
		return (<Navigate to={'/login'}/>)
	}
}

export default Dashboard;