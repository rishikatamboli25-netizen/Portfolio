import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Talk = () => {
  return (
    <>
      <section className='h-fit bg-primary border-t border-gray-300 flex flex-col items-center py-16'>
        <div className='text-[2.5rem] font-semibold font-jakarta '>Let's build something <span className='text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]'>solid,</span> and fast.
        <a href="mailto:rishikatamboli25@gmail.com" className='text-[1.5rem] font-jakarta font-thin text-center pt-2 underline-offset-1 block'>Rishikatamboli25@gmail.com</a>
        </div>

        <div className='flex gap-7 justify-between mt-4'>
        <span className='border border-gray-400 px-8 py-1 font-jakarta font-thin uppercase flex items-center gap-2' > <FaGithub size={20}/> Github</span>
        <span className='border border-gray-400 px-8 py-1 font-jakarta font-thin uppercase flex items-center gap-2' > <FaLinkedin size={20}/> linkedin</span>
        </div>

      </section>
    </>
  )
}

export default Talk
