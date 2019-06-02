import React from 'react'

const NavListItem = props => {



    return (
        <li className={"GlobalSideBar-navItem" + props.cName}>
            <div href="#" onClick={props.click} className="Button GlobalSideBar-navLink Button--plain" >
                {props.itemSvg}
                <span className="GlobalSideBar-navText">{props.itemText}</span>
                {
                    props.number &&
                    <span className="GlobalSideBar-navNumber">{props.number}</span>
                }
            </div>
        </li>
    )
}

export default NavListItem