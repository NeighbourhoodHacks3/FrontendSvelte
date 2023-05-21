<script lang="ts">
	import { onMount } from 'svelte';
	import { getUserData, updateUserProfile } from '$lib/api.js';
	import { currentUser } from '$lib/stores.js';
	import { Badge, Form, FormGroup, Input, Label } from 'sveltestrap';


	var res = {
		_id: '',
		description: '',
		experience: [''],
		jobTitle: '',
		username: ''
	};

	let experience_array: string[] = [];

	let user_value: { userID: any; name?: string; email?: string; password?: string };

	currentUser.subscribe((value) => {
		user_value = value;
	});

	onMount(async () => {
		// Make the API Call here
		// @ts-ignore
		res = await getUserData(user_value.userID);

		experience_array = res.experience;
	});

	async function submitForm() {
		// Await, then use then do the alert when the API call is done
		updateUserProfile(
			res.username,
			// @ts-ignore
			user_value.email,
			user_value.password,
			res._id,
			res.description,
			res.jobTitle,
			experience_array
		).then((updateResponse) => {
			alert(updateResponse);
		});
	}
	

</script>

<svelte:head>
	<title>Update Profile</title>
	<meta name="description" content="View Offers from Mentors" />
</svelte:head>

<div class="text-column">
	<h1>Update Profile: {res.username}</h1>

	<p class="centered">
		User ID: {res._id}
	</p>

	<hr />

	<Form>
		<FormGroup floating label="Description / Bio">
			<!-- Show existing description if any -->
			<Input
				type="textarea"
				name="description"
				id="description"
				style="height: 120px"
				bind:value={res.description}
			/>
		</FormGroup>

		<FormGroup floating label="Job Title">
			<!-- Show existing jobTitle if any -->
			<Input type="text" name="jobTitle" id="jobTitle" bind:value={res.jobTitle} />
		</FormGroup>

		<!-- Experience, can add more elements -->
		<Label for="experience">
			Experience:
		</Label>
		<FormGroup floating label="">
			
			{#each experience_array as experience, i}
				<div class="d-flex">
					<Input
						type="text"
						name="experience"
						id="experience"
						bind:value={experience_array[i]}
					/>
					<button
						class="btn btn-danger"
						on:click={() => {
							experience_array.splice(i, 1);
							experience_array = experience_array;
						}}
					>
						Remove
					</button>
				</div>
			{/each}
			<button
				class="btn btn-primary"
				on:click={() => {
					experience_array.push('');
					experience_array = experience_array;
				}}
			>
				Add
			</button>
		</FormGroup>
	</Form>
	
	<button
		class="btn btn-primary"
		on:click={() => {
			submitForm();
		}}
	>
		Save
	</button>

</div>

<!-- <form action="">
		<label for="description">Description / Bio:</label>
		<textarea
			name="description"
			id="description"
			cols="30"
			rows="10"
			bind:value={res.description}
		/>
	
		<label for="jobTitle">Job Title:</label>
		<input type="text" name="jobTitle" id="jobTitle" bind:value={res.jobTitle} />
	
		<label for="experience">Experience:</label>
	</form> -->

<!-- 
{
    "username": "cyberyeetus",
    "email": "cyberyeetus@gmail.com",
    "password": "superbadpassword1234234q2",
    "description": "New twitch streamer",
    "jobTitle": "Digital Art Novice",
    "experience": [
        "digital art",
        "marketing for sticker business",
        "art fair stall runner"
    ]
} -->

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}
	/*
	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	} */
</style>
