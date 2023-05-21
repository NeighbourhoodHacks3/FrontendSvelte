<script lang="ts">
	import { login } from '$lib/api.js';
	import { Form, FormGroup, Input } from 'sveltestrap';
	import { redirect } from '@sveltejs/kit';
	import { currentUser } from '$lib/stores';

	// 	/** @type {string} */ userID,
	// /** @type {string} */ title,
	// /** @type {string} */ description,
	// /** @type {string[]} */ tags,
	// /** @type {string} */ location,
	// /** @type {string} */ payment

	var userInfo = {
		email: '',
		password: ''
	};

	var infoMsg = 'Please enter your email and password';

	async function submitForm() {
		// Form validation
		if (userInfo.email == '' || userInfo.password == '') {
			alert('Please fill out all fields');
			return;
		}

		// Await, then use then do the alert when the API call is done
		login(userInfo.email, userInfo.password).then((updateResponse) => {
			alert(updateResponse);

			// Check if it has the fields we want
			if (updateResponse.hasOwnProperty('_id')) {
				currentUser.set({
					userID: updateResponse._id,
					name: updateResponse.name,
					email: updateResponse.email,
					password: updateResponse.password
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
	<title>Login</title>
	<meta name="description" content="View Offers from Mentors" />
</svelte:head>

<div class="text-column">
	<h1>Login to MentorMe</h1>

	<br />
	<p class="sub-title" style="text-align: center;">{infoMsg}</p>
	<br />

	<Form>
		<FormGroup floating label="Email">
			<!-- Show existing jobTitle if any -->
			<Input type="text" name="email" id="email" bind:value={userInfo.email} />
		</FormGroup>

		<FormGroup floating label="Password">
			<!-- Show existing jobTitle if any -->
			<Input type="password" name="password" id="password" bind:value={userInfo.password} />
		</FormGroup>
	</Form>

	<button
		class="btn btn-primary"
		on:click={() => {
			submitForm();
		}}
	>
		Login
	</button>

	<hr />

	<nav style="text-align: center;">
		<a style="font-size: 1.3em;" href="/signup">SignUp instead</a>
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
