<script lang="ts">
	// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';

	// let isOpen = false;
	// const toggle = () => (isOpen = !isOpen);

	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event: { detail: { isOpen: boolean } }) {
		isOpen = event.detail.isOpen;
	}

    
    
    var user = {
        name: "cyberyeet",
        email: "cyberyeet@gmail.com",
        userID: "6468ec339d23f8e8ae7ca59c",
    };

</script>

<Navbar color="light" light expand="md">
	<NavbarBrand href="/">MentorMe</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/about/">About</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/requests/">Requests</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/offers/">Offers</NavLink>
			</NavItem>
			<!-- <NavItem>
        <NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
      </NavItem> -->
			{#if user != null}
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Profile</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>
                            <!-- <NavLink href="/profile/">View profile</NavLink> -->
                            <NavLink href="/profile/{user.userID}">View profile</NavLink>
                            </DropdownItem>
						<DropdownItem>Update profile</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Log out</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			{:else}
				<NavItem>
					<NavLink href="/login/">Login</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/signup/">Sign Up</NavLink>
				</NavItem>
			{/if}
		</Nav>
	</Collapse>
</Navbar>

<!-- <Navbar color="light" light>
	<NavbarBrand href="/" class="me-auto">MentorMe</NavbarBrand>
	<NavbarToggler on:click={toggle} class="me-2" />
	<Collapse {isOpen} navbar>
		<Nav navbar>
			<NavItem>
				<NavLink href="/about/">About</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/requests/">Requests</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/offers/">Offers</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://github.com/NeighbourhoodHacks3/FrontendSvelte">Frontend Code</NavLink
				>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar> -->
