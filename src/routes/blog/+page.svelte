<script>
	import BlogPostPreviewCard from '$lib/components/BlogPostPreviewCard.svelte';
	import { InputChip, Autocomplete } from '@skeletonlabs/skeleton';
	/**
	 * @type {{ blogs: { id:string,
	 * 					  title: string,
	 *                    tags: string[],
	 *                    created: Date,
	 *                    updated: Date }[] }}
	 */
	import { blogs } from '$lib/assets/data';
	let inputChip = '';
	/**
	 * @type {{ value: string, label: string }[]}
	 */
	$: options = [...new Set(posts.map((item) => item.tags).flat())].map((value) => ({
		label: value,
		value: value
	}));
	/**
	 * @type {string[]}
	 */
	let chosenTags = [];
	/**
	 *
	 * @param event {{ detail: { value: string, label: string } }}
	 */
	function onFlavorSelection(event) {
		if (!chosenTags.includes(event.detail.value)) {
			chosenTags = [...chosenTags, event.detail.value];
			inputChip = '';
		}
	}

	// Filter posts based on chosen tags and sort by updated date
	$: posts = blogs
		.filter((post) => {
			if (chosenTags.length === 0) {
				return true;
			}
			return chosenTags.every((tag) => post.tags.includes(tag));
		})
		.sort((a, b) => b.updated.getTime() - a.updated.getTime());
</script>

<svelte:head>
	<meta name="description" content="Long Pham's personal blog" />
	<title>Long Pham - Blog</title>
</svelte:head>

<div class="container h-full mx-auto flex flex-col justify-center items-center p-4 md:p-10">
	<div class="container h-full md:w-5/6 xl:w-3/5 grid grid-cols-1 gap-y-5 items-start">
		<h1 class="h1 font-serif text-5xl my-8 text-center">Blog</h1>

		<div class="flex flex-col items-center space-y-2">
			<InputChip
				placeholder="Select keywords..."
				bind:input={inputChip}
				bind:value={chosenTags}
				name="chips"
				class="max-w-sm"
			/>
			<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
				<Autocomplete
					bind:input={inputChip}
					{options}
					denylist={chosenTags}
					on:selection={onFlavorSelection}
					emptyState="No tags found!"
				/>
			</div>
		</div>
		{#each posts as post}
			<BlogPostPreviewCard
				{post}
				on:tagselected={(e) => {
					if (!chosenTags.includes(e.detail)) {
						chosenTags = [...chosenTags, e.detail];
					}
				}}
			/>
		{/each}
	</div>
</div>
