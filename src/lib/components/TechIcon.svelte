<script lang="ts">
	export let classes = '';
	export let tech = { img: '', alt: '', url: '', text: '' };
</script>

<a href={tech.url} target="_blank" rel="noreferrer" title={tech.text} class="my-5 inline-block h-8 w-8 md:h-16 md:w-16 hover:mx-5 hover:scale-150 {classes}">
	<img
		src={tech.img}
		alt={tech.alt}
	/>
</a>
