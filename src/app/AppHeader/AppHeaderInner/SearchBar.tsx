import React, { useState } from 'react'
import Input from './Input'
import InputAfter from './InputAfter'
import Popover from '../../../tool/Popover'
import Portal from '../../../tool/Portal'
// import { useLocalStorage } from '../../../../hooks/useLocalStorage'
// import SearchMenu from './SearchMenu'

const Searchbar: React.FC = props => {
  const [isfocused, setisfocused] = useState(false)
  const [inputText, setInputText] = useState('')
  // const [history, updateHistory] = useLocalStorage("search::history", "[]")

  return (
    <div className="SearchBar">
      <div className="SearchBar-toolWrapper">
        <form className="SearchBar-tool">
          <div className="Popover">
            <Input
              isfocused={isfocused}
              onClick={() => setisfocused(true)}
              setInputText={setInputText}
            />
            <InputAfter
              handleClick={() => {
                // if (inputText === '') return
                // let temp = Array.from(JSON.parse(history))
                // temp.unshift(inputText)
                // updateHistory(JSON.stringify([...new Set(temp)]))
              }}
            />
          </div>
        </form>
      </div>
      {/* {
                isfocused &&
                <Portal>
                    <Popover
                        handleClose={() => setisfocused(false)}
                        offset={318}
                        halfpad={200}
                        top={43}
                        arrowDisabled={true}
                    >
                        <SearchMenu
                            history={history}
                            clear={() => updateHistory("[]")}
                        />
                    </Popover>
                </Portal>
            } */}
      <button
        type="button"
        className={
          !isfocused
            ? 'Button SearchBar-askButton Button--primary Button--blue '
            : 'Button SearchBar-askButton  SearchBar-hiddenAskButton Button--primary Button--blue'
        }
      >
        提问
      </button>
    </div>
  )
}

export default Searchbar
