<script>
	import ProjectFrame from "$lib/components/ProjectFrame.svelte";
	const projects = [
		{project: "alias", alt: "Alias-like web app"},
		{project: "cart", alt: "Shopping cart web app"},
		{project: "cv", alt: "CV web app"},
		{project: "fpvoter", alt: "Fingerprint voting system"},
		{project: "personal", alt: "Personal website"},
		{project: "quotes", alt: "Netflix quotes generator"},
	]
</script>

<svelte:head>
	<title>Long Pham - Projects</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center p-8">
	<div class="space-y-8 md:space-y-12 flex flex-col items-center text-justify">
		<h1 class="h1 font-serif text-5xl my-8">Projects</h1>
		<div class="container h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
			{#each projects as {project, alt}}
				<ProjectFrame {project} {alt} />
			{/each}
		
		</div>
	</div>
</div>
