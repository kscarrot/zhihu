import React from 'react'

const CategoryItem = props => {
    return (
        <li className="GlobalSideBar-categoryItem">
            <a href="/#" className="Button Button--plain" >
                <span className="GlobalSideBar-categoryIcon" style={props.itemColor}>{props.itemSvg}</span>
                <span className="GlobalSideBar-categoryLabel">{props.itemText}</span>
            </a>
        </li>
    )
}

export default CategoryItem