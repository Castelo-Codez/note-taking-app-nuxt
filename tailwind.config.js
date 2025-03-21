/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                barckground: {
                    DEFAULT: "hsl(0 0% 100%)",
                    dark: "hsl(222, 32%, 8%)",
                },
                foreground: {
                    DEFAULT: "hsl(222.2 84% 4.9%)",
                    dark: "hsl(210 40% 98%)",
                },
                text: {
                    DEFAULT: "hsl(222, 32%, 8%)",
                    dark: "hsl(0 0% 100%)",
                },
                card: {
                    DEFAULT: "hsl(0 0% 100%)",
                    dark: "hsl(222.2 84% 4.9%)",
                },
                cardForeground: {
                    DEFAULT: "hsl(222.2 84% 4.9%)",
                    dark: "hsl(210 40% 98%)",
                },
                popover: {
                    DEFAULT: "hsl(0 0% 100%)",
                    dark: "hsl(222.2 84% 4.9%)",
                },
                popoverForeground: {
                    DEFAULT: "hsl(222.2 84% 4.9%)",
                    dark: "hsl(210 40% 98%)",
                },
                primary: {
                    DEFAULT: "hsl(222.2 47.4% 11.2%)",
                    dark: "hsl(210 40% 98%)",
                },
                primaryForeground: {
                    DEFAULT: "hsl(210 40% 98%)",
                    dark: "hsl(222.2 47.4% 11.2%)",
                },
                secondary: {
                    DEFAULT: "hsl(210 40% 96.1%)",
                    dark: "hsl(217.2 32.6% 17.5%)",
                },
                secondaryForeground: {
                    DEFAULT: "hsl(222.2 47.4% 11.2%)",
                    dark: "hsl(210 40% 98%)",
                },
                muted: {
                    DEFAULT: "hsl(210 40% 96.1%)",
                    dark: "hsl(217.2 32.6% 17.5%)",
                },
                mutedForeground: {
                    DEFAULT: "hsl(215.4 16.3% 46.9%)",
                    dark: "hsl(215 20.2% 65.1%)",
                },
                accent: {
                    DEFAULT: "hsl(210 40% 96.1%)",
                    dark: "hsl(217.2 32.6% 17.5%)",
                },
                accentForeground: {
                    DEFAULT: "hsl(222.2 47.4% 11.2%)",
                    dark: "hsl(210 40% 98%)",
                },
                destructive: {
                    DEFAULT: "hsl(0 84.2% 60.2%)",
                    dark: "hsl(0 62.8% 30.6%)",
                },
                destructiveForeground: {
                    DEFAULT: "hsl(210 40% 98%)",
                    dark: "hsl(210 40% 98%)",
                },
                border: {
                    DEFAULT: "hsl(214.3 31.8% 91.4%)",
                    dark: "hsl(217.2 32.6% 17.5%)",
                },
                input: {
                    DEFAULT: "hsl(214.3 31.8% 91.4%)",
                    dark: "hsl(217.2 32.6% 17.5%)",
                },
                ring: {
                    DEFAULT: "hsl(222.2 84% 4.9%)",
                    dark: "hsl(212.7 26.8% 83.9%)",
                },
                chart1: {
                    DEFAULT: "hsl(12 76% 61%)",
                    dark: "hsl(220 70% 50%)",
                },
                chart2: {
                    DEFAULT: "hsl(173 58% 39%)",
                    dark: "hsl(160 60% 45%)",
                },
                chart3: {
                    DEFAULT: "hsl(197 37% 24%)",
                    dark: "hsl(30 80% 55%)",
                },
                chart4: {
                    DEFAULT: "hsl(43 74% 66%)",
                    dark: "hsl(280 65% 60%)",
                },
                chart5: {
                    DEFAULT: "hsl(27 87% 67%)",
                    dark: "hsl(340 75% 55%)",
                },
              
                skyBlue: {
                    DEFAULT: "hsl(228, 100%, 60%)",
                    dark: "hsl(228, 100%, 60%)",
                },
                lightGray: {
                    DEFAULT: "hsl(216, 26%, 96%)",
                    dark: "hsl(231, 16%, 16%)",
                },
                lighterGray: {
                    DEFAULT: "hsl(222, 11%, 36%)",
                    dark: "hsl(219, 15%, 82%)",
                },
                darkGray: {
                    DEFAULT: "hsl(221, 8%, 48%)",
                    dark: "hsl(221, 8%, 48%)",
                },
                darkerGray: {
                    DEFAULT: "hsl(216, 19%, 90%)",
                    dark: "hsl(231, 16%, 16%)",
                },
                primaryText: {
                    DEFAULT: "hsl(222, 32%, 8%)",
                    dark: "hsl(0, 0%, 100%)",
                },
                darkText: {
                    DEFAULT: "hsl(222, 32%, 8%)",
                    dark: "hsl(222, 32%, 8%)",
                },
                tagsBg: {
                    DEFAULT: "hsl(216, 19%, 90%)",
                    dark: "hsl(221, 16%, 20%)",
                },
                lightText: {
                    DEFAULT: "hsl(221, 16%, 20%)",
                    dark: "hsl(216, 19%, 90%)",
                },
                lighterText: {
                    DEFAULT: "hsl(231, 16%, 16%)",
                    dark: "hsl(231, 16%, 16%)",
                },
                grayBorder: {
                    DEFAULT: "hsl(219, 15%, 82%)",
                    dark: "hsl(222, 11%, 36%)",
                },
                lightRed: {
                    DEFAULT: "hsl(355, 96%, 60%)",
                    dark: "hsl(355, 96%, 60%)",
                },
                dimWhite: {
                    DEFAULT: "hsl(0, 0%, 94%, 0.6)",
                    dark: "hsl(0, 0%, 94%, 0.6)",
                },
            },
            container: {
                center: true,
                padding: "20px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
        },
    },
    plugins: [],
};
