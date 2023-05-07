<script>
	import MyEdgeFunction from '../api/api';
	import '../app.css';
	import { onMount } from 'svelte';

	const a = MyEdgeFunction('https://jsonplaceholder.typicode.com/posts');
</script>

<h1>Hallo</h1>
