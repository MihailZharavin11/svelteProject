<script>
	import '../app.css';
	import { onMount } from 'svelte';
	const endpoint = 'https://jsonplaceholder.typicode.com/posts';
	import { getPosts } from '../api/api';

	let posts = [];
	onMount(async () => {
		posts = await getPosts();
	});
</script>

{#each posts as article}
	<div>
		<p>{article.title}</p>
	</div>
{/each}
