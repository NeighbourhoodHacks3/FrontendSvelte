<script lang="ts">
	import { login } from '$lib/api.js';

	let email = document.getElementById('email');
	let password = document.getElementById('password');
  
	function enter() {
	  if (email == null || password == null) {
		alert('No such user details. Please re-enter details!')
	  }
	  else {
		login(email.toString(), password.toString());
	  }
	}

	function clearAll() {
		email = null;
		password = null;
	}
</script>
  
  <svelte:head>
	  <title>Login</title>
	  <meta name="description" content="View Requests from Mentees" />
  </svelte:head>
  
  <div style="text-align: center;" class="text-column;" on:load={clearAll}>
	  <h1>LOGIN</h1>
  
	  <!-- login stuffs -->
	  <form action="/" method="post">
		<div style="font-size: 25px;">
		  <label for="email">email</label>
		  <input type="text" id="email" name="email" style="height: 25px; font-size: 22px;">
		</div>
	
		<div style="margin: 10px;"></div>
	
		<div style="font-size: 25px;">
		  <label for="password">Password</label>
		  <input type="password" id="password" name="password" style="height: 25px; font-size: 22px;">
		</div>
  
		<button class="btn btn-primary" on:click={enter}>Login</button>
	  </form>
  
	  <br>
  
	  <nav>
		<a style="font-size: 25px;" href="/">login</a><br><br>
	  <a style="font-size: 25px;" href="/signup">create new user</a><br><br>
	  </nav>
  
  </div>
  