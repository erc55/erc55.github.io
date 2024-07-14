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

const sizes = {
  tiny: '50px',
  small: '100px',
  medium: '150px',
  large: '200px',
  huge: '250px'
}

const logos = [
  {
    top: '8%',
    left: '70%',
    size: sizes.tiny,
    color: colors.lightGray,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '3s'
  },
  {
    top: '12%',
    left: '10%',
    size: sizes.tiny,
    color: colors.lightGray,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '7s'
  },
  {
    top: '15%',
    left: '80%',
    size: sizes.medium,
    color: colors.pink,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '9s'
  },
  {
    top: '23%',
    left: '40%',
    size: sizes.small,
    color: colors.darkerGray,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '4s'
  },
  {
    top: '25%',
    left: '15%',
    size: sizes.large,
    color: colors.orange,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '6s'
  },
  {
    top: '32%',
    left: '60%',
    size: sizes.medium,
    color: colors.darkerGray,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '2s'
  },
  {
    top: '55%',
    left: '5%',
    size: sizes.huge,
    color: colors.lightGray,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '6s'
  },
  {
    top: '55%',
    left: '70%',
    size: sizes.huge,
    color: colors.darkGreen,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '8s'
  },
  {
    top: '70%',
    left: '55%',
    size: sizes.small,
    color: colors.yellow,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '5s'
  },
  {
    top: '75%',
    left: '20%',
    size: sizes.huge,
    color: colors.pink,
    fill: 'currentColor',
    strokeWidth: '0',
    opacity: '0.2',
    animationDuration: '2s'
  },
  {
    top: '75%',
    left: '85%',
    size: sizes.large,
    color: colors.white,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '9s'
  },
  {
    top: '85%',
    left: '5%',
    size: sizes.tiny,
    color: colors.green,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '3s'
  },
  {
    top: '90%',
    left: '60%',
    size: sizes.tiny,
    color: colors.green,
    fill: 'none',
    strokeWidth: '0.5',
    opacity: '0.2',
    animationDuration: '4s'
  }
]

const FloatingEthereumLogos: React.FC = () => {
  return (
    <div className="parallax">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="absolute floating"
          style={{
            top: logo.top,
            left: logo.left,
            width: logo.size,
            height: logo.size,
            color: logo.color,
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
