import React, {useEffect, useState} from 'react';
import getUserName from "../apiCalls/getUserName";

function Profile(props) {
	const [username, setUsername] = useState('');
	useEffect(() => {
		getUserName(setUsername)
	}, []);

	return (
		<div className={'w-1/3 m-auto mt-8'}>
			<div className="mb-6">
				<label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">
					Username
				</label>
				<input type="text" id="base-input" value={username}
					   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
				    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
			</div>
			<div className="mb-6">
				<label htmlFor="large-input"
					   className="block mb-2 text-sm font-medium text-gray-900">Bio</label>
				<textarea id="large-input" rows={5}
						  className="block w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300
				    sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
			</div>
		</div>
	);
}

export default Profile;