import * as React from "react"

const ContextProps = {
    sidebar: true,
    sidebarMinified: false,
    toggleSidebar: ()=> {}
}

const LayoutContext = React.createContext(ContextProps)

export default LayoutContext