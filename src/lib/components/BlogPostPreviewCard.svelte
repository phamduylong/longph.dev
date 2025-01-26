<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Pen } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	/**
	 * @type {{ id:string,
	 * 					  title: string,
	 *                    tags: string[],
	 *                    created: Date,
	 *                    updated: Date }}
	 */
	export let post;
	/**
	 * Process date string to human readable format
	 * Shows day, month and year if the year is not the current year
	 * @param date {Date}
	 */
	function processDateString(date) {
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		let displayYear = false;
		const newDate = new Date();

		if (
			newDate.getFullYear() - year > 1 ||
			(newDate.getFullYear() - year <= 1 &&
				(newDate.getMonth() > month || (newDate.getMonth() === month && newDate.getDate() < day)))
		) {
			displayYear = true;
		}
		return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} ${displayYear ? date.getFullYear() : ''}`;
	}

	const evDispatcher = createEventDispatcher();
</script>

<div class="card p-4 space-y-2 max-h-fit grid-cols-1">
	<!-- Picture and name -->
	<a class="flex space-x-2 w-fit" href="/" rel="author">
		<Avatar class="w-8 h-8 inline" src="/pp.png" alt="avatar" />
		<div class="inline">Long Pham</div>
	</a>

	<a href="/blog/post/{post.id}"
		><h3 class="h3 font-bold p-2 hover:text-primary-600">
			{post.title}
		</h3></a
	>

	<div class="flex justify-between items-center">
		<div class="max-w-[70%] md:max-w-[50%]">
			{#each post.tags as tag}
				<button
					data-sveltekit-preload-data
					class="chip variant-filled-secondary m-1"
					on:click={() => evDispatcher('tagselected', tag)}
					><span class="!text-primary-600 mr-px">#</span>{tag}</button
				>
			{/each}
		</div>
		<div
			class="space-x-2 mx-1 md:mx-2 self-end text-sm"
			title="Last edited on {post.updated.toDateString()} {post.updated.toTimeString()}"
		>
			<Pen size={16} class="inline" /><i class="inline cursor-default"
				>{processDateString(post.updated)}</i
			>
		</div>
	</div>
</div>
