<script>
	import '../app.css';
	import AddedPostButton from '../components/AddedPostButton/AddedPostButton.svelte';
	import Modal from '../components/Modal/Modal.svelte';
	import Navigation from '../components/Navigation/Navigation.svelte';
	


    let isModalOpen = false;
	
	
    

	const toogleModal = ()=>{
		isModalOpen = !isModalOpen;
		console.log(isModalOpen)
		
	}

</script>


<header class="flex justify-between border-2 py-5 px-36 dark:bg-gray-800 dark:border-gray-700" >
	<Navigation />
</header>
<main>
	<slot />
</main>
