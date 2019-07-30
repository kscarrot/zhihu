import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal: React.FC = props => {
  const el = document.createElement('div')
  const modalRoot = document.getElementById('portals')
  useEffect(() => {
    modalRoot && modalRoot.appendChild(el)
    return () => {
      modalRoot && modalRoot.removeChild(el)
      return
    }
  })
  return createPortal(props.children, el)
}

export default Portal
