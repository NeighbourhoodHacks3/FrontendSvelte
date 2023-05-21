<script lang="ts">
	import { login } from '$lib/api.js';
  import logo from '$lib/images/logo.png';

	function enter() {
		let email = document.getElementById('email');
		let password = document.getElementById('password');

		if (email == null || password == null) {
			alert('No such user details. Please re-enter details!');
		} else {
			login(email.toString(), password.toString());
		}
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="View Requests from Mentees" />
</svelte:head>

<div style="text-align: center;" class="text-column;">
	<img src={logo} alt="logo" />

	<div style="margin: 30px;" />

	<h1>LOGIN</h1>

	<div style="margin: 30px;" />

	<!-- login stuffs -->
	<form action="/" method="post">
		<div style="font-size: 25px;">
			<label for="email">Email</label>
			<input type="text" id="email" name="email" style="height: 35px; font-size: 22px;" />
		</div>

		<div style="margin: 10px;" />

		<div style="font-size: 25px;">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" style="height: 35px; font-size: 22px;" />
		</div>

		<div style="margin: 20px;" />

		<button class="btn btn-primary" on:click={enter}>Login</button>
	</form>

	<div style="margin: 20px;" />

	<nav>
		<a style="font-size: 25px;" href="/signup">create new user</a><br /><br />
	</nav>
</div>
