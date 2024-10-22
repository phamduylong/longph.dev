<script>
    export let project = '';
    export let alt = '';
</script>

<a
	class="card card-hover border-primary-500 lg:hover:border-secondary-500 border-2 lg:hover:border-4 active:border-4 active:border-secondary-500  rounded-xl text-center"
    href="/projects/{project}"
>
	<img class="!w-full h-full rounded-xl" src="/{project}.png" alt={alt} title={alt} />
</a>
