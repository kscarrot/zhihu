import React, { useContext } from 'react'
import * as style from '../../App.css'
// import PageHeader from './PageHeader'
import AppHeaderInner from './AppHeaderInner'
import { PageContext } from '../../tool/PageState'
import classnames from 'classnames'

const Header: React.FC = props => {
  const { isAppHeaderSticky, currentWidth } = useContext(PageContext)

  const innerStyle =
    isAppHeaderSticky && currentWidth
      ? { width: currentWidth, top: 0, left: 0 }
      : undefined

  const HeaderClass = classnames(style.Sticky, style.AppHeader, {
    [style['is-fixed']]: isAppHeaderSticky,
  })
  return (
    <>
      <header className={HeaderClass} style={innerStyle}>
        <AppHeaderInner />
        {/* <PageHeader isShown={pagecontext.isAppHeaderShown} /> */}
      </header>
      {isAppHeaderSticky && (
        <div
          className={style['Sticky--holder']}
          style={{
            position: 'relative',
            top: 0,
            right: 0,
            left: 0,
            display: 'block',
            float: 'none',
            margin: 0,
            height: '52px',
            minWidth: '1032px',
          }}
        ></div>
      )}
    </>
  )
}

export default Header
