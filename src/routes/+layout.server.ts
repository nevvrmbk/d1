export const load: any = async ({ cookies, fetch, getClientAddress, platform, request }: any) => {
    console.log(cookies);
    console.log(fetch);
    console.log(getClientAddress());
    console.log(platform);
    console.log(request);
};