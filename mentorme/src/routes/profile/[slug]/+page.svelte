<script lang="ts">
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import { onMount } from 'svelte';
	import { getUserData } from '$lib/api.js';

	/** @type {import('./$types').PageData}*/
	export let data = {};

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

<!-- <script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div> -->

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
			Job Title: {res.jobTitle}
		</p>
		<p>
			Description: {res.description}
		</p>
		<ListGroup>
			{#if res.experience.length == 0}
				<ListGroupItem>Experience: None</ListGroupItem>
			{:else if res.experience.length == 1}
				<ListGroupItem>
					Experience: {res.experience[0]}
				</ListGroupItem>
			{:else}
				{#each res.experience as item}
					<ListGroupItem>
						Experience: {item}
					</ListGroupItem>
				{/each}
			{/if}
		</ListGroup>
	</div>
</div>
