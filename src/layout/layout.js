import React,{useState} from 'react'
import { Route, Switch } from "react-router-dom"
import { withSanctum } from "react-sanctum"
import ReactNotification from 'react-notifications-component'
import Header from "./header/header"
import Guest from "./header/guest"
import routesLit from "./../routes"
import LayoutContext from "./LayoutContext";
import Exception from "../components/ui/exceptionmodal";
import {Redirect, useLocation} from "react-router";

const Layout = ({ authenticated, user, signOut })=>{
    const location = useLocation()
    let header = authenticated ? <Header user={user} logout={signOut} /> : <Guest />
    const toggleSidebar= ()=>{
        setSidebarMinified(!sidebarMinified)
    }
    const [sidebarMinified, setSidebarMinified] =useState(false)
    const noAuthRoutes = ['/', '/login']
    if(authenticated === null){
        return (
            <div className="full-screen-loader">
                <div className="cssload-container">
                    <div className="cssload-whirlpool" />
                </div>
            </div>
        )
    }

    if(authenticated === false && noAuthRoutes.indexOf(location.pathname) < 0){
        return(
            <Redirect
                to={{
                    pathname: "/login",
                    search: "",
                    state: { referrer: location.pathname }
                }}
            />
        )
    }
    const classes = [
        sidebarMinified ? 'mini-sidebar': ''
    ]


    return(
        <div className={classes.join(' ')}>
            <ReactNotification />
            {header}
            <Exception />
            <div id={'page-container'} className="content animate-panel">
                <div className="content-wrapper" >
                    <LayoutContext.Provider value={{
                        sidebar: true,
                        sidebarMinified: sidebarMinified,
                        toggleSidebar: toggleSidebar
                    }}>
                        <Switch>
                            {routesLit.map((route, idx) =>
                                <Route path={route.path} component={route.component} key={idx} exact={!route.children}/>
                            )}
                        </Switch>
                    </LayoutContext.Provider>

                </div>
            </div>
        </div>
    )
}

export default withSanctum(Layout)