<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	/**
	 * @type {{ id:string,
	 * 					  title: string,
	 * 					  content: string,
	 *                    tags: string[],
	 * 				  	  snippets: [{ lang: string, code: string }]
	 *                    created: Date,
	 *                    updated: Date }}
	 */
	export let post;
</script>

<a class="card card-hover p-4 space-y-4" href="/blog/{post.id}">

    <!-- Picture and name -->
	<div class="flex space-x-2">
		<Avatar class="w-8 h-8 inline" src="/pp.png" alt="avatar" />
		<div class="inline">Long Pham</div>
	</div>
    
	<h3 class="h3 font-bold p-2 text-justify">{post.title}</h3>

	<div class="flex justify-between">
		<div class="space-x-2 justify-self-start max-w-1/2 mr-2">
			{#each post.tags as tag}
				<span class="chip variant-filled-secondary mx-2 my-2">#{tag}</span>
			{/each}
		</div>
		<div class="justify-self-end my-2"><i>{new Date(post.created).toDateString()}</i></div>
	</div>
</a>
