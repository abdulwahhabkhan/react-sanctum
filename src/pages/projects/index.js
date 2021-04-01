import Projects from './projects'
import Sidebar from "../../components/sidebar/sidebar";
import ProjectSidebar from "./ProjectSidebar";
const ProjectsList = ()=>{
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
