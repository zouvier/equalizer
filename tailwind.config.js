/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
      'dream': {
        'blue': '#66E2DC',
        'orange': '#FA7453',
        'yellow': '#FFB964',
        'white': '#FCFAF9',
        'black': '#191826'

      }
    },
    'fontSize' :{
      'maintitle': ['88px',{lineHeight:'88px',letterSpacing:'-1px'}],
      'pagetitle': ['40px',{lineHeight:'40px'}],
      'body1':['20px',{lineHeight:'34px'}],
      'body2':['16px',{lineHeight:'26px'}]
    }
    ,
    'fontFamily':{
      'main':['IBM Plex Sans', 'sans-serif']
    },
    backgroundImage: {
      'desktop': "url('..starter-code/assets/bg-main-desktop.png')",
      'tablet': "url('..starter-code/assets/bg-main-tablet.png')",
      'mobile': "url('..starter-code/assets/bg-main-mobile.png')",
      'facebook': "url('..starter-code/assets/icon-facebook.svg')"
    },
  },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
      'lg': '1440px',
      'tablet':'1024px',
    },

  },
  plugins: [],
}
