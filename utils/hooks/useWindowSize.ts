import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

export default function useWindowSize(debounceDelay = 500) {
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    const debounced = debounce(handleResize, debounceDelay)

    window.addEventListener(`resize`, debounced)

    return () => window.removeEventListener(`resize`, debounced.cancel)
  }, [debounceDelay])

  return windowSize
}
