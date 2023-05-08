<script>
	export let title;
	export let id;
	export let body;
	export let processedAt;
</script>

<div
	class=" flex flex-col justify-around gap-3 max-w-sm h-80 p-3 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<p class="text-white">{id}</p>
	<h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400">
		{body.length > 100 ? body.substr(0, 99) + '...' : body}
	</p>
	<p class=" text-white">{processedAt}</p>
</div>
