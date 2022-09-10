import React, {useEffect, useState} from 'react';
import getUserData from "../apiCalls/getUserData";
import handleUpdateUserData from "../apiCalls/handleUpdateUserData";

function Profile(props) {
	const [username, setUsername] = useState('');
	const [bio, setBio] = useState('');
	useEffect(() => {
		getUserData(setUsername, null, setBio)
	}, []);

	return (
		<div className={'w-1/3 m-auto mt-8'}>
			<div className="mb-6">
				<label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">
					Username
				</label>
				<input type="text" id="base-input" value={username} onChange={e=>setUsername(e.target.value)}
					   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
				    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
			</div>
			<div className="mb-6">
				<label htmlFor="large-input"
					   className="block mb-2 text-sm font-medium text-gray-900">Bio</label>
				<textarea id="large-input" rows={5}
						  value={bio}
						  onChange={(e)=>setBio(e.target.value)}
						  className="block w-full text-gray-900 bg-gray-50 p-2.5 rounded-lg border border-gray-300
				    sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
			</div>
			<button className={'hover:bg-slate-100 text-blue-500 p-3 rounded-lg'} onClick={()=> handleUpdateUserData(username, bio)}>
				Save
			</button>
		</div>
	);
}

export default Profile;