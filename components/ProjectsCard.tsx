import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { IProject } from "../type"
import Image from 'next/image'

const ProjectsCard: FunctionComponent<{
    project: IProject;
    showDetail: (id: null | number) => void;
}> = ({
    project: {
        name,
        image_path,category,deployed_url,description,github_url,key_techs,id
    },
    showDetail,
    setshowDetail,
}) => {

    return (
        <div>
            <Image src={image_path} alt={name} className="cursor-pointer" onClick={()=>setshowDetail(id)} width="300" height="150" />
            <p className="my-2 text-center">{name}</p>

            { showDetail === id &&
            
                <div
                    className="absolute top-0 left-0 z-10 grid w-full md:p-10 rounded-lg
                    p-3 h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 "
                >
              <div >
                    <img src={image_path} alt={name} className="border-4 border-gray-100" />
                <div className="flex justify-center my-4 space-x-3">
                    <a href="{github_url}" className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                        <AiFillGithub /> <span>Github</span>
                    </a>
                    <a href="{deployed_url}" className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                        <AiFillProject /> <span>Project</span>
                        </a>
                </div>
              </div>
            
                <div>
                    <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                    <h3 className="mb-3 font-medium">{description}</h3>
                    <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                        {
                            key_techs.map(tech => (
                            <span className="px-2 py-1 my-1 bg-gray-200 rounded-t-sm dark:bg-dark-200" key={tech}>
                                {tech}
                            </span>
                            ))}
                    </div>
    
                    <button onClick={() => setshowDetail(null)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                        >
                        <MdClose size={30} />
                    </button>
                    </div>
                </div>
            }

        </div>
    )
}

export default ProjectsCard
