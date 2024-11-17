<script>
	import BlogPostPreviewCard from '$lib/components/BlogPostPreviewCard.svelte';

	
	/**
	 * @typedef {Object} Props
	 * @property {any} data
	 */

	/** @type {Props} */
	let { data } = $props();
</script>

<svelte:head>
	<meta name="description" content="Long Pham's personal blog" />
	<title>Long Pham - Blog</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center p-4 md:p-10">
	<div class="container h-full md:w-5/6 xl:w-3/5 grid grid-cols-1 gap-y-5 items-start">
		<h1 class="h1 font-serif text-5xl my-8 text-center">Blog</h1>
		{#each data.posts as post}
			<BlogPostPreviewCard {post} />
		{/each}
	</div>
</div>
