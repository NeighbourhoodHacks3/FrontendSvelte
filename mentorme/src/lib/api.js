import axios from 'axios';

// Call to localhost backend to get user data
// http://127.0.0.1:5000/user/profile?userID=6468ec339d23f8e8ae7ca59c

export const getUserData = async (/** @type {string} */ userID) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/user/profile', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				userID: userID
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const updateUserProfile = async (
	/** @type {string} */ username,
	/** @type {string} */ email,
	/** @type {string} */ password,
	/** @type {string} */ userID,
	/** @type {string} */ description,
	/** @type {string} */ jobTitle,
	/** @type {string[]} */ experience
) => {
	try {
		const bodyJson = {
			username: username,
			email: email,
			password: password,
			userID: userID,
			description: description,
			jobTitle: jobTitle,
			experience: experience
		};

		console.log(bodyJson);

		const res = await axios.get('http://127.0.0.1:5000/user/update', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
            data: bodyJson
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};
