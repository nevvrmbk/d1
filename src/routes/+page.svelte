<script lang="ts">
	import Section from '$lib/Section.svelte';
	import User from '$lib/User.svelte';
	export let data: any;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<User />

<Section>
    <h2>Platform</h2>
	<p>Message: {data.message}</p>
</Section>
