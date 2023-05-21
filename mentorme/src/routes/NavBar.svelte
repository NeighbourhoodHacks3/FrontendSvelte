<script lang="ts">
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink
    } from 'sveltestrap';
  
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
  </script>
  
  <Navbar color="light" light>
    <NavbarBrand href="/" class="me-auto">MentorMe</NavbarBrand>
    <NavbarToggler on:click={toggle} class="me-2" />
    <Collapse {isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <!-- <NavLink href="#about/">about</NavLink> -->
          <NavLink href="about/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/NeighbourhoodHacks3/FrontendSvelte">Frontend Code</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>