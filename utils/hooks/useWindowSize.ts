import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

const getSize = () => {
  return {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }
}

export default function useWindowSize(debounceDelay = 500) {
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize)
    }

    const debounced = debounce(handleResize, debounceDelay)

    window.addEventListener(`resize`, debounced)

    return () => window.removeEventListener(`resize`, debounced.cancel)
  }, [debounceDelay])

  return windowSize
}
