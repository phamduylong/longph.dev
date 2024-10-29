<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { storeTheme } from '$lib/stores/themeStore';
	import { browser } from '$app/environment';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/devibeans.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import vbnet from 'highlight.js/lib/languages/vbnet';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('vb.net', vbnet);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import {
		storePopup,
		Drawer,
		getDrawerStore,
		initializeStores,
		popup,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	import { Menu, Palette, Github, Linkedin, Mail } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();

	// Menu Drawer Settings
	const menuDrawerSettings = {
		id: 'menu-drawer',
		width: 'w-full',
		height: 'h-40',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	// Theme Settings
	const themes = Object.freeze([
		{ type: 'skeleton', name: 'Skeleton', icon: '💀' },
		{ type: 'wintry', name: 'Wintry', icon: '🌨️' },
		{ type: 'modern', name: 'Modern', icon: '🤖' },
		{ type: 'rocket', name: 'Rocket', icon: '🚀' },
		{ type: 'metal', name: 'Metal', icon: '⚙️' },
		{ type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
		{ type: 'vintage', name: 'Vintage', icon: '📺' },
		{ type: 'sahara', name: 'Sahara', icon: '🏜️' },
		{ type: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
		{ type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
		{ type: 'crimson', name: 'Crimson', icon: '⭕' }
	]);

	/**
	 * Set body `data-theme` attribute based on the theme selected
	 * @param param0 {{ formData: FormData }}
	 */
	const setTheme = ({ formData }) => {
		const theme = formData.get('theme')?.toString();
		if (theme) {
			document.body.setAttribute('data-theme', theme);
			$storeTheme = theme;
		}
	};
	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute() {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storeTheme);
	}
</script>

<Drawer>
	{#if $drawerStore.id === 'menu-drawer'}
		<div class="flex flex-col items-center justify-center h-full px-4">
			<a
				class="btn hover:variant-soft-primary w-full"
				href="/projects"
				on:click={() => drawerStore.close()}
				rel="noreferrer"
			>
				Projects
			</a>
			<hr class="w-full my-1" />
			<a
				class="btn hover:variant-soft-primary w-full"
				href="/blog"
				on:click={() => drawerStore.close()}
				rel="noreferrer"
			>
				Blogs
			</a>

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
				<a class="text-xl uppercase select-none font-bold" href="/">LONG PHAM</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<!-- Theme -->
					<div class="inline-block">
						<!-- trigger -->
						<button
							class="btn hover:variant-soft-primary"
							use:popup={{ event: 'click', target: 'theme', closeQuery: 'a[href]' }}
						>
							<span class="hidden md:inline-block"> Themes </span>
						</button>
					</div>
					<a class="btn hover:variant-soft-primary" href="/projects" rel="noreferrer"> Projects </a>
					<a class="btn hover:variant-soft-primary" href="/blog" rel="noreferrer"> Blogs </a>
					<a
						class="btn hover:variant-soft-primary"
						href="https://github.com/phamduylong"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>

				<div class="md:hidden space-x-12 !mr-4">
					<button
						class="inline-block"
						use:popup={{ event: 'click', target: 'theme', closeQuery: 'a[href]' }}
						title="Theme switch button"><Palette /></button
					>
					<button
						class="inline-block"
						title="Menu open button"
						on:click={() => drawerStore.open(menuDrawerSettings)}><Menu /></button
					>
				</div>

				<!-- popup -->
				<div class="fixed card p-4 w-44 md:w-60 shadow-xl z-40" role="dialog" data-popup="theme">
					<div class="space-y-4">
						<section class="flex justify-between items-center">
							<h6 class="h6">Mode</h6>
							<LightSwitch />
						</section>
						<hr />
						<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
							<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
								<ul>
									{#each themes as { icon, name, type }}
										<li>
											<button
												class="option w-full h-full"
												type="submit"
												name="theme"
												value={type}
												class:bg-primary-active-token={$storeTheme === type}
											>
												<span>{icon}</span>
												<span class="flex-auto text-left">{name}</span>
											</button>
										</li>
									{/each}
								</ul>
							</form>
						</nav>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-wrap justify-center text-center my-5 space-y-1">
			<div class="select-none" id="contact">
				<a
					class="anchor"
					href="https://www.linkedin.com/in/duy-long-pham/"
					target="_blank"
					rel="external"
					aria-label="Go to my LinkedIn"
				>
					<Linkedin class="w-5 h-5 md:w-6 md:h-6 inline-block" />
				</a>

				<a
					class="anchor"
					href="https://github.com/phamduylong/"
					target="_blank"
					rel="external"
					aria-label="Go to my GitHub"><Github class="w-5 h-5 md:w-6 md:h-6 inline-block" /></a
				>

				<a
					class="anchor"
					href="mailto:longphamduy2002@gmail.com"
					target="_blank"
					rel="external"
					aria-label="Send me an email"><Mail class="w-5 h-5 md:w-6 md:h-6 inline-block" /></a
				>
			</div>
			<!-- Flex line break -->
			<div class="basis-full h-0"></div>
			<p class="text-sm">&copy; {new Date().getFullYear()} Long Pham. All Rights Reserved.</p>
		</div>
	</svelte:fragment>
</AppShell>
