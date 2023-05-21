import { redirect } from '@sveltejs/kit';
import { currentUser } from '$lib/stores';

let user_value: { userID: any; name?: string; email?: string; password?: string };

currentUser.subscribe((value) => {
	user_value = value;
});

export function load() {
	if (user_value.userID == null) {
		console.log('User not logged in');
		// throw redirect(308, '/login');
	} else {
		const userID = user_value.userID;
		console.log(`User logged in with userID: ${userID}`);
		throw redirect(308, `/profile/${userID}`);
	}
}
