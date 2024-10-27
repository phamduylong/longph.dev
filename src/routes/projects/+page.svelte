<script>
	import ProjectFrame from '$lib/components/ProjectFrame.svelte';
	/**
	 * @type { readonly { name: string, alt: string, repoUrl: string, demoUrl: string }[] }
	 */
	const projects = Object.freeze([
		{
			name: 'alias',
			alt: 'Alias-like web app',
			repoUrl: 'https://github.com/phamduylong/AliasWebBased',
			demoUrl: 'https://alias-web-based.vercel.app/'
		},
		{
			name: 'cart',
			alt: 'Shopping cart web app',
			repoUrl: 'https://github.com/phamduylong/ShoppingList',
			demoUrl: 'https://shopping-list-pi-three.vercel.app/'
		},
		{
			name: 'cv',
			alt: 'CV web app',
			repoUrl: 'https://github.com/phamduylong/longph.com/',
			demoUrl: 'https://longph.vercel.app/'
		},
		{
			name: 'fpvoter',
			alt: 'Fingerprint voting system',
			repoUrl: 'https://github.com/phamduylong/fp-voter-frontend',
			demoUrl: 'https://fp-voter-frontend.vercel.app/'
		},
		{
			name: 'personal',
			alt: 'Personal website',
			repoUrl: 'https://github.com/phamduylong/longph.dev',
			demoUrl: 'https://longph.com'
		},
		{
			name: 'quotes',
			alt: 'Netflix quotes generator',
			repoUrl: 'https://github.com/phamduylong/RandomNetflixQuotes',
			demoUrl: 'random-netflix-quotes.vercel.app'
		}
	]);
</script>

<svelte:head>
	<title>Long Pham - Projects</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center p-8">
	<div class="space-y-8 md:space-y-12 flex flex-col items-center text-justify">
		<h1 class="h1 font-serif text-5xl my-8">Projects</h1>
		<div
			class="container h-full md:w-4/5 grid grid-cols-1 xl:grid-cols-2 xl:gap-x-8 gap-y-5 md:gap-y-12"
		>
			{#each projects as project}
				<ProjectFrame {project} />
			{/each}
		</div>
	</div>
</div>
