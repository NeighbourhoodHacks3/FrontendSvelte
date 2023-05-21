<script lang="ts">
	import { ListGroup, ListGroupItem } from 'sveltestrap';
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
	<title>Profile</title>
	<meta name="description" content="Profle page" />
</svelte:head>

<div class="text-column">
	<h1>Profile: {res.username}</h1>

	<p>
		User ID: {res._id}
	</p>

	<!-- Use data from the API call here -->
	<div>
		<p>
			Job Title: { res.jobTitle}
		</p>
		<p>
			Description: {res.description}
		</p>
		<ListGroup>
			{#each res.experience as item}
				<ListGroupItem>
					Experience: {item}
				</ListGroupItem>
			{/each}
		</ListGroup>
	</div>

</div>
