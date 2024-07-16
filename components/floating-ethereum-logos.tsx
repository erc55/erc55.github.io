import React from 'react'

const colors = {
  white: 'hsl(0, 0%, 100%)',
  lightGray: 'hsl(210, 16%, 82%)',
  darkerGray: 'hsl(210, 22%, 49%)',
  blue: 'hsl(207, 100%, 56%)',
  teal: 'hsl(190, 100%, 40%)',
  green: 'hsl(152, 100%, 36%)',
  yellow: 'hsl(48, 100%, 67%)',
  pink: 'hsl(340, 100%, 50%)',
  orange: 'hsl(30, 100%, 50%)',
  darkGreen: 'hsl(120, 100%, 25%)'
}

const logos = [
  {
    top: '8vh',
    left: '70vw',
    size: 'tiny',
    color: colors.lightGray,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '2s'
  },
  {
    top: '12vh',
    left: '10vw',
    size: 'tiny',
    color: colors.lightGray,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '2s'
  },
  {
    top: '15vh',
    left: '80vw',
    size: 'medium',
    color: colors.pink,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '5s'
  },
  {
    top: '23vh',
    left: '40vw',
    size: 'small',
    color: colors.darkerGray,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '4s'
  },
  {
    top: '25vh',
    left: '15vw',
    size: 'large',
    color: colors.orange,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '6s'
  },
  {
    top: '32vh',
    left: '60vw',
    size: 'medium',
    color: colors.darkerGray,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '5s'
  },
  {
    top: '55vh',
    left: '5vw',
    size: 'huge',
    color: colors.lightGray,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '9s'
  },
  {
    top: '55vh',
    left: '70vw',
    size: 'huge',
    color: colors.darkGreen,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '9s'
  },
  {
    top: '75vh',
    left: '55vw',
    size: 'small',
    color: colors.yellow,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '4s'
  },
  {
    top: '75vh',
    left: '20vw',
    size: 'huge',
    color: colors.pink,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '9s'
  },
  {
    top: '75vh',
    left: '85vw',
    size: 'large',
    color: colors.white,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '6s'
  },
  {
    top: '85vh',
    left: '5vw',
    size: 'tiny',
    color: colors.green,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '2s'
  },
  {
    top: '90vh',
    left: '60vw',
    size: 'tiny',
    color: colors.green,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '2s'
  }
]

const FloatingEthereumLogos: React.FC = () => {
  return (
    <div className="relative parallax">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`absolute floating -z-1 ${logo.size}`}
          style={{
            top: logo.top,
            left: logo.left,
            color: logo.color,
            width: logo.size,
            animationDuration: logo.animationDuration
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              stroke: logo.fill === 'none' ? 'currentColor' : 'none',
              strokeWidth: logo.fill === 'none' ? logo.strokeWidth : '0',
              fill: logo.fill,
              opacity: logo.opacity
            }}
          >
            <path d="M16 0L9.6 11.2L16 14.4L22.4 11.2L16 0ZM16 16L9.6 12.8L16 22.4L22.4 12.8L16 16Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default FloatingEthereumLogos
