import React from 'react'

const NavListItem = props => {
    return (
        <li className={"GlobalSideBar-navItem" + props.cName}>
            <a href="/#" className="Button GlobalSideBar-navLink Button--plain" >
                {props.itemSvg}
                <span className="GlobalSideBar-navText">{props.itemText}</span>
                {
                    props.number &&
                    <span className="GlobalSideBar-navNumber">{props.number}</span>
                }
            </a>
        </li>
    )
}

export default NavListItem