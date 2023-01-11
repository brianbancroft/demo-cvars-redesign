<script lang="ts">
	export let href: string;
	export let activityName: string;
</script>

<a {href}
	><li
		class="hover:underline border m-1 px-4 py-6 hover:bg-blue-400 transition-all ease-in-out duration-300"
	>
		<div><span>{activityName}</span></div>
	</li></a
>
