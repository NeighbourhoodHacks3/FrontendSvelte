<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import logo from '$lib/images/mentormelogo.png';
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
	<!-- Side by side div -->
	<div class="headerDiv">
		<img src={logo} alt="logo" style="height: 400px; " />

		<h2 class="bannerText">
			Welcome to MentorMe, a platform for mentors and mentees to connect and learn from each other
			on how to run a small business.
		</h2>
	</div>

	<br />

	<div class="info2">
		<h1 class="">Find a mentor</h1>

		<h2>Find a mentor who can help you with your small business</h2>

		<div class="catPeopleDiv">
			<img class="catPic" style="" src={programmer} alt="programmer" />
			<img class="catPic" src={teacher} alt="teacher" /><br />
			<img class="catPic" src={graphicdesigner} alt="graphicdesigner" />
			<img class="catPic" src={artist} alt="artist" />
		</div>
	</div>

	<br />

	<nav>
		<a style="font-size: 20px;" href="/about">Find out more!</a><br /><br />
	</nav>
</body>

<style>
	.body {
		height: 50%;
		width: 100%;
	}

	.bannerText {
		width: 50%;
		margin: 10px;
	}

	.headerDiv {

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.info2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 350px;
		background-color: rgb(199, 194, 248);
	}

	h1 {
		font-size: 2em;
	}

	h2 {
		font-size: 1.3em;
	}

	.catPic {
		height: 150px;
		width: 150px;
		margin: 10px;
	}

	.catPeopleDiv {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
