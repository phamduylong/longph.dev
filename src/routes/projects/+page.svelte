<script>
	import ProjectFrame from '$lib/components/ProjectFrame.svelte';
	/**
	 * @type { readonly { name: string, alt: string, repoUrl: string, demoUrl: string }[] }
	 */
	import { projects } from '$lib/assets/data';
</script>

<svelte:head>
	<title>Long Pham - Projects</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center p-8">
	<div class="space-y-8 md:space-y-12 flex flex-col items-center">
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
