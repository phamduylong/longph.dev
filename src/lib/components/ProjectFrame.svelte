<script>
	/**
	 * @type { { name: string, alt: string, repoUrl: string, demoUrl: string } }
	 */
	export let project;
	import { Globe, Github } from 'lucide-svelte';
	const fetchImage = async () => {
		const res = await fetch(`/${project.name}.png`);
		const data = await res.blob();
		if (res.ok) return URL.createObjectURL(data);
		else {
			return 'https://http.cat/status/404.jpg';
		}
	};
	const baseClasses = `container h-3/4 md:h-5/6 rounded-xl 
	border-primary-500 lg:hover:border-secondary-500 border-2 
	lg:hover:border-4 active:border-4 active:border-secondary-500`;
</script>

<div class="card rounded-xl text-center variant-ghost-surface">
	<a href={project.demoUrl} rel="external" target="_blank">
		{#await fetchImage()}
			<img
				class="{baseClasses}"
				src="https://http.cat/images/102.jpg"
				alt={project.alt}
				title={project.alt}
			/>
		{:then imgSrc}
			<img
				class="{baseClasses}"
				src={imgSrc}
				alt={project.alt}
				title={project.alt}
			/>
		{/await}
	</a>
	<div class="flex h-1/4 md:h-1/6 justify-center items-center space-x-4">
		{#if project.demoUrl && project.demoUrl !== ''}
			<a
				href={project.demoUrl}
				rel="external"
				target="_blank"
				class="btn btn-sm variant-glass select-none"
			>
				<Globe size={20} class="inline-block mr-1" />Demo
			</a>
		{/if}
		{#if project.repoUrl && project.repoUrl !== ''}
			<a
				href={project.repoUrl}
				rel="external"
				target="_blank"
				class="btn btn-sm variant-glass select-none"
			>
				<Github size={20} class="inline-block mr-1" />Git Repo
			</a>
		{/if}
	</div>
</div>
