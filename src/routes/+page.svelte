<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Long Pham</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center px-10">
	<div class="space-y-16 flex flex-col items-center text-justify md:w-4/5 lg:w-3/5">
		<h1 class="h1 font-serif text-5xl">Long Pham</h1>
		<div>
			<Avatar
				src="setboiz.jpg"
				alt="Cover photo"
				class="float-left mr-4 h-20 md:h-36"
				width="w-20 md:w-36"
			/>
			<p>
				I'm a software engineer who enjoys solving problems and the dopamine it brings. I have a 2
				years experience in the field, working as both a desktop app developer and a web developer
				at
				<a class="anchor" target="_blank" href="https://digia.com/en">Digia</a>. In my free time, I
				fancy a bit of open source browsing, investing in tech startups and listening to tech
				podcasts.
			</p>
		</div>
	</div>
</div>
