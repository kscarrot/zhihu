import React from 'react'
import { Route, Switch } from "react-router-dom";
import TopstoryTabs from "../ToptoryTabs"

const TopstoryMain = props => {

    return (
        <div className="Topstory-mainColumn">
            <div className="Card Topstory-noMarginCard Topstory-tabCard">
                <TopstoryTabs cName="Topstory-tabs" />
            </div>
            <Switch>
                <Route path="/" exact>
                    main
                </Route>
                <Route path="/follow">
                    follow
                </Route>
                <Route path="/hot">
                    hot
                </Route>
            </Switch>
        </div>
    )
}

export default TopstoryMain