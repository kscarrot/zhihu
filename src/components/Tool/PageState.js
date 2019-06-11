import React, { useState, useEffect, createContext } from 'react'

export const PageContext = createContext()

const PageSate = props => {
  const [isAppHeaderSticky, setisAppHeaderSticky] = useState(false)
  const [isAppHeaderShown, setisAppHeaderShown] = useState(true)
  const [isBacktopShown, setisBacktopShown] = useState(false)
  const [currentWidth, setcurrentWidth] = useState(1032)
  const [lastScrollY, setLastScrollY] = useState(1)

  useEffect(() => setcurrentWidth(window.innerWidth), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  const scollEvent = () => {
    const y = window.scrollY
    setisAppHeaderSticky(y !== 0)
    setisAppHeaderShown(y - lastScrollY < 0)
    setisBacktopShown(y > 0)
    setLastScrollY(y)
  }

  const resizeEvent = () => setcurrentWidth(window.innerWidth)

  const handleScroll = () => window.requestAnimationFrame(scollEvent)

  const handleResize = () => window.requestAnimationFrame(resizeEvent)

  return (
    <PageContext.Provider
      value={{
        isAppHeaderSticky: isAppHeaderSticky,
        isAppHeaderShown: isAppHeaderShown,
        isBacktopShown: isBacktopShown,
        lastScrollY: lastScrollY,
        currentWidth: currentWidth
      }}>
      {props.children}
    </PageContext.Provider>
  )

}
export default PageSate