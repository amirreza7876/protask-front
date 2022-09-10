import React, {useEffect, useState} from 'react';
import handleUpdateUserData from "../apiCalls/handleUpdateUserData";

function ChangePasswordForm({show}) {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [areEqual, setAreEqual] = useState(false);

	useEffect(() => {
		if (password1 === '', password2 === '') {
			setAreEqual(false)

		} else if (password1 === password2) {
			setAreEqual(true)
		} else {
			setAreEqual(false)
		}
	}, [password1, password2]);

	return (
		show &&
		<div>

			<input type="text" id="base-input"
				   placeholder={'New Password'}
				   value={password1}
				   onChange={e => setPassword1(e.target.value)}
				   className={`bg-gray-50 border border-gray-300 text-sm rounded-lg
									 block w-full p-2.5 focus:outline-0`}
			/>
			<input type="text" id="base-input"
				   placeholder={'Repeat New Password'}
				   value={password2}
				   onChange={e => setPassword2(e.target.value)}
				   className={`bg-gray-50 border mt-2 border-gray-300 text-sm rounded-lg
									 block w-full p-2.5 focus:outline-0 `}
			/>
			<button className={`underline m-2 ${areEqual ? 'text-blue-500' : 'text-gray-400'}`} disabled={!areEqual}
					onClick={() => handleUpdateUserData(null, null, null, password1)}>
				Update Password
			</button>
		</div>

	);
}

export default ChangePasswordForm;