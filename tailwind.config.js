module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '1rem': '1rem',
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '3.5rem': '3.5rem',
        '4rem': '4rem',
        '5rem': '5rem',
        '5.5rem': '5.5rem',
        '6rem': '6rem',
        '7rem': '7rem',
        '10rem': '10rem',
        '20rem': '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '55rem': '55rem',
      },
      boxShadow: {
        'dropdown': 'rgba(0, 0, 0, 0.28) 0px 8px 28px 0px',
      },
      colors: {
        "night": "#292D32",
        "pinky": "#FF385C",
        "white": "#FAFCFF",
        "puply": "#460479",
      },
      fontSize: {
        'h1': ['26px'],
        'h2': ['22px'],
        'h3': ['16px'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {                  
          "primary": "#570DF8",
          "secondary": "#F000B8",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",      
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}
