import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

import {ThemeProvider} from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <div
    className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48"
  >
    <div
      className="col-span-12 p-4 text-center  shadow-custom-light dark:shadow-custom-dark bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl">
      <Sidebar />
    </div>
    <div
      className="col-span-12 bg-white  dark:bg-dark-200  shadow-custom-light dark:shadow-custom-dark overflow-hidden lg:col-span-9 rounded-2xl flex flex-col dark:bg-dark-500 ">
      <Navbar />
      <Component {...pageProps} />
    </div>

      </div>
    </ThemeProvider>
  )
  
}
export default MyApp
