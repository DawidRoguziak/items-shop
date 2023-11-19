/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                shopSoftPrimary: "#84D187",
                shopPrimary: "#00B207",
                shopHardPrimary: "#2C742F",
                shopWarning: "#FF8A00",
                shopDanger: "#EA4B48",

                shopGray: {
                    50: "#F2F2F2",
                    100: "#E6E6E6",
                    200: "#CCCCCC",
                    300: "#B3B3B3",
                    400: "#999999",
                    500: "#808080",
                    600: "#666666",
                    700: "#4D4D4D",
                    800: "#333333",
                    900: "#1A1A1A",
                },

                shopGreenGray: {
                    50: "#EDF2EE",
                    100: "#DAE5DA",
                    200: "#B4CCB4",
                    300: "#96B297",
                    400: "#7A997C",
                    500: "#618062",
                    600: "#406B42",
                    700: "#2B572E",
                    800: "#173B1A",
                    900: "#002603",
                }
            },
            fontSize: {
                base: ['1rem', {
                    lineHeight: '1.5rem',
                    fontWeight: '500',
                }],
                md: [
                    '1.150rem',
                    {
                        lineHeight: '1.20rem',
                        fontWeight: '500',
                    },
                ]
            },
            screens: {
                'xs': '400px',
            }
        },
    },
    plugins: [],
}

