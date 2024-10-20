<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup,  Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import { Menu } from 'lucide-svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();
	const drawerSettings = {
	id: 'menu-drawer',
	width: 'w-full',
	height: 'h-1/4',
	padding: 'p-4',
	rounded: 'rounded-xl',
};
</script>
<Drawer>
	{#if $drawerStore.id === "menu-drawer"}
		<div class="flex flex-col items-center justify-center h-full px-4">
			<a class="btn hover:variant-soft-primary w-full" href="/portfolio" on:click={() => drawerStore.close()} rel="noreferrer"> Portfolio </a>
			<hr class="w-full my-1" />
			<a class="btn hover:variant-soft-primary w-full" href="/blog" on:click={() => drawerStore.close()} rel="noreferrer"> Blog </a>
			
			<hr class="w-full my-1" />
			<a
				class="btn hover:variant-soft-primary w-full"
				href="https://github.com/phamduylong"
				target="_blank"
				rel="noreferrer"
				on:click={() => drawerStore.close()}
			>
				GitHub
			</a>
		</div>
	{/if}
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a class="text-xl uppercase select-none font-bold" href="/">LONGPH.DEV</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<a class="btn hover:variant-soft-primary" href="/portfolio" rel="noreferrer"> Portfolio </a>
					<a class="btn hover:variant-soft-primary" href="/blog" rel="noreferrer"> Blog </a>
					<a
						class="btn hover:variant-soft-primary"
						href="https://github.com/phamduylong"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>

				<button class="md:hidden" on:click={() => drawerStore.open(drawerSettings)}>
					<Menu
					/>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
