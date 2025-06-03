<script>
  let { data } = $props();
  $inspect(data);
</script>

<h1>{data.title}</h1>
<p>{data.blogArticle}</p>
<div>{@html data.userId}</div>