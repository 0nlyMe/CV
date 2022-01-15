import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'


 
const Sidebar = () => {
    const { theme, setTheme } = useTheme();

        const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div>
            <img
                src="./images/anas.jpg"
                alt="user avtar"
                className="object-contain h-32 mx-auto rounded-full w-15" 
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
                <span className="text-green">Anas M.</span> Shaikh
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full dark:bg-black-500">
                web Devloper
            </p>
            
            <a
                className="flex rounded-full px-2 py-1 my-2 items-center justify-center bg-gray-200 dark:bg-dark-200 dark:bg-black-500 "
                href="name" >
                <GiTie className='w-6 h-6' />
                Download Resume</a>
            
            
            {/* social Icons */}
            <div className="flex justify-around my-5 text-green md:w-full w-9/12 mx-auto">
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href="">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            

            {/* adress */}
            <div className="my-5 py-4 bg-gray-200 dark:bg-dark-200 rounded dark:bg-black-500"
                style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Gujrat,India</span>
                </div>

                {/* Buttons */}
                <p className="my-2">7016866305</p>
                <p className="my-2">shaikhanas668@gmail.com</p>
            </div>

            {/* email Button */}
            <button className=" bg-black bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full text-white my-2 py-2 focus:outline-none"
                onClick={() => window.open('mailto:shaikhanas668@gmail.com')}>Email ME</button>
            <button
                onClick={changeTheme}
                className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full text-white my-2 py-2">Toggle Theme</button>
        </div>
    )
}

export default Sidebar
