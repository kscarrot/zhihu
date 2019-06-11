
import React,{useEffect}  from 'react'
import {createPortal} from 'react-dom'

const modalRoot = document.getElementById('portals')

class Portal extends React.Component{
    constructor(props){
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount() {
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }   

    render(){
        return createPortal(this.props.children,this.el,)
    }
}

// const Portal = props => {
//     const el = document.createElement('div')
//     useEffect(() => {
//         modalRoot.appendChild(el)
//         return () => modalRoot.removeChild(el)
//     })
//     return createPortal(props.children, el)
// }

export default Portal