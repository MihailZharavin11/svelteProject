<script>
	import { getContext } from 'svelte';
	import PostItem from '../../components/PostItem/PostItem.svelte';
	import axios from 'axios';
	import Modal from '../../components/Modal/Modal.svelte';
	import AddedPostButton from '../../components/AddedPostButton/AddedPostButton.svelte';
	import Layout from '../+layout.svelte';
	
	export let data;
	let valueToSkip = 10;
	$:({posts} = data);
	let loading = false;
	let isVisible = false;

	

	
	const closeModal = ()=>{
		isVisible = false;
	}

	const openModal = ()=>{
		isVisible = true;
	}


	const handleClickButton = async () => {
		if(valueToSkip <=100){
			loading = true;
			const  response = await axios.get(`/api/posts?skip=${valueToSkip}`);
			const {data} = response;
			posts = [...posts,...data];
			valueToSkip+=10;
			loading = false;
		}
	};
</script>

<div class="flex flex-col justify-center">

	<div class="w-full flex justify-center my-10">
		
	<AddedPostButton toogleModal={openModal}/>
	</div>

	{#if isVisible}
	<Modal on:close={closeModal} />
	{/if}
	



	<div
		class="justify-center px-2 xl:justify-start pt-11 mx-auto max-w-screen-xl flex flex-wrap align-middle gap-9 "
	>
		{#each posts as {id,title,body,processedAt} }
	
			<PostItem id={id} title={title} body={body} processedAt={processedAt} />

		{/each}

	</div>
	<button
		disabled={loading }
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
