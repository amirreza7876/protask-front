import React from 'react';
import {CheckIcon} from "@heroicons/react/24/outline";

const status_list = [{
	name: 'away',
	active: false
}, {
	name: 'busy',
	active: false
}, {
	name: 'available',
	active: true
},]

function ChangeStatusModal({showModal, setShowModal}) {
	return (showModal ? (<>
		<div
			className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
			<div className="relative w-auto my-6 mx-auto max-w-3xl">
				{/*content*/}

				<div
					className="border-0 rounded backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/30 outline-none focus:outline-none">
					<p className={'p-6 text-white'}>Your current status: <span className={''}>{status_list.find(item => item.active === true).name}</span></p>
					<div className=" gap-3 relative p-6 flex ">
						{status_list.map(status => (
							<div
								className={`rounded w-40 flex hover:cursor-pointer  ${status.active ? 'bg-slate-300 text-slate-800 font-bold' : 'bg-slate-800 text-slate-300'}`}>
								<p className={`p-4 flex leading-relaxed uppercase m-auto ${status.active ? 'pr-0' : ''}`}>
									{status.name}
								</p>
								{status.active && <CheckIcon className={'h-6 w-6 self-center text-green-700 m-auto'}/>}
							</div>))}
					</div>
					{/*footer*/}
					<div
						className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
						<button
							className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => setShowModal(false)}
						>
							Close
						</button>
						<button
							className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
							onClick={() => setShowModal(false)}
						>
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
	</>) : null);
}

export default ChangeStatusModal;