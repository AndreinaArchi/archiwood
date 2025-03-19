import { useRef, useState } from 'react'
import { ScrollContext } from './createContext'
import useScrollToRef from '../hooks/useScrollToRef'

export const ScrollProvider = ({ children }) => {
  const [showContact, setShowContact] = useState(false)
  const SCROLL = useScrollToRef()

  const topRef = useRef(null)
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section4 = useRef(null)
  const purposeRef = useRef(null)
  const showroomRef = useRef(null)
  const processRef = useRef(null)
  const productsRef = useRef(null)
  const proyectsRef = useRef(null)
  const productDescriptionRef = useRef(null)
  const contactRef = useRef(null)


  /**FUNCTION BTN CONTACT*/
  const handleContactUs = () => {
    setShowContact(!showContact)
  }

  return (
    <ScrollContext.Provider
      value={{
        handleContactUs,
        showContact,
        setShowContact,
        SCROLL,
        topRef,
        section1,
        section2,
        section4,
        purposeRef,
        showroomRef,
        processRef,
        productsRef,
        proyectsRef,
        productDescriptionRef,
        contactRef
      }}
    >
      {children}
    </ScrollContext.Provider>
  )
}
