<!-- Redirect to users profile -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib/stores';

	let user_value: { userID: any; name?: string; email?: string; password?: string };

	currentUser.subscribe((value) => {
		user_value = value;
	});

	// @ts-ignore
	$: if (user_value.userID != null) {
		console.log(user_value);

		goto(`/profile/${user_value.userID}`);
	} else {
		goto('/');
		// goto('/login');
	}
</script>
