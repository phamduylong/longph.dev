<script>
	/**
	 * @typedef {Object} Props
	 * @property {{ title: string, content: string}} data
	 * @property {string?} classes
	 */

	/** @type {Props} */
	let { data, classes = '' } = $props();

	/**
	 * Remove whitespaces from a string
	 * @param str {string}
	 */
	function removeWhitespaces(str) {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div class={classes ? classes : ""}>
	<h3 class="h3 anchor font-bold" id={removeWhitespaces(data.title)}>
		<a href={'#' + removeWhitespaces(data.title)}>{data.title}</a>
	</h3>
	<div class="my-2">{@html data.content}</div>
</div>
