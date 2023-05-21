<script lang="ts">
	import { createUser } from '$lib/api.js';
	import { Form, FormGroup, Input } from 'sveltestrap';
	import { currentUser } from '$lib/stores';
    import { redirect } from '@sveltejs/kit';

	// 	/** @type {string} */ userID,
	// /** @type {string} */ title,
	// /** @type {string} */ description,
	// /** @type {string[]} */ tags,
	// /** @type {string} */ location,
	// /** @type {string} */ payment

	var userInfo = {
		username: '',
		email: '',
		password: '',
		cfmPassword: ''
	};

	var infoMsg = 'Create a new account';

	async function submitForm() {
		// Form validation
		if (
			userInfo.username == '' ||
			userInfo.email == '' ||
			userInfo.password == '' ||
			userInfo.cfmPassword == ''
		) {
			alert('Please fill out all fields');
			return;
		}

		// Check if password and confirm password match
		if (userInfo.password != userInfo.cfmPassword) {
			alert('Passwords do not match');
			return;
		}

		// Await, then use then do the alert when the API call is done
		createUser(userInfo.username, userInfo.email, userInfo.password).then((updateResponse) => {
			if (updateResponse.hasOwnProperty('_id')) {
				currentUser.set({
					userID: updateResponse._id,
					name: userInfo.username,
					email: userInfo.email,
					password: userInfo.password
				});

				// Redirect to offers page
                window.location.href = "http://127.0.0.1:5173/profile/" + updateResponse._id;

			} else {
				// Update infoMsg
				infoMsg = updateResponse;
			}
		});
	}
</script>

<svelte:head>
	<title>SignUp</title>
	<meta name="description" content="View Offers from Mentors" />
</svelte:head>

<div class="text-column">
	<h1>SignUp for MentorMe</h1>

	<br />
	<p class="sub-title" style="text-align: center;">{infoMsg}</p>
	<br />

	<Form>
		<FormGroup floating label="Username">
			<!-- Show existing jobTitle if any -->
			<Input type="text" name="username" id="username" bind:value={userInfo.username} />
		</FormGroup>

		<FormGroup floating label="Email">
			<!-- Show existing jobTitle if any -->
			<Input type="text" name="email" id="email" bind:value={userInfo.email} />
		</FormGroup>

		<FormGroup floating label="Pasword">
			<!-- Show existing jobTitle if any -->
			<Input type="password" name="password" id="password" bind:value={userInfo.password} />
		</FormGroup>

		<FormGroup floating label="Confirm Pasword">
			<!-- Show existing jobTitle if any -->
			<Input
				type="password"
				name="cfmPassword"
				id="cfmPassword"
				bind:value={userInfo.cfmPassword}
			/>
		</FormGroup>
	</Form>

	<button
		class="btn btn-primary"
		on:click={() => {
			submitForm();
		}}
	>
		SignUp
	</button>

	<hr />

	<nav style="text-align: center;">
		<a style="font-size: 1.3em;" href="/login">Login instead</a>
	</nav>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	.text-column {
		min-width: 30em;
		margin: 0 auto;
	}

	.sub-title {
		font-size: 1.2em;
	}
</style>
