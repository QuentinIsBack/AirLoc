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
        '4.5rem': '4.5rem',
        '5rem': '5rem',
        '5.5rem': '5.5rem',
        '6rem': '6rem',
        '7rem': '7rem',
        '10rem': '10rem',
        '15rem': '15rem',
        '20rem': '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '55rem': '55rem',
      },
      width: {
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
        '28rem': '28rem',
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
        "white": "#ffffff",
        "puply": "#460479",
      },
      fontSize: {
        'h1': ['26px'],
        'h2': ['22px'],
        'h3': ['16px'],
      },
      animation: {
        showin: 'showin 1s',
        showout: 'showout 1s'
      },
      keyframes: {
        showin: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },        
        showout: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
        }
      },
      animation: {
        showin: 'showin 1s',
        showout: 'showout 1s'
      },
      keyframes: {
        showin: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },        
        showout: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
        }
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
