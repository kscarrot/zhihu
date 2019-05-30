import React from 'react'
import CategoryItem from './CategoryItem'
import Live from './Live'
import Ebook from './Ebook'
import Org from './Org'
import Edit from './Edit'
import Infinity from './Infinity'

const CategoryList = props => {
    const list = [
        { text: "Live", color: "rgb(255,207,0)", svg: <Live /> },
        { text: "书店", color: "rgb(67,212,128)", svg: <Ebook /> },
        { text: "圆桌", color: "rgb(0,132,255)", svg: <Org /> },
        { text: "专栏", color: "rgb(15,136,235)", svg: <Edit /> },
        { text: "付费咨询", color: "rgb(84,120,240)", svg: <Infinity /> },
    ]

    return (
        <ul className="GlobalSideBar-categoryList">
            {list.map(item => <CategoryItem  key={item.text} itemColor={{ color: item.color }} itemText={item.text} itemSvg={item.svg} />)}
        </ul>
    )
}

export default CategoryList