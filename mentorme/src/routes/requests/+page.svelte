<script lang="ts">
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle
	} from 'sveltestrap';
	import { onMount } from 'svelte';
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import { getRequestPosts } from '$lib/api.js';

	/** @type {import('./$types').PageData}*/

	// {
	//     "_id": "6469a7c135e88ef1438d2011",
	//     "description": "Yada yada yada wanna open a art booth at a convention, not sure where to sign up?",
	//     "location": "Google meets meeting online",
	//     "payment": 47.6,
	//     "postTime": "2023-05-21T13:10:25.160050Z",
	//     "requestOpen": true,
	//     "tags": [
	//         "art fair",
	//         "convention",
	//         "booth"
	//     ],
	//     "title": "HELP i wanna run a booth at an art convention",
	//     "userID": "6469a72535e88ef1438d2010"
	// },

	var res: any[] = [];

	onMount(async () => {
		// Make the API Call here
		// @ts-ignore
		res = await getRequestPosts(1);
		console.log(res);
	});
</script>

<svelte:head>
	<title>Mentee's Requests</title>
	<meta name="description" content="View Requests from Mentees" />
</svelte:head>

<div class="">
	<h1>Mentee's Requests</h1>

	<h2>Make Request to Mentor</h2>
	<p>Need help? Post your own request</p>

	<Button color="primary" href="/requests/create">Post Request</Button>

	<br />
	<br />

	<h2>Open Requests</h2>
	<p>Find a mentee to help out!</p>

	{#if res.length == 0}
		<p>No open requests</p>
	{:else}
		{#each res as item}
			<Card>
				<CardBody>
					<CardTitle>{item.title}</CardTitle>
					<CardSubtitle>{item.location}</CardSubtitle>
					<CardText>{item.description}</CardText>
					{#if item.requestOpen}
						<Button href="/requests/{item._id}">View Request</Button>
					{:else}
						<Button disabled>Request Closed</Button>
					{/if}
				</CardBody>
			</Card>
		{/each}
	{/if}

	<!-- Pagination controls -->
</div>

<style>
	h2 {
		font-size: 1.5rem;
	}
</style>
