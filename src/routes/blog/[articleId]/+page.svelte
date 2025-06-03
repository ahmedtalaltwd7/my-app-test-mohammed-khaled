<script>

	/** @type {import('./$types').PageData} */
	export let data;

</script>
<a href="/">home</a>
<h1>{data.title}</h1>
<div>{@html data.blogArticle}</div>
<div>{@html data.userId}</div>