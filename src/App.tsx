import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './app/AppHeader'
import CornerButton from './app/CornerButtons'
import TopStory from './app/TopStory'
import PageState from './tool/PageState'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <PageState>
        <AppHeader />
        <TopStory />
        <CornerButton />
      </PageState>
    </Router>
  )
}

export default App
