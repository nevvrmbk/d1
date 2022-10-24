export const load: any = async ({ cookies, fetch, getClientAddress, platform, request }: any) => {
	console.log(cookies);
	console.log(fetch);
	console.log(getClientAddress());
	console.log(platform);
	console.log(request);

	if (platform.env.bucket) {
		try {
			await platform.env.bucket.put('one', 'Jessica Alba');
			await platform.env.bucket.put('two', 'Jamie Alexander');
			await platform.env.bucket.put('three', 'Jennifer Lawrence');
			await platform.env.bucket.put('four', 'Hailee Steinfeld');
			await platform.env.bucket.put('five', 'Amanda Setfried');
			console.log(await platform.env.bucket.get('one'));
		} catch (err) {
			console.log(err);
		}
		return {
			message: 'Platform env is avaliable.'
		};
	}

	return {
		message: 'Platform env is not available.'
	};
};
