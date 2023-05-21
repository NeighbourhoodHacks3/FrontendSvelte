<script lang="ts">
	import {
		Button,
		Form,
		FormGroup,
		Input,
		ListGroup,
		ListGroupItem,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle
	} from 'sveltestrap';
	import { onMount } from 'svelte';
	import { getOfferPost, getUserData, getOfferComments, createOfferComment } from '$lib/api.js';
	import { Accordion, AccordionItem } from 'sveltestrap';
	import { currentUser } from '$lib/stores.js';

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

	var comments: string | any[] = [];

	var newComment: string = '';

	let user_value: { userID: any; name?: string; email?: string; password?: string };

	currentUser.subscribe((value) => {
		user_value = value;
	});

	onMount(async () => {
		// Make the API Call here
		// @ts-ignore
		await getOfferPost(data.offerPostID).then(async (res) => {
			offerInfo = res;
			posterInfo = await getUserData(offerInfo.userID);

			comments = await getOfferComments(offerInfo._id);
		});
	});

	function formatDate(date: string) {
		var d = new Date(date);
		return d.toLocaleString();
	}

	function submitComment() {
		// Await, then use then do the alert when the API call is done
		createOfferComment(user_value.userID, offerInfo._id, newComment).then((updateResponse) => {
			alert(updateResponse);
			newComment = '';
		});
	}
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

		<p>Tags:</p>
		{#if offerInfo.title == '' || offerInfo.title == null || offerInfo.tags.length == 0}
			<p>No tags</p>
		{:else}
			<ListGroup>
				{#each offerInfo.tags as item}
					<ListGroupItem>
						{item}
					</ListGroupItem>
				{/each}
			</ListGroup>
		{/if}

		<p>
			Location: {offerInfo.location}
		</p>

		<p>
			Payment: {offerInfo.payment}
		</p>

		<p>
			Post Time: {formatDate(offerInfo.postTime)}
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
					<a href={'/profile/' + posterInfo._id}>
						Poster ID: {posterInfo._id}
					</a>
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
					{#if posterInfo.username == '' || posterInfo.username == null || posterInfo.experience.length == 0}
						<ListGroupItem>No experience listed</ListGroupItem>
					{:else}
						{#each posterInfo.experience as item}
							<ListGroupItem>
								Experience: {item}
							</ListGroupItem>
						{/each}
					{/if}
				</ListGroup>
			</AccordionItem>
		</Accordion>

		<hr />

		<!-- Comments section -->
		<h2>Comments</h2>

		{#if comments.length == 0}
			<p>No comments</p>
		{:else}
			{#each comments as item}
				<!-- <div>
					<p>
						Comment ID: {item._id}
					</p>
					<p>
						Comment: {item.comment}
					</p>
					<p>
						Comment Time: {item.commentTime}
					</p>
					<p>
						Commenter ID: {item.userID}
					</p>
				</div> -->

				<!-- Card -->
				<Card>
					<CardBody>
						<CardTitle>
							<!-- User ID and link -->
							<a href={'/profile/' + item.userID}>
								User: {item.userID}
							</a>
						</CardTitle>
						<CardSubtitle>
							Comment Time: {formatDate(item.commentTime)}
						</CardSubtitle>
						<CardText>
							Comment: {item.comment}
						</CardText>
					</CardBody>
				</Card>
			{/each}
		{/if}

		<br />

		<!-- Add comment button -->
		<h3>Add Comment</h3>
		<Form>
			<FormGroup floating label="Comment">
				<!-- Show existing description if any -->
				<Input
					type="textarea"
					name="description"
					id="comment"
					style="height: 100px"
					bind:value={newComment}
				/>
			</FormGroup>
		</Form>

		<Button color="primary" on:click={submitComment}>Submit Comment</Button>
	</div>
</div>

<style>
	h2 {
		font-size: 1.5rem;
	}

	h3 {
		font-size: 1rem;
	}
</style>
