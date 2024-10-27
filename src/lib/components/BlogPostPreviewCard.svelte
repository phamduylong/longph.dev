<script>
    import { Avatar } from '@skeletonlabs/skeleton';
    import { Pen } from 'lucide-svelte';
    	/**
	 * @type {{ id:string,
	 * 					  title: string,
	 * 					  content: string,
	 *                    tags: string[],
	 * 				  	  snippets: [{ lang: string, code: string }]
	 *                    created: string,
	 *                    updated: string }}
	 */
	export let post;
    /**
     * Process date string to human readable format
     * Shows day, month and year if the year is not the current year
     * @param string {string}
     */
    function processDateString(string) {
        let date = new Date(string);
        return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} ${date.getFullYear() < new Date().getFullYear() ? date.getFullYear() : ""}`;
    }
</script>

<a class="card card-hover p-4 space-y-2" href='/blog/{post.title.replaceAll(" ", "-")}'>

    <!-- Picture and name -->
	<div class="flex space-x-2">
		<Avatar class="w-8 h-8 inline" src="/pp.png" alt="avatar" />
		<div class="inline">Long Pham</div>
	</div>
    
	<h3 class="h3 font-bold p-2 text-justify">{post.title}</h3>

    <div class="flex justify-between items-center">
        <div class="max-w-[75%] md:max-w-[33.33%]">
			{#each post.tags as tag}
                <span class="chip variant-filled-secondary m-1">#{tag}</span>
			{/each}
		</div>
        <div class="space-x-1 mx-1 md:mx-2"><Pen size={16} class="inline"/><i class="inline">{processDateString(post.updated)}</i></div>
	</div>
</a>
