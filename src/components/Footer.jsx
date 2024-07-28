import React from 'react'
import { FaGithubSquare, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4 '>
            <h3 className='text-2xl text-gray-200 font-semibold'>Preethiviraj</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a target='_blank' href="https://github.com/preethivi-raj"><FaGithubSquare /></a>
                <a  target="_blank" href="https://www.linkedin.com/in/preethiviraj/"><FaLinkedinIn/></a>
            </div>

        </div>

     
        
    </div>
  )
}

export default Footer