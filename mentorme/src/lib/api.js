import axios from 'axios';

// API fucnction: create_user
export const createUser = async (
	/** @type {string} */ username,
	/** @type {string} */ email,
	/** @type {string} */ password
) => {
	try {
		const bodyJson = {
			username: username,
			email: email,
			password: password
		};

		const res = await axios.post('http://127.0.0.1:5000/user/create', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_user_profile
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

// API fucnction: update_user
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

		const res = await axios.post('http://127.0.0.1:5000/user/update', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};


// API fucnction: create_request_post
export const createRequestPost = async (
	/** @type {string} */ userID,
	/** @type {string} */ title,
	/** @type {string} */ description,
	/** @type {string[]} */ tags,
	/** @type {string} */ location,
	/** @type {Number} */ payment
) => {
	try {
		const bodyJson = {
			userID: userID,
			title: title,
			description: description,
			tags: tags,
			location: location,
			payment: payment
		};

		const res = await axios.post('http://127.0.0.1:5000/requestPost/create', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_request_post
export const getRequestPost = async (
	/** @type {string} */ postID
) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/requestPost', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				"requestPostID": postID
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_request_posts
export const getRequestPosts = async (
	/** @type {Number}} */ page
) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/requestPosts', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				"page": page
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: update_request_post
export const updateRequestPost = async (
	/** @type {string} */ postID,
	/** @type {Boolean} */ requestOpen,
) => {
	try {
		const bodyJson = {
			"requestPostID": postID,
			"requestOpen": requestOpen
		};

		const res = await axios.post('http://127.0.0.1:5000/requestPost/update', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};


// API fucnction: create_request_comment
export const createRequestComment = async (
	/** @type {string} */ userID,
	/** @type {string} */ requestPostID,
	/** @type {string} */ comment
) => {
	try {
		const bodyJson = {
			userID: userID,
			requestPostID: requestPostID,
			comment: comment
		};

		const res = await axios.post('http://127.0.0.1:5000/requestComment/create', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_request_comments
export const getRequestComments = async (
	/** @type {string} */ requestPostID
) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/requestComments', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				"requestPostID": requestPostID
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: create_offer_post
export const createOfferPost = async (
	/** @type {string} */ userID,
	/** @type {string} */ title,
	/** @type {string} */ description,
	/** @type {string[]} */ tags,
	/** @type {string} */ location,
	/** @type {Number} */ payment
) => {
	try {
		const bodyJson = {
			userID: userID,
			title: title,
			description: description,
			tags: tags,
			location: location,
			payment: payment
		};

		const res = await axios.post('http://127.0.0.1:5000/offerPost/create', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_offer_post
export const getOfferPost = async (
	/** @type {string} */ offerPostID
) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/offerPost', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				"offerPostID": offerPostID
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_offer_posts
export const getOfferPosts = async (
	/** @type {Number}} */ page
) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/offerPosts', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				"page": page
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: update_offer_post
export const updateOfferPost = async (
	/** @type {string} */ offerPostID,
	/** @type {Boolean} */ offerOpen,
) => {
	try {
		const bodyJson = {
			"offerPostID": offerPostID,
			"offerOpen": offerOpen
		};

		const res = await axios.post('http://127.0.0.1:5000/offerPost/update', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: create_offer_comment
export const createOfferComment = async (
	/** @type {string} */ userID,
	/** @type {string} */ offerPostID,
	/** @type {string} */ comment
) => {
	try {
		const bodyJson = {
			userID: userID,
			offerPostID: offerPostID,
			comment: comment
		};

		const res = await axios.post('http://127.0.0.1:5000/offerComment/create', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: get_offer_comments
export const getOfferComments = async (
	/** @type {string} */ offerPostID
) => {
	try {
		const res = await axios.get('http://127.0.0.1:5000/offerComments', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			params: {
				"offerPostID": offerPostID
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

// API fucnction: login
export const login = async (
	/** @type {string} */ email,
	/** @type {string} */ password
) => {
	try {
		const bodyJson = {
			email: email,
			password: password
		};

		const res = await axios.post('http://127.0.0.1:5000/login', bodyJson, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});

		return res.data;
	} catch (err) {
		console.log(err);
	}
};