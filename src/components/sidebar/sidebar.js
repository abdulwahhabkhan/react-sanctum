import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import LayoutContext from "../../layout/LayoutContext";

const Sidebar = (props)=>{
    let context = useContext(LayoutContext);
    let icon =  !context.sidebarMinified ? faAngleDoubleLeft : faAngleDoubleRight;
    return(
        <div id={'sidebar'} className={'sidebar'}>
            <span id={'sidebar-toggle'} onClick={()=> context.toggleSidebar() }>
                <FontAwesomeIcon icon={icon} />
            </span>
            <div className="sidebar-content">
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar