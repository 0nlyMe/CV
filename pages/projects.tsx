import { useState } from "react"
import { GiSteamLocomotive } from "react-icons/gi"
import ProjectsCard from "../components/ProjectsCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import { category } from "../type"

const Projects = () => {

    const [project, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const [showDetail, setshowDetail] = useState<number | null>(null)

    const handelerFilterCategory = (category: category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) => project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    }

    return (
        <div className="px-5 py-2 overflow-y-scroll "style={{height: '65vh' }}>
            <ProjectsNavbar  handelerFilterCategory={ handelerFilterCategory} active={active} />
            <div className="relative grid grid-cols-12 gap-4 my-3">
                {
                    project.map(project => (
                        <div className="col-span-12 sm:col-span-6 bg-gray-200 dark:bg-dark-200 lg:col-span-4 p-2">
                            <ProjectsCard project={project} key={project.name} showDetail={showDetail} setshowDetail={setshowDetail} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
