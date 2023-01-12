<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	type Data = {
		title: String;
		date: String;
		content: any;
	};

	export let data: Data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
