<script>
	import { CodeBlock, Avatar } from '@skeletonlabs/skeleton';
	import { CODE_MARKER } from '$lib/helper/constants';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	
	/**
	 * @typedef {Object} Props
	 * @property {any} data
	 */

	/** @type {Props} */
	let { data } = $props();
	let updatedDate = $derived(new Date(data.post.updated));
</script>

{#if data.post.toc}
	<TableOfContents class="hidden xl:block fixed top-1/4 w-64 p-2 mx-4 h-1/2 overflow-scroll" />
{/if}
<main>
	<div class="my-10 flex flex-wrap justify-center">
		<Avatar src="/pp.png" alt="Profile picture" width="w-16" />
		<div class="basis-full h-0"></div>
		<div class="text-xl">Long Pham</div>
		<div class="basis-full h-0"></div>
	</div>

	<div class="text-sm text-center">
		{updatedDate.toLocaleString('default', { month: 'long' })}
		{updatedDate.getDate()}, {updatedDate.getFullYear()}
	</div>

	<div
		class="container mx-auto h-full flex flex-wrap items-center space-y-5 md:space-y-10 justify-center md:w-4/5 xl:w-3/5 p-5"
		use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }}
	>
		<h2 class="h2 font-bold text-center">{data.post.title}</h2>
		<article class="text-justify text-pretty">
			<!-- Split content by CODE_MARKER and render the content without the marker -->
			<!-- If there is a snippet, render the code block -->
			{#each data.post.content.split(CODE_MARKER) as part, i (i)}
				{@html part.replaceAll(CODE_MARKER, '')}
				{#if data.post.snippets && i < data.post.snippets.length}
					<!-- Let's not have line numbers in smaller views so that it is easier to read wrapped text -->
					<CodeBlock
						class="my-4 hidden md:block"
						lineNumbers={true}
						buttonCopied="Copied ✅"
						language={data.post.snippets[i].lang}
						code={`${data.post.snippets[i].code}`}
					/>
					<CodeBlock
						class="my-4 block md:hidden"
						lineNumbers={false}
						buttonCopied="Copied ✅"
						language={data.post.snippets[i].lang}
						code={`${data.post.snippets[i].code}`}
					/>
				{/if}
			{/each}
		</article>
	</div>
</main>
