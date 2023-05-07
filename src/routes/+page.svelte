<script>
	import MyEdgeFunction from '../api/api';
	import '../app.css';
	import { onMount } from 'svelte';
	import PostItem from '../components/PostItem/PostItem.svelte';
	import { readable } from 'svelte/store';
	let posts = [];
	onMount(async () => {
		const response = await MyEdgeFunction('https://jsonplaceholder.typicode.com/posts');
		posts = response;
	});
</script>

{#each posts as item}
	<li>{item.title}</li>
{/each}

<PostItem />
