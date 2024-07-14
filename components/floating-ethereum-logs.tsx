import React from 'react'

const colors = [
  'hsl(210, 16%, 82%)', // light gray
  'hsl(211, 27%, 70%)', // medium gray
  'hsl(210, 22%, 49%)', // darker gray
  'hsl(207, 100%, 56%)', // blue
  'hsl(190, 100%, 40%)', // teal
  'hsl(152, 100%, 36%)', // green
  'hsl(48, 100%, 67%)' // yellow
]

interface Logo {
  color: string
  size: string
  top: string
  left: string
  animationDuration: string
  isFilled: boolean
}

const getRandomEdgePosition = (gridSize: number): { top: string; left: string } => {
  const topBias = Math.random() > 0.5 ? 0 : 1
  const leftBias = Math.random() > 0.5 ? 0 : 1
  const top = topBias === 0 ? Math.random() * 40 : 60 + Math.random() * 20
  const left = leftBias === 0 ? Math.random() * 40 : 60 + Math.random() * 20

  return { top: `${top}%`, left: `${left}%` }
}

const generatePositions = (numPositions: number, gridSize: number): { top: string; left: string }[] => {
  const positions: { top: string; left: string }[] = []
  while (positions.length < numPositions) {
    const position = getRandomEdgePosition(gridSize)
    if (!positions.some((pos) => pos.top === position.top && pos.left === position.left)) {
      positions.push(position)
    }
  }
  return positions
}

const FloatingEthereumLogos: React.FC = () => {
  const numLogos = 20
  const gridSize = 10
  const positions = generatePositions(numLogos, gridSize)

  const logos: Logo[] = Array.from({ length: numLogos }, (_, index) => ({
    color: colors[Math.floor(Math.random() * colors.length)],
    size: `${Math.random() * 240 + 20}px`,
    top: positions[index].top,
    left: positions[index].left,
    animationDuration: `${Math.random() * 100 + 3}s`,
    isFilled: Math.random() > 0.5
  }))

  return (
    <div className="parallax">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="absolute infinite-floating"
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
            className={`w-full h-full ${logo.isFilled ? 'fill-current' : 'stroke-current'}`}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              strokeWidth: logo.isFilled ? '0' : '0.5',
              fill: logo.isFilled ? 'currentColor' : 'none',
              opacity: '0.2'
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
