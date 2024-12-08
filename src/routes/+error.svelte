<script>
	import { page } from '$app/stores';
	const emotes = [
		'＞﹏＜',
		'(っ °Д °;)っ',
		'(;´༎ຶД༎ຶ`)',
		'⊙﹏⊙∥',
		'(´。＿。｀)',
		'(；′⌒`)',
		'(。﹏。*)',
		'o(TヘTo)',
		'.·´¯`(>▂<)´¯`·.',
		'(⊙x⊙;)',
		'ಠ_ರೃ',
		'o((⊙﹏⊙))o',
		'.Σ(っ °Д °;)っ',
		'_(:з)∠)_',
		'<@_@>'
	];
</script>

<svelte:head>
	<title>An error occurred D:</title>
</svelte:head>

<div class="select-none p-10" role="main">
	<h1 class="h1 my-10">
		{emotes[Math.floor(Math.random() * emotes.length)]}
		Something wrong happened here...
	</h1>
	<h1 class="h1 my-10">{ $page.error?.message }</h1>
</div>