/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
]
export const prefix = ''
export const theme = {
    container: {
        center: true,
        padding: '2rem',
        screens: {
            '2xl': '1400px',
        },
    },
    fontFamily: {
        primary: ['baloo-2', 'sans-serif'],
    },
    extend: {
        colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: '#FAFAFA',
            screenBackground: '#D4ECBA',
            foreground: 'hsl(var(--foreground))',
            text: '#152239',
            primary: {
                DEFAULT: '#152239',
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: '#399CDB',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            accent: {
                DEFAULT: '#FFB03B',
                foreground: 'hsl(var(--accent-foreground))',
            },
            card: {
                DEFAULT: '#FAFAFA',
                foreground: 'hsl(var(--card-foreground))',
            },
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
            'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
        },
        height: {
            headerDiv: '180px',
            greenDiv: '660px',
        },
    },
}
export const plugins = [require('tailwindcss-animate')]
