export default (api: string): string => {
    const rc = useRuntimeConfig();
    return `${rc.public.baseURL}/products`;
}