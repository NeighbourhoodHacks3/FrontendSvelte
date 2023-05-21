<script lang="ts">
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

	import { currentUser } from '$lib/stores';
	import { subscribe } from 'svelte/internal';

	let isOpen = false;

	function handleUpdate(event: { detail: { isOpen: boolean } }) {
		isOpen = event.detail.isOpen;
	}
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
			{#if $currentUser.userID != null}
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Profile</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>
							<!-- <NavLink href="/profile/">View profile</NavLink> -->
							<NavLink href="/profile/{$currentUser.userID}">View profile</NavLink>
						</DropdownItem>
						<DropdownItem>
							<!-- <NavLink href="/profile/">View profile</NavLink> -->
							<NavLink href="/profile/update/">Update profile</NavLink>
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>
							<NavLink href="/requests/create">Post Request</NavLink>
						</DropdownItem>
						<DropdownItem>
							<NavLink href="/offers/create">Post Offer</NavLink>
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>
							<NavLink href="/logout">Log Out</NavLink>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			{:else}
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Profile</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>
							<NavLink href="/login/">Login</NavLink>
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>
							<NavLink href="/signup/">Sign Up</NavLink>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavItem />
			{/if}
		</Nav>
	</Collapse>
</Navbar>
