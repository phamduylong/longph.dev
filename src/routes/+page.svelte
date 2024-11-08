<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import { section_data } from '$lib/assets/data';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Long Pham</title>
</svelte:head>
<div class="container h-full mx-auto flex justify-center items-center p-10">
	<div class="space-y-8 md:space-y-12 flex flex-col items-center text-justify md:w-4/5 lg:w-3/5">
		<h1 class="h1 font-serif text-5xl my-8">Long Pham</h1>
		<div>
			<Avatar
				src="pp.png"
				alt="Cover photo"
				initials="LP"
				class="float-left mr-4 h-20 md:h-28"
				width="w-20 md:w-28"
				background="bg-secondary-500"
			/>
			<p>
				I'm a software engineer who enjoys solving problems and the amount of dopamine that it
				brings. I have 2 years of experience in the industry, working as both a desktop app
				developer and a web developer at
				<a class="anchor" target="_blank" href="https://digia.com/en" rel="external">Digia</a> 🇫🇮.
				In my free time, I fancy a bit of open source browsing, investing in tech startups and
				listening to tech podcasts. I'm open to new opportunities and challenges, feel free to reach
				out <a class="anchor" href="#contact">here</a>.
			</p>
		</div>
		{#each section_data as section}
			<Section data={section} />
		{/each}
	</div>
</div>
