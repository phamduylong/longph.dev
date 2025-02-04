<script>
	export let data;
	export let classes = 'container';
	/**
	 * Remove whitespaces from a string
	 * @param str {string}
	 */
	function removeWhitespaces(str) {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div class={classes}>
	<h3 class="h3 anchor font-bold" id={removeWhitespaces(data.title)}>
		<a href={'#' + removeWhitespaces(data.title)}>{data.title}</a>
	</h3>
	<div class="my-2">
		{@html data.content}
	</div>
</div>
