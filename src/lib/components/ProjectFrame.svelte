<script>
	/**
	 * @type { { name: string, alt: string, repoUrl: string, demoUrl: string } }
	 */
	export let project;
	import { Globe, Github } from 'lucide-svelte';
</script>

<div class="card rounded-xl text-center variant-ghost-surface">
	<a href={project.demoUrl} rel="external" target="_blank">
		<img
			class="container h-3/4 md:h-5/6 rounded-xl border-primary-500 lg:hover:border-secondary-500 border-2 lg:hover:border-4 active:border-4 active:border-secondary-500"
			src="/{project.name}.png"
			alt={project.alt}
			title={project.alt}
		/>
	</a>
	<div class="flex h-1/4 md:h-1/6 justify-center items-center">
		<a href={project.demoUrl} rel="external" target="_blank" class="btn btn-sm variant-glass select-none">
			<Globe size={20} class="inline-block mr-1" />Demo
		</a>
		<a href={project.repoUrl} rel="external" target="_blank" class="btn btn-sm variant-glass select-none">
			<Github size={20} class="inline-block mr-1" />Git Repo
		</a>
	</div>
</div>
