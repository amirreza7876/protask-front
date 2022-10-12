import React from 'react';
import handleRemoveUser from "../../apiCalls/handleRemoveUser";
import handleRemovePhase from "../../apiCalls/handleRemovePhase";
import getRoomPhases from "../../apiCalls/getRoomPhases";

function DeletePhaseModal({
							  showDeletePhaseModal,
							  selectedPhase,
							  setPhases,
							  setSelectedPhase,
							  setShowDeletePhaseModal,
							  roomId
						  }) {
	const handleDeletePhase = async () => {
		const response = await handleRemovePhase(selectedPhase.id, roomId)
		if (response.status === 202) {
			setShowDeletePhaseModal(false)
			await getRoomPhases(setPhases, setSelectedPhase, roomId)
		}
	}
	return (
		showDeletePhaseModal ? (<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto max-w-3xl">
					{/*content*/}
					<div
						className="border-0 py-12 rounded backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/30 outline-none focus:outline-none">

						<div className="relative m-auto px-6 flex-auto">
							<p className="my-4  flex text-white leading-relaxed">
								Do you want to delete <span
								className={'font-bold ml-1'}>{selectedPhase.name}</span>?
							</p>
						</div>
						{/*footer*/}
						<div
							className="flex items-center px-6">
							<button
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowDeletePhaseModal(false)}
							>
								Cancel
							</button>
							<button
								className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={handleDeletePhase}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
		</>) : null
	);
}

export default DeletePhaseModal;