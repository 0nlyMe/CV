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
        about: "Coming Soon", 
    },

    {
        Icon: AiOutlineAntDesign,
        title: "Api Devlopment",
        about: "Coming Soon", 
    },

    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "A daily problem solver.", 
    },

    {
        Icon: AiOutlineAntDesign,
        title: "UI/Ux designer",
        about: "Coming Soon", 
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
        level: '30%',
        Icon: BsCircleFill
    },

    {
        name: 'Java Script',
        level: '40%',
        Icon: BsCircleFill
    },

    {
        name: 'React Native',
        level: '30%',
        Icon: BsCircleFill
    },

    {
        name: 'React',
        level: '50%',
        Icon: BsCircleFill
    },

    {
        name: 'Django',
        level: '30%',
        Icon: BsCircleFill
    },

    {
        name: 'Bootstrap',
        level: '40%',
        Icon: BsCircleFill
    },


]

export const tools: ISkill[] = [
    {
        name: 'Figma',
        level: '30%',
        Icon: BsCircleFill
    },

    {
        name: 'Photoshop',
        level: '60%',
        Icon: BsCircleFill
    },

    {
        name: 'Illustrator',
        level: '50%',
        Icon: BsCircleFill
    },

]

export const projects: IProject[] = [
    {
        id:1,
        name: "Amazon Clone",
        description: "Amazone clone made with React",
        image_path: "/images/amazon.png",
        deployed_url: "https://challenge-ba906.web.app/",
        github_url: "",
        category: ["react"],
        key_techs: ["React", "firebase"],
    },
    {
        id:2,
        name: "UberX Clone",
        image_path: "/images/uber.png",
        deployed_url: "",
        github_url: "https://github.com/0nlyMe/Uber-clone.git",
        category: ["next"],
        description:
        "Uber Clone made using next and tailwind",
        key_techs: ["React", "firebase", "Framer Motion"],
  },

    {
      id:3,
        name: "Yelp Camp",
        image_path: "/images/csoon.png",
        deployed_url: "",
        github_url: "",
        category: ["node", "mongo",],
        description:
        "A camp website using mongo DB",
        key_techs: [
        "Node",
        "Express",
        "Mongo",
        "REST API",
        "Bootstrap",
    ],
    },
    
      {
      id:4,
        name: "E-commerce",
        image_path: "/images/csoon.png",
        deployed_url: "",
        github_url: "",
        category: ["django",],
        description:
        "E-commerce Website made using Django",
        key_techs: [
        "Django",
        "Python",
    ],
  },

]