export default (url: string): string => {
    const rc = useRuntimeConfig();
    return `${rc.public.baseURL}${url}`;
}