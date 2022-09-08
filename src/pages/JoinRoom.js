import React, {useState} from 'react';
import searchForRoom from "../utils/searchForRoom";
import MainLayout from "../layouts/MainLayout";
import {InformationCircleIcon} from "@heroicons/react/20/solid";

function JoinRoom(props) {
	const [requestString, setRequestString] = useState('');
	return (
		// <div>
		// 	Join Room
		// 	<form onSubmit={e => searchForRoom(e, requestString)}>
		// 		<input type="text" name="" value={requestString} onChange={e => setRequestString(e.target.value)}
		// 			   id=""/>
		// 		<input type="submit" value={'Send Request'} name="" id=""/>
		// 	</form>
		// </div>
		<MainLayout>
			<div>
				<form className="m-auto w-full max-w-sm" onSubmit={e => searchForRoom(e, requestString)}>
					<div className="flex items-center border-b border-[#4f46e5] py-2">
						<input
							className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text" value={requestString} onChange={e => setRequestString(e.target.value)}
							placeholder="Type Board Request String"
							aria-label="Full name"/>
						<button
							className="flex-shrink-0 bg-[#4f46e5] hover:bg-[#2e2990] text-md text-white py-1 px-2 rounded"
							type="submit">
							Join Board
						</button>
					</div>
					<div className={'flex text-gray-500 mt-2'}>
						<InformationCircleIcon
							className={'h-4 w-4 mr-1'}/>
						<p className={'text-sm'}>Team leader must've sent you a request string to join their
							team.</p>
					</div>
				</form>
			</div>
		</MainLayout>
	)
		;
}

export default JoinRoom;