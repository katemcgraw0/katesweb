/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      t1color1 :'#55a19e',
      t1color2 : '#bed9d8',
      t1color3 : '#512121',
      t1color4 : '#614030',
      t1color5 : '#716643',
      t2lightyellow: '#ffff95',
      t2lightyellowhov: '#eeee84',
      t2yellow:'#ffcf4c',
      t2orange:'#ff8235',
      t2teal:'#005862',
      t2dark:'#062621',
      green1:'#093334',
      green2:'#0f483d',
      green3:'#156a4a',
      green4:'#67a061',
      green5:'#b4d16b',
      black:'#000000',
      white:'#ffffff',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
