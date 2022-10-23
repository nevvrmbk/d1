<script lang="ts">
	async function getUser() {
		const response = await fetch('https://randomuser.me/api/');
		const results = await response.json();

		if (response.ok && response.status == 200) {
			return results;
		} else {
			throw new Error(results);
		}
	}
</script>

<section
	class="flex flex-col justify-evenly items-center container mx-auto p-6 bg-blue-400 rounded h-full"
>
	<h2 class="text-2xl underline">User Details</h2>

	{#await getUser()}
		<p>Getting user info...</p>
	{:then { results }}
		{#each results as { email, name: { first, last }, dob: { date }, phone, picture: { large } }}
			<figure class="flex flex-col">
				<img src={large} alt="avatar" class="w-full rounded-full" />

				<figcaption>
					<table>
						<tbody>
							<tr>
								<td>Name</td>
								<td>{first} {last}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td><a href="mailto:{email}">{email}</a></td>
							</tr>
							<tr>
								<td>DOB</td>
								<td>{new Date(date).getFullYear()}</td>
							</tr>
							<tr>
								<td>Tel</td>
								<td><a href="tel:+{phone}">{phone}</a></td>
							</tr>
						</tbody>
					</table>
				</figcaption>
			</figure>
		{:else}
			<p>No user details found.</p>
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</section>
