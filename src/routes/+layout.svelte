<script lang="ts">
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import { onMount } from 'svelte';
	import '../assets/styles/app.css';
	import '../assets/cookieconsent/cookieconsent-styles.css';
	import Preloader from '$lib/components/Preloader.svelte';

	onMount(async () => {
		const init = await import('../assets/scripts/app').then((m) => m.default);
		init();
	});
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
<Preloader preloader_label={$page.data.preloader_label}/>
<main>
	<slot />
</main>
<PrismicPreview {repositoryName} />
