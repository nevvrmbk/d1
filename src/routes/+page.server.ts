export const load: any = async ({ cookies, fetch, getClientAddress, platform, request }: any) => {
	console.log(cookies);
	console.log(fetch);
	console.log(getClientAddress());
	console.log(platform);
	console.log(request);

	if (platform.env) {
		try {
			await platform.env.Bucket.put('one', 'Jessica Alba');
			await platform.env.Bucket.put('two', 'Jamie Alexander');
			await platform.env.Bucket.put('three', 'Jennifer Lawrence');
			await platform.env.Bucket.put('four', 'Hailee Steinfeld');
			await platform.env.Bucket.put('five', 'Amanda Setfried');
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
