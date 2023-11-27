export type HeaderOption = {
    label: string;
    url?: string;
    id: string;
    hiddeBreakPoint: number
}

export const headerOptions:HeaderOption[] = [
    {
        label: 'home',
        id: 'home',
        hiddeBreakPoint: 500
    },
    {
        label: 'shop',
        id: 'shop',
        hiddeBreakPoint: 500
    },
    {
        label: 'pages',
        id: 'pages',
        hiddeBreakPoint: 500
    },
    {
        label: 'blog',
        id: 'blog',
        hiddeBreakPoint: 900
    },
    {
        label: 'about',
        id: 'about',
        hiddeBreakPoint: 1050
    },
    {
        label: 'contact',
        id: 'contact',
        hiddeBreakPoint: 1050
    },
];