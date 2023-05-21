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
	import { getRequestPost, getUserData, getRequestComments, createRequestComment } from '$lib/api.js';
	import { Accordion, AccordionItem } from 'sveltestrap';
	import { currentUser } from '$lib/stores.js';

	/** @type {import('./$types').PageData}*/
	export let data = {};


	var requestInfo = {
		_id: '',
		description: '',
		location: '',
		requestOpen: true,
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
		await getRequestPost(data.requestPostID).then(async (res) => {
			requestInfo = res;
			posterInfo = await getUserData(requestInfo.userID);

			comments = await getRequestComments(requestInfo._id);
		});
	});

	function formatDate(date: string) {
		var d = new Date(date);
		return d.toLocaleString();
	}

	function submitComment() {
		// Await, then use then do the alert when the API call is done
		createRequestComment(user_value.userID, requestInfo._id, newComment).then((updateResponse) => {
			alert(updateResponse);
			newComment = '';
		});
	}
</script>

<svelte:head>
	<title>Request Post</title>
	<meta name="description" content="Profle page" />
</svelte:head>

<div class="text-column">
	<h1>Request Post</h1>

	<!-- <p>
		Request Post ID: {requestInfo._id}
	</p> -->

	<!-- Use data from the API call here -->
	<div>
		<p>
			Title: {requestInfo.title}
		</p>
		<p>
			Description: {requestInfo.description}
		</p>

		<p>Tags:</p>
		{#if requestInfo.title == '' || requestInfo.title == null || requestInfo.tags.length == 0}
			<p>No tags</p>
		{:else}
			<ListGroup>
				{#each requestInfo.tags as item}
					<ListGroupItem>
						{item}
					</ListGroupItem>
				{/each}
			</ListGroup>
		{/if}

		<p>
			Location: {requestInfo.location}
		</p>

		<p>
			Payment: {requestInfo.payment}
		</p>

		<p>
			Post Time: {formatDate(requestInfo.postTime)}
		</p>

		<p>
			Offer Open: {requestInfo.requestOpen}
		</p>

		<p>
			Poster ID: {requestInfo.userID}
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
