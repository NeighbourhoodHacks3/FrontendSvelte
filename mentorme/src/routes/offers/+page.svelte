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
	import { getOfferPosts } from '$lib/api.js';

	/** @type {import('./$types').PageData}*/

	// {
	//     "_id": "6469d0d3b3d0834a1763809c",
	//     "description": "I have been selling on etsy for 5 years, and can help you get started!",
	//     "location": "MS Teams meeting online",
	//     "offerOpen": true,
	//     "payment": 30,
	//     "postTime": "2023-05-21T16:05:39.448946Z",
	//     "tags": [
	//         "etsy",
	//         "jewelry"
	//     ],
	//     "title": "Help you set up a etsy",
	//     "userID": "6468e56040922aee737d31a6"
	// }

	var res: any[] = [];

	onMount(async () => {
		// Make the API Call here
		// @ts-ignore
		res = await getOfferPosts(1);
		console.log(res);
	});
</script>

<svelte:head>
	<title>Mentor's Offers</title>
	<meta name="description" content="View Requests from Mentees" />
</svelte:head>

<div class="">
	<h1>Mentor's Offers</h1>

	<h2>Make Offer to Mentee</h2>
	<p>Got skills and experience? Post a mentorship offer!</p>

	<Button color="primary" href="/offers/create">Post Offer</Button>

	<br />
	<br />

	<h2>Open Offers</h2>
	<p>Find a mentor to help you out!</p>

	{#if res.length == 0}
		<p>No open offers</p>
	{:else if res.length == 1}
		<Card>
			<CardBody>
				<CardTitle>{res[0].title}</CardTitle>
				<CardSubtitle>{res[0].location}</CardSubtitle>
				<CardText>{res[0].description}</CardText>
				{#if res[0].offerOpen}
					<Button href="/offers/{res[0]._id}">View Offer</Button>
				{:else}
					<Button disabled>Request Closed</Button>
				{/if}
			</CardBody>
		</Card>
	{:else}
		{#each res as item}
			<Card>
				<CardBody>
					<CardTitle>{item.title}</CardTitle>
					<CardSubtitle>{item.location}</CardSubtitle>
					<CardText>{item.description}</CardText>
					{#if item.offerOpen}
						<Button href="/offers/{item._id}">View Offer</Button>
					{:else}
						<Button disabled>Request Closed</Button>
					{/if}
				</CardBody>
			</Card>
		{/each}
	{/if}

	<br />

	<!-- Pagination controls -->
	<!-- <nav aria-label="Page navigation example">
		<ul class="pagination">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
					<span class="sr-only">Previous</span>
				</a>
			</li>
			<li class="page-item"><a class="page-link" href="#">1</a></li>
			<li class="page-item"><a class="page-link" href="#">2</a></li>
			<li class="page-item"><a class="page-link" href="#">3</a></li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
					<span class="sr-only">Next</span>
				</a>
			</li>
		</ul>
	</nav> -->
</div>

<style>
	h2 {
		font-size: 1.5rem;
	}
</style>
