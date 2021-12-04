import { GetServerSideProps } from 'next';
import React from 'react'
import ServiceCard from '../components/ServiceCard';
import {services} from '../data'

const index = ({ endpoint }) => {
  console.log(endpoint);
  
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        I am currently pursuing BCA Degree(First Year) from Gls University.
        I have build some projects for personal use and some for learning purpose.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        
        <h6 className='my-3 text-xl font-bold tracking-wide'>
          What I can offer 
        </h6>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map(service => (
            <div className="bg-gray-200 dark:bg-dark-200 rounded-lg col-span-2 p-2 md:col-span-1" key={service.title}>
            <ServiceCard service = {service} />
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export  const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json();
  // console.log(data);
  return {props: {endpoint: process.env.VERCEL_URL }}
}

export default index;
