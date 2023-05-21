<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import logo from '$lib/images/logo.png';
	import programmer from '$lib/images/programmer.png';
	import teacher from '$lib/images/teacher.png';
	import graphicdesigner from '$lib/images/graphicdesigner.png';
	import artist from '$lib/images/artist.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<body style="text-align: center;">
	<img src={logo} alt="logo">

	<div style="margin: 30px;"></div>

	<!-- can use this to implement searchbar
	https://framework7.io/svelte/searchbar -->

	<input style="height: 50px; font-size: 35px;" type="text" placeholder="Seach...">

	<div style="margin: 30px;"></div>

	<div>
		<img style="padding: 10px; height: 300px; width: 300px; margin-right: 300px;" src={programmer} alt="programmer">
		<img style="padding: 10px; height: 300px; width: 300px;" src={teacher} alt="teacher"><br>
		<img style="padding: 10px; height: 300px; width: 300px; margin-right: 300px;" src={graphicdesigner} alt="graphicdesigner">
		<img style="padding: 10px; height: 300px; width: 300px;" src={artist} alt="artist">
	</div>

	<div style="margin: 30px;"></div>

	<nav>
		<a style="font-size: 20px;" href="/about">need help?</a><br><br>
	</nav>
</body>

<!--
<section>
	<h1 style="font-style: italic; font-weight:bold">
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>-->

	<!--<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>-->

	<!-- login stuffs -->
	<!--
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
		<a style="font-size: 20px;" href="/profile">create new user</a><br><br>
	</nav>
</section>-->

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
