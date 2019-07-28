import React, { useContext } from 'react'
import style from '../../App.css'
import FeedBack from '../../svg/FeedBack'
import BackTop from '../../svg/BackTop'
import classnames from 'classnames'
import { PageContext } from '../../tool/PageState'

const CornerButtons: React.FC = props => {
  const { isBacktopShown } = useContext(PageContext)
  const handleScrollTop = () =>
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  const ButtonClass = classnames(
    style.Button,
    style.CornerButton,
    style['Button--plain'],
  )
  const BackTopClass = classnames(style.CornerAnimayedFlex, {
    [style['CornerAnimayedFlex--hidden']]: !isBacktopShown,
  })

  return (
    <div className={style.CornerButtons}>
      <div className={style.CornerAnimayedFlex}>
        <button className={ButtonClass}>
          <FeedBack />
        </button>
      </div>
      <div className={BackTopClass}>
        <button className={ButtonClass} onClick={handleScrollTop}>
          <BackTop />
        </button>
      </div>
    </div>
  )
}

export default CornerButtons
