import React from "react"

let maxWidth = 400
let viewportWidth = window.innerWidth
let imgWidth = viewportWidth < maxWidth ? viewportWidth * 0.9 : maxWidth

const Logo = () => <img src="./erc55.png" alt="ERC55 logo" width={imgWidth} />

export default Logo
