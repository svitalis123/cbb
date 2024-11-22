/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#0A3265',
  				light: '#1772E5',
  				dark: '#1258B2'
  			},
  			secondary: {
  				DEFAULT: '#F8BA40'
  			},
  			neutral: {
					'99': '#fff',
  				'100': '#FAFAFA',
  				'200': '#EEF9FF',
  				'300': '#D9D9D9',
  				'400': '#656565',
  				'500': '#313131',
					'600': '#164F92',
					'700': '#BAE8FF',
					'800': '#123059',
					'900': '#2DAAFF'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			h1: '5rem', //80px
  			h2: '4rem', //64px
  			h3: '3rem', //48px
  			h4: '2.25rem', //36px
  			h5: '2rem', // 32px
  			quote: '1.556rem',
  			body: '1.75rem', //28px
				bodyalpha: '1.375rem', //22px
				bodymed: '1.313rem', //21px
				bodybold: '1.25rem', //20px
				bodysmal: '1.125rem',		 //18px	
				bodyextr: '1rem', //16px	
  			small: '0.875rem', //14px
  			xs: '0.556rem'
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(180deg, #FFFFFF 0%, #E1EDFA 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
