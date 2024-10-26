<script>
    import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
    import { CODE_MARKER } from '$lib/helper/constants';
    export let post;
</script>

<div class="card card-hover p-4 space-y-4">
    <div class="flex space-x-2">
        <Avatar class="w-8 h-8 inline" src="/pp.png" alt="avatar" />
        <div class="inline">Long Pham</div>
    </div>
    <h3 class="h3 font-bold p-2 text-justify">{post.title}</h3>
    <article class="text-justify">
        <!-- Split content by CODE_MARKER and render the content without the marker -->
        <!-- If there is a snippet, render the code block -->
        {#each post.content.split(CODE_MARKER) as part, i (i)}
            {@html part.replaceAll(CODE_MARKER, '')}
            {#if post.snippets && i < post.snippets.length}
                <CodeBlock
                    class="my-4"
                    lineNumbers={true}
                    buttonCopied="Copied ✅"
                    language={post.snippets[i].lang}
                    code={`${post.snippets[i].code}`}
                />
            {/if}
        {/each}
    </article>
    <div class="flex justify-between">
        <div class="space-x-2 justify-self-start max-w-1/2 mr-2">
            {#each post.tags as tag}
                <span class="chip variant-filled-secondary mx-2 my-2">#{tag}</span>
            {/each}
        </div>
        <div class="justify-self-end my-2"><i>{new Date(post.created).toDateString()}</i></div>
    </div>
</div>