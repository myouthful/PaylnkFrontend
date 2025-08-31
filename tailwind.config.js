/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        electricIndigo: '#361DFC',
        textprimary: '#1E1E1E',
        textsecondary: '#767676',
        texttertiary: '#A0A0A0',
        textred: '#FE3737',
        fadedWhite: '#F6F9FC',
        textblack: '#0E1534',
        textgray: "#7C7878",
        bordergray: "#E3E8FF",
        textfaded:"#A6A6A6",
        gray: "#D8D8D8",
        lightgray:"#B7B4B4",
        green: "#34A853",
        linegray: "#DBDBDB",
        lightorange: "#FFE281",
        lightgreen: "#D3FFDE",
        skyblue: "#E0E4FF",
        lightpink: "#FFCFCF"
      }
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
      inter: ['inter', 'sans-serif' ]
    },
    backgroundImage:{
      'cardsm': "url('/src/assets/images/cardbgsm.png')",
      'cardlg': "url('/src/assets/images/cardbg.png')",
      'coverimageDesktop': "url('/src/images/coverimageone.png')",
      'coverimageMobile': "url('/src/images/coverimagemobile.png')",
    }
  },
  plugins: [],
}



