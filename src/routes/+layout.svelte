<script>
	import '../app.css';
	import headerImage from './cvars-header.jpeg';
</script>

<nav class="flex justify-evenly py-1 uppercase">
	<a href="/" class="">home</a>
	<a href="/membership" class="">membership</a>
	<a href="/training" class="">training</a>
	<a href="/activities" class="">activities</a>
	<a href="/community" class="">community</a>
</nav>
<section>
	<div class="relative w-0 h-0 top-2 left-2">
		<div class="bg-slate-800/30 p-2 w-[42ch]">
			<h1 class="text-2xl ">cowichan valley amateur radio society</h1>
		</div>
	</div>
</section>
<img src={headerImage} alt="repeater installation overlooking cowichan valley" class="w-full" />
<main class="min-h-screen">
	<slot />
</main>

<footer class="bg-black text-white p-4">
	<nav>footer nav</nav>
	<div class="flex justify-center">
		<p class="text-sm">© {new Date().getFullYear()} Cowichan Valley Amateur Radio Society</p>
	</div>
</footer>
