<nav class="border-2 py-5 px-36 dark:bg-gray-800 dark:border-gray-700">
	<ul class="flex gap-20 text-white text-base">
		<li><a class="navigation__link" href="/">Home</a></li>
		<li><a class="navigation__link" href="/posts">Posts</a></li>
	</ul>
</nav>

<style lang="scss">
	.navigation__link {
		@apply py-1 transition-all;
		&:hover {
			@apply text-gray-500 border-b-2 transition-all;
		}
	}
</style>
