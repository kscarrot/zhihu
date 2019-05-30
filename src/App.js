import React, { Component } from 'react'
import AppHeader from './components/AppHeader'
import TopStory from './components/TopStory'
import ConerButtons from './components/CornerButtons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAppHeaderSticky: false,
      isAppHeaderShown: true,
      isBacktopShown: false,
      lastScrollY: 0,
      currentWidth: 1032
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.setState({ currentWidth: window.innerWidth })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  throttle(fn, delay) {
    let timeout
    let start = new Date()
    const threshold = delay || (1000 / 60)
    return function () {
      let context = this, args = arguments, current = new Date() - 0
      clearTimeout(timeout)
      if (current - start >= threshold) {
        fn.apply(context, args)
        start = current
      } else {
        timeout = setTimeout(() => fn.apply(context, args), threshold)
      }
    }
  }

  handleScroll = this.throttle(() => {
    const y = window.scrollY
    this.setState({
      isAppHeaderSticky: y !== 0,
      isAppHeaderShown: y - this.state.lastScrollY < 0,
      isBacktopShown: y > 1000,
      lastScrollY: y
    })
  }, 1000 / 60)

  handleResize = this.throttle(() => this.setState({ currentWidth: window.innerWidth }), 1000 / 60)


  render() {
    const { isAppHeaderShown, isAppHeaderSticky, currentWidth, isBacktopShown } = this.state
    return (
      <>
        <AppHeader isShown={isAppHeaderShown} isSticky={isAppHeaderSticky} currentWidth={currentWidth} />
        <TopStory/>
        <ConerButtons isShown={isBacktopShown}></ConerButtons>
        <div style={{ height: "2000px", width: "100%", backgroundColor: "lightblue" }}></div>
      </>
    )

  }

}
export default App