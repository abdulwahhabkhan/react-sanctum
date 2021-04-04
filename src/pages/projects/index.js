import Projects from './projects'
import Sidebar from "../../components/sidebar/sidebar";
import ProjectSidebar from "./ProjectSidebar";
import {Redirect, useLocation} from "react-router";
const ProjectsList = ()=>{
    const location = useLocation()
    if(location.pathname === "/projects")
        return(
            <Redirect
                to={{
                    pathname: "/projects/current",
                    search: "",
                    state: { referrer: location.pathname }
                }}
            />
        )

    return(
        <>
            <Sidebar>
                <ProjectSidebar />
            </Sidebar>
            <div className="content">
                <Projects />
            </div>

        </>
    )
}

export default ProjectsList
