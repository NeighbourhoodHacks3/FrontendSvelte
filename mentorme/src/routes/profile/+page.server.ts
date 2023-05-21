import { redirect } from '@sveltejs/kit';
import { currentUser } from '$lib/stores';

export function load() {
	if (currentUser.userID == null) {
		throw redirect(308, '/login');
	} else {
		const userID = currentUser.userID;
		throw redirect(308, '/');
		// throw redirect(308, `/profile/${userID}`);
	}
}
