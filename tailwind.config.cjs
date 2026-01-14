module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                dark: {
                    900: '#0f0f23',
                    800: '#1a1a2e',
                    700: '#16213e',
                    600: '#1f2937',
                },
                google: {
                    blue: '#4285f4',
                    red: '#ea4335',
                    yellow: '#fbbc05',
                    green: '#34a853',
                },
            },
            boxShadow: {
                c: "0 1px 6px rgb(32 33 36 / 28%)",
                c2: "0 1px 1px rgb(0 0 0 / 10%)",
                glow: "0 0 20px rgba(66, 133, 244, 0.3), 0 0 40px rgba(66, 133, 244, 0.1)",
                'glow-lg': "0 0 30px rgba(66, 133, 244, 0.5), 0 0 60px rgba(66, 133, 244, 0.2)",
                glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
