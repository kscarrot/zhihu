import React from 'react'
import TrashOutline from '../../../Svg/TrashOutline'
import HotIcon from '../../../Svg/HotIcon'

const SearchMenu = props => {

    const historyList = history => {
        let arr = JSON.parse(history)
        return (arr.map(e => (
            <div className="Menu-item" key={e}>
                <div className="SearchBar-historyItem" >
                    <span className="SearchBar-historyItemContent"><span><em></em>{e}</span></span>
                </div>
            </div>
        )))
    }

    const hotList = () => {
        const mockdata = [
            { title: "赵志勇被执行死刑", showIcon: true },
            { title: "美国5G落后中国", showIcon: true },
            { title: "中国5G时代开始", showIcon: true },
            { title: "精灵宝可梦:剑/盾", showIcon: false },
            { title: "X 战警:黑凤凰", showIcon: false },
        ]
        return (
            mockdata.map(e => {
                return (
                    <div className="Menu-item" key={e.title}>
                        <div data-za-module="TopNavBar">
                            <div data-za-module="HotSearchWordList">
                                <div className="SearchBar-topSearchItem">
                                    {e.title}
                                    {e.showIcon && <HotIcon />}
                                </div>
                            </div>
                        </div>
                    </div>)
            })

        )
    }

    return (
        <div className="Menu AutoComplete-menu SearchBar-menu SearchBar-noValueMenu">
            <div className="AutoComplete-group">
                <div className="SearchBar-label">知乎热搜</div>
                {hotList()}

            </div>
            <div className="AutoComplete-group">
                <div className="SearchBar-label SearchBar-label--history">
                    搜索历史
                                    <div className="SearchBar-historyIconWrapper" onClick={props.clear}>
                        <span className="SearchBar-historyIconShade preventCloseOnTarget"></span>
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            &#8203;
                                            <TrashOutline />
                        </span>清空
                                    </div>
                </div>
                {
                    historyList(props.history)
                }
            </div>
        </div>
    )
}

export default SearchMenu