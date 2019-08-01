import React from 'react'
import * as style from '../../../App.css'
import classnames from 'classnames'
interface InputProps {
  isfocused: boolean
  setInputText: (value: string) => void
  onClick: () => void
}

const Input: React.FC<InputProps> = props => {
  const { isfocused, setInputText, onClick } = props
  const InputClass = classnames(
    style['SearchBar-input'],
    { [style['SearchBar-focusedInput']]: isfocused },
    style['Input-wrapper'],
    style['Input-wrapper--grey'],
    { 'is-focus': isfocused },
  )

  const handleChange: React.ReactEventHandler = e => {
    setInputText((e.target as HTMLInputElement).value)
  }
  return (
    <div className={InputClass}>
      <input
        onChange={handleChange}
        onClick={onClick}
        type="text"
        maxLength={100}
        autoComplete="off"
        className="Input"
        placeholder="后宫嫔妃争宠 | 宫墙柳"
      />
    </div>
  )
}

export default Input
