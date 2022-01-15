import { RiComputerLine } from 'react-icons/ri'
import { IProject, Iservice, ISkill } from './type'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'


export const services:Iservice[] = [

    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about: "I can build a beutifull WebSites using <b>HTML</b>, <b>CSS</b>, and <b>React.js/Next.js/JavaScript</b>",
    },

    {
        Icon: FaServer,
        title: "Backend Devlopment",
        about: "I love Django and firebase as backend.", 
    },

    {
        Icon: AiOutlineAntDesign,
        title: "Api Devlopment",
        about: "I have some experience with Api and more coming really really soon. ", 
    },

    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "A daily problem solver.", 
    },

    {
        Icon: AiOutlineAntDesign,
        title: "UI/Ux designer",
        about: "Using Figma", 
    },

    {
        Icon: RiComputerLine,
        title: "Learner",
        about: "Learning new skills and Making new projects via online courses and tutorials", 
    },


]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '40%',
        Icon: BsCircleFill
    },

    {
        name: 'Java Script',
        level: '50%',
        Icon: BsCircleFill
    },

    {
        name: 'React Native',
        level: '40%',
        Icon: BsCircleFill
    },

    {
        name: 'React',
        level: '40%',
        Icon: BsCircleFill
    },

    {
        name: 'Django',
        level: '55%',
        Icon: BsCircleFill
    },

    {
        name: 'Bootstrap',
        level: '50%',
        Icon: BsCircleFill
    },


]

export const tools: ISkill[] = [
    {
        name: 'Figma',
        level: '50%',
        Icon: BsCircleFill
    },

    {
        name: 'Photoshop',
        level: '70%',
        Icon: BsCircleFill
    },

    {
        name: 'Illustrator',
        level: '60%',
        Icon: BsCircleFill
    },

    {
        name: 'Frame',
        level: '30%',
        Icon: BsCircleFill
    },
]

export const projects: IProject[] = [
    {
      id:3,
        name: "Amazon clone",
        image_path: "/images/amazon.png",
        deployed_url: "",
        github_url: "https://github.com/0nlyMe",
        category: ["node", "react", ],
        description:
        "Full-stack Amazon-clone website with firebase and stripe",
        key_techs: [
        "React",
        "Node",
        "Firebase",
        "REST API",
    ],
  },

  {
      id:4,
        name: "E-commerce",
        image_path: "/images/ecommerce.png",
        deployed_url: "",
        github_url: "https://github.com/0nlyMe",
        category: ["django"],
        description:
        "Basic E-commerce website with django as backend",
        key_techs: ["python", "Django", "BootStrap"],
  },

  {
      id:5,
        name: "UberXclone",
        image_path: "/images/uber.png",
        deployed_url: "",
        github_url: "https://github.com/0nlyMe",
        category: ["react"],
        description:
        "Fully dynamic and cool uberX clone made with search and map, path, total, etc.. ",
        key_techs: ["React", "Next", "tailwind"],
  },
]