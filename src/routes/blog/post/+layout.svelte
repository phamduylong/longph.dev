<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<main>
	<div class="my-10 flex flex-wrap justify-center">
		<Avatar src="/pp.png" alt="Profile picture" width="w-16" />
		<div class="basis-full h-0"></div>
		<div class="text-xl">Long Pham</div>
		<div class="basis-full h-0"></div>
	</div>
	<slot />
</main>
