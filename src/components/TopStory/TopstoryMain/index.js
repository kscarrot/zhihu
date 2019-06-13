import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import TopstoryTabs from "../ToptoryTabs"
import TopstoryItem from "../TopstoryItem"
import mockjson from "../mock.json"

const TopstoryMain = props => {
    return (
        <div className="Topstory-mainColumn">
            <div className="Card Topstory-noMarginCard Topstory-tabCard">
                <TopstoryTabs cName="Topstory-tabs" />
            </div>
            <Switch>
                <Route path="/" exact>
                    {mockjson.data.map(e => {
                        if (e.verb === "MEMBER_VOTEUP_ANSWER") {
                            return <TopstoryItem itemData={e} key={e.id} />
                        }
                    })}
                </Route>
                <Route path="/follow">
                    {mockjson.data.map(e => {
                        if (e.verb === "MEMBER_VOTEUP_ANSWER") {
                            return <TopstoryItem itemData={e} key={e.id} />
                        }
                    })}
                </Route>
                <Route path="/hot">
                    {mockjson.data.map(e => {
                        if (e.verb === "MEMBER_VOTEUP_ANSWER") {
                            return <TopstoryItem itemData={e} key={e.id} />
                        }
                    })}
                </Route>
            </Switch>
        </div>
    )
}

export default TopstoryMain