import React, { useEffect, useState } from "react"

const isBrowser = () => typeof window !== "undefined"

let maxWidth = 400
let defaultWidth = 1440
let viewportWidth = isBrowser() ? window.innerWidth : defaultWidth
let imgWidth = viewportWidth < maxWidth ? viewportWidth * 0.9 : maxWidth

const Logo = () => {
  const currentMode =
    document.documentElement.className === "theme-ui-light" ? "light" : "dark"
  const [mode, setMode] = useState(currentMode)

  useEffect(() => {
    const handleClassChange = (mutationsList: any) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const newMode =
            document.documentElement.className === "theme-ui-light"
              ? "light"
              : "dark"
          console.info(document.documentElement.className)
          console.info(newMode)
          setMode(newMode)
        }
      }
    }

    const observer = new MutationObserver(handleClassChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  const imgSrc = mode === "light" ? "./erc55-negative.png" : "./erc55.png"
  return <img src={imgSrc} alt="ERC55 logo" width={imgWidth} />
}

export default Logo
