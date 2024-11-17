<script lang="ts">
	import '../app.css';
	import {writable} from 'svelte/store';
	import { page } from '$app/stores';
	import { 
		Footer, 
		FooterBrand, 
		FooterCopyright, 
		FooterIcon, 
		FooterLink, 
		FooterLinkGroup,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		DarkMode
	} from 'flowbite-svelte';
	let { children } = $props();
	let activeUrl = $state($page.url.pathname);
	$effect(() => {
		activeUrl = $page.url.pathname;
	})
</script>

<header class="relative z-10">
	<Navbar rounded color="form">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">tochiman.com</span>
		</NavBrand>
		<div class="flex md:order-2">
			<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800"/>
			<NavHamburger />
		  </div>
		<NavUl class="order-1" {activeUrl}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/profile">Profile</NavLi>
			<NavLi href="https://blog.tochiman.com">blog</NavLi>
		</NavUl>
	</Navbar>
</header>

{@render children()}

{#if activeUrl !== "/"  }
<footer>
	<Footer footerType="logo">
		<div class="sm:flex sm:items-center sm:justify-between">
			<FooterBrand href="/" name="tochiman.com" />
			<FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
				<FooterLink href="/">Home</FooterLink>
				<FooterLink href="/profile">Profile</FooterLink>
				<FooterLink href="https://blog.tochiman.com">blog</FooterLink>
			</FooterLinkGroup>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<FooterCopyright href="/" by="tochiman" />
	</Footer>
</footer>
{/if}

<style>
	:global(body) {
		font-family: Helvetica, Arial, sans-serif;
		padding: 20px;
	}
	:global(header) {
		margin-bottom: 15px;
	}
	:global(footer) {
		margin-top: 15px;
	}
</style>