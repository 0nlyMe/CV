import { FunctionComponent } from "react"
import { category } from "../type"

const
    NavItem: FunctionComponent<{
        value: category | 'all', handelerFilterCategory: Function, active:string }> = ({
        value, handelerFilterCategory, active
        }) => {
            
            let className = "cursor-pointer hover:text-green capitalize"
            if (active === value) {
                className += " text-green"
            }

    return (
        <li className={className} onClick={() =>handelerFilterCategory(value)}>
            {value}
        </li>
    )
}


const ProjectsNavbar: FunctionComponent<{ handelerFilterCategory: Function, active:string}> = (props) => {
    return (
        <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
            <NavItem value="all"  {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="django" {...props} />
            <NavItem value="node" {...props} />
            
        </div>
    )
}

export default ProjectsNavbar
