<script lang="ts">
	import { currentUser } from '$lib/stores.js';

	let user_value: { userID: any; name?: string; email?: string; password?: string };

	currentUser.subscribe((value) => {
		user_value = value;
	});

	// Clear the user data in currentUser
	currentUser.set({
		userID: '',
		name: '',
		email: '',
		password: ''
	});

	console.log('user_value: ', user_value);
</script>

<svelte:head>
	<title>Log Out</title>
	<meta name="description" content="View Requests from Mentees" />
</svelte:head>

<div class="text-column centered">
	<h1>You've Logged Out!</h1>

	<br />

	<p>You have successfully logged out of MentorMe. See you next time!</p>

	<br />

	<nav>
		<a style="font-size: 25px;" href="/">Back to Home</a><br /><br />
	</nav>
</div>

<style>
	.centered {
		text-align: center;
	}
</style>
