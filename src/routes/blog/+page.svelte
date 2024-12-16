<script>
	import BlogPostPreviewCard from '$lib/components/BlogPostPreviewCard.svelte';
	import { InputChip, Autocomplete } from '@skeletonlabs/skeleton';
	/**
	 * @type {{ posts: [{ id:string,
	 * 					  title: string,
	 * 					  content: string,
	 *                    tags: string[],
	 * 				  	  snippets: [{ lang: string, code: string }],
	 * 				      toc: boolean,
	 *                    created: string,
	 *                    updated: string }] }}
	 */
	export let data;
	let inputChip = '';
	/**
	 * @type {{ value: string, label: string }[]}
	 */
	$: options = data.posts.reduce((acc, post) => {
		const tags = post.tags.map(tag => ({ value: tag, label: tag }));
		console.table([...acc, ...tags]);
		return [...acc, ...tags];
	}, []);
	/**
	 * @type {string[]}
	 */
	let chosenTags = [];

	/**
	 * 
	 * @param event {{ detail: { value: string, label: string } }}
	 */
	function onFlavorSelection(event) {
		chosenTags = [...chosenTags, event.detail.label];
		// Find a way to persist the chosen tags
		window.location.href = `/blog?tag=${chosenTags.join('&tag=')}`;
	}
</script>

<svelte:head>
	<meta name="description" content="Long Pham's personal blog" />
	<title>Long Pham - Blog</title>
</svelte:head>

<div class="container h-full mx-auto flex flex-col justify-center items-center p-4 md:p-10">
	<div class="container h-full md:w-5/6 xl:w-3/5 grid grid-cols-1 gap-y-5 items-start">
		<h1 class="h1 font-serif text-5xl my-8 text-center">Blog</h1>
		
		<div class="flex flex-col items-center space-y-2">
			<InputChip bind:input={inputChip} bind:value={chosenTags} name="chips" class="max-w-sm"/>
			<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
				<Autocomplete
					bind:input={inputChip}
					{options}
					chosenTags={chosenTags}
					on:selection={onFlavorSelection}
					emptyState="No tags found!"
				/>
			</div>
		</div>
		{#each data.posts as post}
			<BlogPostPreviewCard {post} />
		{/each}
	</div>
</div>
