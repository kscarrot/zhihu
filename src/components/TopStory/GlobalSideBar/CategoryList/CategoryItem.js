import React from 'react'

const CategoryItem = props => {
     const click = e=> e.preventDefault()
    return (
        <li className="GlobalSideBar-categoryItem">
            <a onClick={click} href="/#" className="Button Button--plain" style={props.itemColor}>
                <span className="GlobalSideBar-categoryIcon" >{props.itemSvg}</span>
                <span className="GlobalSideBar-categoryLabel">{props.itemText}</span>
            </a>
        </li>
    )
}

export default CategoryItem