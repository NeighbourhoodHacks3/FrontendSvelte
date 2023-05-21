<script lang="ts">
	import { createOfferPost } from '$lib/api.js';
	import { currentUser } from '$lib/stores.js';
	import { Badge, Form, FormGroup, Input, Label } from 'sveltestrap';
	import { redirect } from '@sveltejs/kit';

	// 	/** @type {string} */ userID,
	// /** @type {string} */ title,
	// /** @type {string} */ description,
	// /** @type {string[]} */ tags,
	// /** @type {string} */ location,
	// /** @type {string} */ payment

	var res = {
		title: '',
		description: '',
		tags: [],
		location: '',
		payment: 5
	};

	let tags_array: string[] = [];

	let user_value: { userID: any; name?: string; email?: string; password?: string };

	currentUser.subscribe((value) => {
		user_value = value;
	});

	async function submitForm() {
		// A check to confirm the user is happy with the data
		if (!confirm('Are you sure you want to submit this offer?')) {
			return;
		}

		// Await, then use then do the alert when the API call is done
		createOfferPost(
			user_value.userID,
			res.title,
			res.description,
			res.tags,
			res.location,
			res.payment
		).then((updateResponse) => {
			alert(updateResponse);
			redirect(302, '/offers');
		});
	}
</script>

<svelte:head>
	<title>Post Offer</title>
	<meta name="description" content="View Offers from Mentors" />
</svelte:head>

<div class="text-column">
	<h1>Post new Mentorship Offer</h1>

	<Form>
		<FormGroup floating label="Title">
			<!-- Show existing jobTitle if any -->
			<Input type="text" name="title" id="title" bind:value={res.title} />
		</FormGroup>

		<FormGroup floating label="Description">
			<!-- Show existing description if any -->
			<Input
				type="textarea"
				name="description"
				id="description"
				style="height: 120px"
				bind:value={res.description}
			/>
		</FormGroup>

		<!-- Experience, can add more elements -->
		<Label for="experience">Tags:</Label>
		<FormGroup floating label="">
			{#if tags_array.length == 0}
				<p>No tags added yet</p>
			{:else}
				{#each tags_array as experience, i}
					<div class="d-flex">
						<Input type="text" name="experience" id="experience" bind:value={tags_array[i]} />
						<button
							class="btn btn-danger"
							on:click={() => {
								tags_array.splice(i, 1);
								tags_array = tags_array;
							}}
						>
							Remove
						</button>
					</div>
				{/each}
			{/if}
			<button
				class="btn btn-primary"
				on:click={() => {
					tags_array.push('');
					tags_array = tags_array;
				}}
			>
				Add
			</button>
		</FormGroup>

		<FormGroup floating label="Location">
			<!-- Show existing location if any -->
			<Input type="text" name="location" id="location" bind:value={res.location} />
		</FormGroup>

		<FormGroup floating label="Payment (SGD)">
			<!-- Show existing payment if any -->
			<Input type="number" name="payment" id="payment" bind:value={res.payment} />
		</FormGroup>
	</Form>

	<button
		class="btn btn-primary"
		on:click={() => {
			submitForm();
		}}
	>
		Post
	</button>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}
</style>
