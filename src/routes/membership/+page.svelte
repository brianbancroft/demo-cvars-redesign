<script>
	import pdf from '../../../static/CVARS_membership_application.pdf';
	import DownloadIcon from '../../components/DownloadIcon.svelte';
</script>

<h1>hello membership</h1>

<a href="/CVARS_membership_application.pdf">
	<div
		class="m-2 p-1 w-[450px] h-[150px] border rounded flex flex-com items-end group hover:border-orange-500 ease-in-out transition-all"
	>
		<div class="flex group-hover:text-orange-500 transition-all ease-in-out">
			<p class="mr-2">download pdf form</p>
			<DownloadIcon />
		</div>
	</div>
</a>

<p>
	If you would like to become a new member of the Cowichan Valley Amateur Radio Society, or renew
	your current CVARS membership, please download and print the Cowichan Valley Amateur Radio Society
	Membership Registration Form. Memebership fee is $35.00 for single and $50.00 for family per year.
	Mail completed form including your payment to:
</p>

<p>Cowichan Valley Amateur Radio Society P.O. Box 95 Duncan, British Columbia V9L 3X1</p>
