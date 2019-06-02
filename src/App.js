import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import TopStory from './components/TopStory'
import ConerButtons from './components/CornerButtons'
import throttle from './util/throttle'
import PageState from './components/Tool/PageState'

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
    window.removeEventListener('resize', this.handleResize)
  }

  handleScroll = throttle(() => {
    const y = window.scrollY
    this.setState({
      isAppHeaderSticky: y !== 0,
      isAppHeaderShown: y - this.state.lastScrollY < 0,
      isBacktopShown: y > 1000,
      lastScrollY: y
    })
  }, 1000 / 60)

  handleResize = () => window.requestAnimationFrame(() => this.setState({ currentWidth: window.innerWidth }))

  render() {
    const { isAppHeaderShown, isAppHeaderSticky, currentWidth, isBacktopShown } = this.state
    return (
      <Router>
        <PageState>
          <AppHeader isShown={isAppHeaderShown} isSticky={isAppHeaderSticky} currentWidth={currentWidth} />
          <TopStory />
          <ConerButtons isShown={isBacktopShown}></ConerButtons>
        </PageState>
      </Router>
    )
  }

}
export default App