<script>
	import LinkListItemBox from '../../components/LinkListItemBox.svelte';
</script>

<section class="w-2/3 mx-auto">
	<p>cvars hosts a range of activities on the air and in person</p>

	<h3>over-the-air activities</h3>
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<LinkListItemBox href="/activities/815-net" activityName="815 net" />
		<LinkListItemBox href="/activities/monday-net" activityName="monday net" />
	</ul>

	<h3>in-person activities</h3>

	<p>In addition to our calendar, CVARS has regular in-person events.</p>
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<LinkListItemBox href="/activities/815-net" activityName="815 net" />
		<LinkListItemBox href="/activities/monday-net" activityName="monday net" />
	</ul>
</section>
