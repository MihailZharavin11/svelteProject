<script>
	import MyEdgeFunction from '../../api/api';
	import Loading from '../../components/Loading/Loading.svelte';
	import PostItem from '../../components/PostItem/PostItem.svelte';
	import { onMount } from 'svelte';

	
	export let data;
	$:({posts} = data)
	let loading = true;

	const handleClickButton = () => {
		if (dataLength < limit && posts[posts.length - 1].id < 100) {
			dataLength += 10;
			getDataFromEdgeFunction();
		}
	};
</script>

<div class="flex flex-col justify-center  ">

	<div
		class="justify-center px-2 xl:justify-start pt-11 mx-auto max-w-screen-xl flex flex-wrap align-middle gap-9 "
	>
		{#each posts as {id,title,body,processedAt} }
	
			<PostItem id={id} title={title} body={body} processedAt={processedAt} />

		{/each}

	</div>
	<button
		disabled={loading}
		on:click={handleClickButton}
		class="{loading
			? 'disabled'
			: ''} self-center my-16 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-all"
	>
		{loading ? 'Loading...' : 'Load more...'}
	</button>
	
</div>

<style lang="scss">
	.disabled {
		@apply dark:bg-gray-400 transition-all;
	}
</style>
