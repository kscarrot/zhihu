import React, { useState } from 'react'
import AppHeader from './components/AppHeader'


const App = () => {
  const [PageHeaderShown, setPageHeaderShown] = useState(true)

  const showPageHeader = () => setPageHeaderShown(!PageHeaderShown)

  return (
    <>
      <AppHeader isShown={PageHeaderShown} />
      <button onClick={showPageHeader}>PageHeader</button>
    </>
  )

}
export default App