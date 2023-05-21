<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!--
	<h1 style="font-style: italic; font-weight:bold">
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>-->

	<img src="../images/icon.png" alt="display icon">

	<br><br>

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

	<!--<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>-->

	<br>

	<nav>
		<a style="font-size: 20px;" href="/profile">create new user</a><br><br>
	</nav>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
