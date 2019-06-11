import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import TopStory from './components/TopStory'
import ConerButtons from './components/CornerButtons'
import PageState from './components/Tool/PageState'

const App = ()=> {
    return (
      <Router>
        <PageState>
          <AppHeader/>
          <TopStory />
          <ConerButtons/>
        </PageState>
      </Router>
    )
}
export default App