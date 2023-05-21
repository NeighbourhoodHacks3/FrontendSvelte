import { currentUser } from '$lib/stores.js';

	// Clear the user data in currentUser
	currentUser.set({
		userID: '',
		name: '',
		email: '',
		password: ''
	})

    console.log("Logged out");