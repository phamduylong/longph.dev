<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Pen } from 'lucide-svelte';
	import { browser } from '$app/environment';
	/**
	 * @typedef {Object} Props
	 * @property {any} post
	 */

	/** @type {Props} */
	let { post } = $props();
	/**
	 * Process date string to human readable format
	 * Shows day, month and year if the year is not the current year
	 * @param string {string}
	 */
	function processDateString(string) {
		let date = new Date(string);
		return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} ${date.getFullYear() < new Date().getFullYear() ? date.getFullYear() : ''}`;
	}
</script>

<div class="card p-4 space-y-2 max-h-fit grid-cols-1">
	<!-- Picture and name -->
	<a class="flex space-x-2" href="/" rel="author">
		<Avatar class="w-8 h-8 inline" src="/pp.png" alt="avatar" />
		<div class="inline">Long Pham</div>
	</a>

	<a href="/blog/{post.id}"><h3 class="h3 font-bold p-2 text-justify hover:text-primary-600">{post.title}</h3></a>

	<div class="flex justify-between items-center">
		<div class="max-w-[70%] md:max-w-[50%]">
			{#each post.tags as tag}
				<a data-sveltekit-preload-data class="chip variant-filled-secondary m-1" href="{(browser) ? window.location.origin : ""}/blog?tag={tag}"><span class="!text-primary-600 mr-px">#</span>{tag}</a>
			{/each}
		</div>
		<div class="space-x-2 mx-1 md:mx-2 self-end text-sm" title="Last edited on {new Date(post.updated).toTimeString()}">
			<Pen size={16} class="inline" /><i class="inline">{processDateString(post.updated)}</i>
		</div>
	</div>
</div>
