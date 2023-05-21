<svelte:head>
	<title>Login</title>
	<meta name="description" content="View Requests from Mentees" />
</svelte:head>

<div style="text-align: center;" class="text-column">
	<h1>LOGIN</h1>

	<!-- login stuffs -->
    <form action="/" method="post">
      <div style="font-size: 25px;">
        <label for="userId">User ID</label>
        <input type="text" id="userId" name="userId" style="height: 25px; font-size: 22px;">
      </div>
  
      <div style="margin: 10px;"></div>
  
      <div style="font-size: 25px;">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" style="height: 25px; font-size: 22px;">
      </div>
    </form>

	<br>

	<nav>
	  <a style="font-size: 25px;" href="/">login</a><br><br>
    <a style="font-size: 25px;" href="/create">create new user</a><br><br>
	</nav>

</div>
