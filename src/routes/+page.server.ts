export const load: any = async ({ cookies, fetch, getClientAddress, platform, request }: any) => {
    console.log(cookies);
    console.log(fetch);
    console.log(getClientAddress());
    console.log(platform);
    console.log(request);

    if (platform.env) {
        return {
            message: "Platform env is avaliable."
        };
    }

    return {
        message: "Platform env is not available."
    };
};