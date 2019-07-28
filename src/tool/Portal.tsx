import React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {}

class Portal extends React.Component<PortalProps> {
  portalTo: Element = document.createElement('div')
  modalRoot = document.getElementById('portals')

  constructor(props: PortalProps) {
    super(props)
  }
  componentDidMount() {
    this.modalRoot && this.modalRoot.appendChild(this.portalTo)
  }
  componentWillUnmount() {
    this.modalRoot && this.modalRoot.removeChild(this.portalTo)
  }

  render() {
    return createPortal(this.props.children, this.portalTo)
  }
}

// const Portal: React.FC = props => {
//     const el = document.createElement('div')
//     const modalRoot = document.getElementById('portals')
//     useEffect(() => {
//         modalRoot && modalRoot.appendChild(el)
//         return () => {
//             modalRoot && modalRoot.removeChild(el)
//             return
//         }
//     })
//     return createPortal(props.children, el)
// }

export default Portal
