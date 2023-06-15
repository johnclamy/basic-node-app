import { useState, useEffect } from "react";

export function useWindowSize() {
  const [winSize, setWinSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWinSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return winSize
}

