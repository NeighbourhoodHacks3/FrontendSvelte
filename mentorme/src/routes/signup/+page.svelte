<svelte:head>
	<title>Mentee's Requests</title>
	<meta name="description" content="View Requests from Mentees" />
</svelte:head>

<div style="text-align: center;" class="text-column">
	<h1>CREATE NEW USER</h1><br>

    <!-- create new user -->
	<form action="/" method="post">
        <div style="font-size: 25px;">
            <label for="userId">Enter username</label>
            <input type="text" id="userId" name="userId" style="height: 25px; font-size: 22px;">
        </div>
    
        <div style="margin: 20px;"></div>
    
        <div style="font-size: 25px;">
            <label for="password">Enter password</label>
            <input type="text" id="password" name="password" style="height: 25px; font-size: 22px;">
        </div>
    
        <div style="margin: 20px;"></div>
    
        <div style="font-size: 25px;">
            <label for="email">Enter email</label>
            <input type="text" id="email" name="email" style="height: 25px; font-size: 22px;">
        </div>
    
        <div style="margin: 20px;"></div>
    
        <div style="font-size: 25px;">
            <label for="description">Enter description</label>
            <input type="text" id="description" name="description" style="height: 25px; font-size: 22px;">
        </div>
    </form>

	<br>

	<nav>
	  <a style="font-size: 25px;" href="/">create</a><br><br>
	</nav>

</div>
