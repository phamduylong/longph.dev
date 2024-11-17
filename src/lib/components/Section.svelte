<script lang="ts">
	export let data;
	export let classes = '';
	function removeWhitespaces(str: string): string {
		return str.replace(/\s+/g, '').toLowerCase();
	}
</script>

<div class={classes}>
	<h3 class="h3 anchor font-bold" id={removeWhitespaces(data.title)}>
		<a href={'#' + removeWhitespaces(data.title)}>{data.title}</a>
	</h3>
	<div class="my-2">{@html data.content}</div>
</div>
