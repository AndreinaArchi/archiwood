import { useRef } from 'react'
import { ScrollContext } from './createContext'
import useScrollToRef from '../hooks/useScrollToRef'

export const ScrollProvider = ({ children }) => {
  const SCROLL = useScrollToRef()

  const topRef = useRef(null)
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section4 = useRef(null)
  const purposeRef = useRef(null)
  const showroomRef = useRef(null)
  const processRef = useRef(null)
  const productsRef = useRef(null)
  const productDescriptionRef = useRef(null)

  return (
    <ScrollContext.Provider
      value={{
        SCROLL,
        topRef,
        section1,
        section2,
        section4,
        purposeRef,
        showroomRef,
        processRef,
        productsRef,
        productDescriptionRef
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}
