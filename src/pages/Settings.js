import React, {useEffect, useRef, useState} from 'react';
import getUserData from "../apiCalls/getUserData";
import {CheckIcon} from "@heroicons/react/20/solid";
import validateEmail from "../utils/validateEmail";
import ChangePasswordForm from "../components/ChangePasswordForm";
import handleUpdateUserData from "../apiCalls/handleUpdateUserData";
import {XMarkIcon} from "@heroicons/react/24/outline";

function Settings(props) {
	const [email, setEmail] = useState('');
	const [show, setShow] = useState(false);
	const [editable, setEditable] = useState(false);
	const emailValidRef = useRef(validateEmail(email));
	useEffect(() => {
		getUserData(null, setEmail)
	}, []);

	useEffect(() => {
		emailValidRef.current = validateEmail(email)
	}, [email]);
	return (
		<div className={'w-1/3 m-auto mt-8'}>
			<div className="mb-6">
				<label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">
					Email
				</label>
				<div className={'flex'}>
					<input type="text" disabled={!editable} id="base-input" value={email}
						   onChange={(e) => setEmail(e.target.value)}
						   className={`bg-gray-50 border border-gray-300 text-sm rounded-lg
									 block w-full p-2.5 focus:outline-0 
									 ${editable ? 'text-black' : "text-gray-500"}
									 ${editable ? emailValidRef.current ? 'border-green-600' : 'border-red-500' : null}`}
					/>
					{editable &&
						<button disabled={!emailValidRef.current} className={`${emailValidRef.current&&'hover:bg-slate-100'} p-3 ml-2 rounded-lg`}
								onClick={() => handleUpdateUserData(null, null, email)}>
							{emailValidRef.current ?
								<CheckIcon className={'h-6 w-6 self-center text-emerald-400'}/>
								:
								<XMarkIcon className={'h-6 w-6 self-center text-red-400'}/>
							}
						</button>
					}
					<button className={`p-3 hover:bg-slate-100 rounded-lg ${editable?'text-blue-500':'text-gray-600'}`} onClick={() => setEditable(!editable)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
							 stroke="currentColor" className="w-6 h-6 self-center ">
							<path strokeLinecap="round" strokeLinejoin="round"
								  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
						</svg>
					</button>
				</div>
			</div>
			<div className={`mb-6 flex text-blue-500`}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
					 stroke="currentColor" className="w-6 h-6 self-center">
					<path strokeLinecap="round" strokeLinejoin="round"
						  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
				</svg>
				<button className={'p-3'} onClick={() => setShow(!show)}>
					Change Password
				</button>
			</div>
			<ChangePasswordForm show={show}/>
		</div>
	);
}

export default Settings;