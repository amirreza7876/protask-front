import React from 'react';

function ChangeStatusModal({showModal, setShowModal, boardName}) {
	return (
		showModal ? (<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto max-w-3xl">
					{/*content*/}
					<div
						className="border-0 py-12 rounded backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/30 outline-none focus:outline-none">
						{/*header*/}
						{/*<div*/}
						{/*	className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">*/}
						{/*	<h3 className="text-3xl font-semibold">*/}
						{/*		Modal For Leaving room*/}
						{/*	</h3>*/}
						{/*	<button*/}
						{/*		className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"*/}
						{/*		onClick={() => setShowModal(false)}*/}
						{/*	>*/}
						{/*					<span*/}
						{/*						className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">*/}
						{/*					  ×*/}
						{/*					</span>*/}
						{/*	</button>*/}
						{/*</div>*/}
						{/*body*/}
						<div className="relative px-6 flex-auto">
							<p className="my-4 flex text-white leading-relaxed">
								Do you want to Leave <span className={'font-bold ml-1'}> {boardName} ?</span>
							</p>
						</div>
						{/*footer*/}
						<div
							className="flex items-center px-6 rounded-b">
							<button
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal(false)}
							>
								Cancel
							</button>
							<button
								className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal(false)}
							>
								Leave
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
		</>) : null
	);
}

export default ChangeStatusModal;