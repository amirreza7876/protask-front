import React, {useState} from 'react';
import {XMarkIcon} from "@heroicons/react/24/solid";


const tag_list = [
	'python', 'django', 'robotics', 'important', 'deadline', '4 tasks left', "don't miss", 'asd', 'wefsdfsdf', ',d3423e'
]


function AddTagModal({showModal, setShowModal, boardName}) {
	const [newTag, setNewTag] = useState('');
	const addTag = (tag) => {

	}
	return (
		showModal ? (<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-1/2 my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div
						className="border-0 rounded backdrop-blur-sm shadow-lg relative flex flex-col w-full bg-black/30 outline-none focus:outline-none">
						{/*header*/}
						<div
							className="flex items-start text-white justify-between p-5  rounded-t">
							<h3 className="text-3xl font-semibold">
								{boardName} tags
							</h3>
							<button
								className="p-1 ml-auto text-white border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal(false)}
							>
								<XMarkIcon className="text-red-600 h-6 w-6 text-2xl block outline-none focus:outline-none"/>
							</button>
						</div>
						{/*body*/}
						<div className=" gap-3 relative p-6 flex flex-wrap">
							{tag_list.map(tag => (
								<p className="px-2 text-slate-300 text-lg leading-relaxed bg-slate-800 rounded"># {tag}</p>
							))}
						</div>
						{/*footer*/}
						<form
							className="flex items-center justify-end p-6 border-t gap-3 border-solid border-slate-200 rounded-b">
							<input type={'text'}
								   placeholder={'#add_tag'}
								   onChange={e => setNewTag(e.target.value)}
								   className="rounded bg-slate-800 text-slate-300 w-full font-bold placeholder:uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							/>
							<button
								className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => addTag(newTag)}
							>
								Add
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
		</>) : null
	);
}

export default AddTagModal;