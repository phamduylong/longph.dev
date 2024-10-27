<script>
	import BlogPostPreviewCard from '$lib/components/BlogPostPreviewCard.svelte';

	/**
	 * @type {{ posts: [{ id:string,
	 * 					  title: string,
	 * 					  content: string,
	 *                    tags: string[],
	 * 				  	  snippets: [{ lang: string, code: string }]
	 *                    created: Date,
	 *                    updated: Date }] }}
	 */
	export let data;
</script>

<svelte:head>
	<meta name="description" content="Long Pham's personal blog" />
	<title>Long Pham - Blog</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center p-4 md:p-10">
	<div class="container h-full md:w-5/6 xl:w-3/5 grid grid-cols-1 gap-y-5 items-center">
		<h1 class="h1 font-bold text-center mb-8">Blog</h1>
		{#each data.posts as post}
			<BlogPostPreviewCard {post} />
		{/each}
	</div>
</div>
