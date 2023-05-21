<script lang="ts">
	import { onMount } from 'svelte';
	import { getUserData } from '$lib/api.js';

	/** @type {import('./$types').PageData}*/
	export let data = {}

	var res = {
		_id: '',
		description: '',
		experience: [''],
		hashedPassword: '',
		jobTitle: '',
		username: ''
	};

	onMount(async () => {
		// Make the API Call here
		// @ts-ignore
		res = await getUserData(data.userID);
	});
</script>


<svelte:head>
	<title>Update Profile</title>
	<meta name="description" content="View Offers from Mentors" />
</svelte:head>

<div class="text-column">

</div>
