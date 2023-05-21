<script lang="ts">
	import { ListGroup, ListGroupItem } from 'sveltestrap';
	import { onMount } from 'svelte';
	import { getOfferPost, getUserData } from '$lib/api.js';
	import { Accordion, AccordionItem } from 'sveltestrap';

	/** @type {import('./$types').PageData}*/
	export let data = {};

	// 	{
	//     "_id": "6468f3d5a7019f8b521fb8b9",
	//     "description": "I have been selling on instagram for 2 years, and can help you get started!",
	//     "location": "MS Teams meeting online",
	//     "offerOpen": true,
	//     "payment": 30,
	//     "postTime": "2023-05-21T00:22:45.903146Z",
	//     "tags": [
	//         "etsy",
	//         "jewelry"
	//     ],
	//     "title": "Help you set up a instagram for sales",
	//     "userID": "6468e56040922aee737d31a6"
	// }

	var offerInfo = {
		_id: '',
		description: '',
		location: '',
		offerOpen: true,
		payment: 0,
		postTime: '',
		tags: [],
		title: '',
		userID: ''
	};

	var posterInfo = {
		_id: '',
		username: '',
		jobTitle: '',
		description: '',
		experience: []
	};

	onMount(async () => {
		// Make the API Call here
		// @ts-ignore
		await getOfferPost(data.offerPostID).then(async (res) => {
			offerInfo = res;
			posterInfo = await getUserData(offerInfo.userID);

			console.log("offerInfo" + offerInfo);
			console.log("posterInfo" + posterInfo);
			
		});
	});
</script>

<svelte:head>
	<title>Offer Post</title>
	<meta name="description" content="Profle page" />
</svelte:head>

<div class="text-column">
	<h1>Offer Post</h1>

	<p>
		Offer Post ID: {offerInfo._id}
	</p>

	<!-- Use data from the API call here -->
	<div>
		<p>
			Title: {offerInfo.title}
		</p>
		<p>
			Description: {offerInfo.description}
		</p>

		<p>
			Tags:
		</p>
		<ListGroup>
			{#each offerInfo.tags as item}
				<ListGroupItem>
					{item}
				</ListGroupItem>
			{/each}
		</ListGroup>

		<p>
			Location: {offerInfo.location}
		</p>

		<p>
			Payment: {offerInfo.payment}
		</p>

		<p>
			Post Time: {offerInfo.postTime}
		</p>

		<p>
			Offer Open: {offerInfo.offerOpen}
		</p>

		<p>
			Poster ID: {offerInfo.userID}
		</p>

		<!-- Accordian for poster info -->
		<Accordion stayOpen>
			<AccordionItem active header="Poster Info">
				<p>
					Poster ID: {posterInfo._id}
				</p>
				<p>
					Username: {posterInfo.username}
				</p>
				<p>
					Job Title: {posterInfo.jobTitle}
				</p>
				<p>
					Description: {posterInfo.description}
				</p>
				<ListGroup>
					{#each posterInfo.experience as item}
						<ListGroupItem>
							Experience: {item}
						</ListGroupItem>
					{/each}
				</ListGroup>
			</AccordionItem>
		  </Accordion>

		<hr>

		<!-- Comments section -->

		<!-- Add comment button -->

	</div>
</div>
