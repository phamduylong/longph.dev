<script>
    import { page } from '$app/stores';
	import { Loader } from 'lucide-svelte';
    import { toTitleCase } from '$lib/helper/common';
</script>

<svelte:head>
	<title>Long Pham - Project {toTitleCase($page.params.project)}</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center p-10">
	<p class="inline-block font-bold mx-4">Coming soon</p>
	<Loader size={28} class="h1 inline-block animate-spin-slow" />
</div>
