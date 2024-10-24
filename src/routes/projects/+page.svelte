<script>
	import ProjectFrame from '$lib/components/ProjectFrame.svelte';
	const projects = [
		{ project: 'alias', alt: 'Alias-like web app' },
		{ project: 'cart', alt: 'Shopping cart web app' },
		{ project: 'cv', alt: 'CV web app' },
		{ project: 'fpvoter', alt: 'Fingerprint voting system' },
		{ project: 'personal', alt: 'Personal website' },
		{ project: 'quotes', alt: 'Netflix quotes generator' }
	];
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
			{#each projects as { project, alt }}
				<ProjectFrame {project} {alt} />
			{/each}
		</div>
	</div>
</div>
