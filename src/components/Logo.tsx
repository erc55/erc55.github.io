import React from "react"

const isBrowser = () => typeof window !== "undefined"
let maxWidth = 400
let defaultWidth = 1440
let viewportWidth = isBrowser() ? window.innerWidth : defaultWidth
let imgWidth = viewportWidth < maxWidth ? viewportWidth * 0.9 : maxWidth

const Logo = () => <img src="./erc55.png" alt="ERC55 logo" width={imgWidth} />

export default Logo
