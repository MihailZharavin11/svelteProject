<script>
	import { applyAction, enhance } from "$app/forms";
	import { createEventDispatcher } from "svelte";
	import { writable } from "svelte/store";


const dispatchCloseModal = createEventDispatcher();
const closeModal = () =>{
    dispatchCloseModal('close',{
        text:'close'
    })
}
let errorsForm;

const onSubmitForm = ({ form, data, action, cancel, submitter }) => {
                    // `form` is the `<form>` element
                    // `data` is its `FormData` object
                    // `action` is the URL to which the form is posted
                    // `cancel()` will prevent the submission
                    // `submitter` is the `HTMLElement` that caused the form to be submitted
            
                    return async ({ result, update }) => {
                        errorsForm = result;
                        console.log(result)
                        applyAction(result)
                        
                    };
                }

</script>



<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="flex justify-center items-center bg-black bg-opacity-40 fixed  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
    <div class="modal relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
           
            <button on:click={closeModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create new post</h3>
                <form  method="POST" name="post" action="?/addPost" class="space-y-6"  use:enhance={onSubmitForm}>
                    <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required>

                    </div>
                    <div>
                        <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                        <input type="body" name="body" id="body"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        {#if errorsForm?.data.smallBody}
                            Error!
                        {/if}
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    
                </form>
            </div>
        </div>
    </div>
</div> 


