<script>
	import pdf from '../../../static/CVARS_membership_application.pdf';
	import DownloadIcon from '../../components/DownloadIcon.svelte';
</script>

<section>
	<h1>become a member</h1>

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
		your current CVARS membership, please download and print the Cowichan Valley Amateur Radio
		Society Membership Registration Form. Memebership fee is $35.00 for single and $50.00 for family
		per year. Mail completed form including your payment to:
	</p>

	<p>Cowichan Valley Amateur Radio Society P.O. Box 95 Duncan, British Columbia V9L 3X1</p>
</section>

<section>
	<h2>Life Members</h2>

	<p>
		Life Members are those who have been Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Pellentesque mollis, mauris nec finibus lobortis, magna nisi posuere nibh, ut tincidunt leo
		ipsum sed ligula. Morbi sed velit lobortis, venenatis sem non, facilisis nibh. Curabitur sit
		amet scelerisque est, in pulvinar orci. Donec aliquam ante eros, id convallis mauris imperdiet
		quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
		egestas. Sed id turpis volutpat, condimentum nunc in, mollis orci. Vivamus semper quam vel nunc
		aliquet tempor. Integer ex mi, vestibulum et lectus nec, pellentesque malesuada eros. .
	</p>

	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<li>Sheila Holliston, VE7DAX</li>
		<li>Paul Peters, VE7BZ</li>
		<li>Alun Jones, VE7JO</li>
		<li>Jim Deptuch, VE7JHE</li>
		<li>Dale Jones, VE7JP</li>
		<li>Jim Rose, VE7JTR</li>
		<li>Steve Bradshaw, VE7CBH</li>
		<li>Les Dawes, VA7CBN</li>
		<li>Gabor Horvath, VE7JH</li>
	</ul>
</section>
