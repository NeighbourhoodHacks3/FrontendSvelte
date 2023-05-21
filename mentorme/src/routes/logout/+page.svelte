<script lang="ts">
	import { currentUser } from '$lib/stores.js';
  
	function login() {
	  let user_value: { email?: string; password?: string };
  
	  let email = document.getElementById('email');
	  let password = document.getElementById('password');
	  
	  currentUser.subscribe((value) => {
			user_value = value;
		});
  
	  //push to db
	}
  
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="View Requests from Mentees" />

	<!-- update stores.js to all null -->
</svelte:head>

<div style="text-align: center;" class="text-column">
	<h1>LOGIN</h1><br><br>

	<!-- login stuffs -->
    <form action="/" method="post">
		<div style="font-size: 25px;">
		  <label for="email">email</label>
		  <input type="text" id="email" name="email" style="height: 35px; font-size: 22px;">
		</div>
	
		<div style="margin: 10px;"></div>
	
		<div style="font-size: 25px;">
		  <label for="password">Password</label>
		  <input type="password" id="password" name="password" style="height: 35px; font-size: 22px;">
		</div>

		<div style="margin: 10px;"></div>
  
		<button class="btn btn-primary" on:click={login}>Login</button>
	  </form>
  
	  <br>
  
	  <nav>
	  	<a style="font-size: 25px;" href="/create">create new user</a><br><br>
	  </nav>
</div>
