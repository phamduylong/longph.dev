<script>
	import { Avatar } from "@skeletonlabs/skeleton";
	import hljs from 'highlight.js/lib/core';
	import { onMount } from "svelte";
	/**
	 * @type {{ posts: [{ id:string, title: string, content: string, tags: string[], created: Date, updated: Date }] }}
	 */
	export let data;
	onMount(() => {
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<title>Long Pham - Blog</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center p-4 md:p-10">
	<div class="container h-full md:w-4/5 lg:w-3/5 grid grid-cols-1 gap-y-5 items-center">
		<h1 class="h1 font-bold text-center mb-8">Blog</h1>
		{#each data.posts as post}
			<div class="card card-hover p-4 space-y-4">
				<div class="flex space-x-2">
					<Avatar class="w-8 h-8 inline" src="/pp.png" alt="avatar" />
					<div class="inline">Long Pham</div>
				</div>
				<h3 class="h3 font-bold p-2 text-justify">{post.title}</h3>
				<article class="text-justify">{@html post.content}</article>
				<div class="flex justify-between">
					<div class="space-x-2 justify-self-start max-w-1/2 mr-2">
						{#each post.tags as tag}
							<span class="chip variant-filled-secondary mx-2 my-2">#{tag}</span>
						{/each}
					</div>
					<div class="justify-self-end my-2"><i>{new Date(post.created).toDateString()}</i></div>
				</div>
			</div>
		{/each}
	</div>
</div>
