import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {ArrowDownIcon, ArrowUpIcon, InboxArrowDownIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";
import getInvites from "../apiCalls/getInvites";
import status from "../utils/checkStatus";
import handleInvite from "../utils/handleInvite";
import MyInvitesList from "../components/MyInvitesList";
import getRequests from "../apiCalls/getRequests";
import MyRequestList from "../components/MyRequestList";

function Notifications() {
	const [invites, setInvites] = useState([]);
	const [showInvites, setShowInvites] = useState(false);
	const [showRequests, setShowRequests] = useState(false);
	const [requests, setRequests] = useState([]);
	const handleClickInvites = () => {
		setShowInvites(!showInvites)
	}
	useEffect(() => {
		getInvites(setInvites)
		getRequests(setRequests)

	}, []);

	return (
		<div className={'w-1/3 m-auto mt-4'}>
			<div className={'flex hover:bg-slate-100'}>
				<PaperAirplaneIcon className={'h-6 w-6 self-center'}/>
				<button className="flex justify-between py-2 px-4 w-full border-b border-gray-200 cursor-pointer text-left "
						onClick={() => setShowRequests(!showRequests)}>
					<p>Requests</p>
					{
						showRequests ?
							<ArrowUpIcon className={'h-6 w-6 self-center mx-2 p-1'}/>
							:
							<ArrowDownIcon className={'h-6 w-6 self-center mx-2 p-1'}/>
					}
				</button>
			</div>
			<MyRequestList showRequests={showRequests} requests={requests}/>
			<div className={'flex hover:bg-slate-100'}>
				<InboxArrowDownIcon className={'self-center h-6 w-6'}/>
				<button className=" flex justify-between py-2 px-4 w-full border-b border-gray-200 cursor-pointer text-left"
						onClick={handleClickInvites}>
					<p>Invitations</p>
					{
						showInvites ?
							<ArrowUpIcon className={'h-6 w-6 self-center mx-2 p-1'}/>
							:
							<ArrowDownIcon className={'h-6 w-6 self-center mx-2 p-1'}/>
					}
				</button>
			</div>
			<MyInvitesList showInvites={showInvites} invites={invites}/>
		</div>
	);
}

export default Notifications;