import React from 'react'

const Header = () => {
  return (
        <div
            className="
          text-center 
          sm:flex justify-between py-3 capitalize font-bold text-xl container px-2 rounded-b-2xl "
          >
            <div className="left">
              <h2 className="sm:text-3xl">abdurashid.dev</h2>
            </div>

            <div className=" hidden sm:block  w-1/2 ">
              <nav className=" flex justify-between items-center">
                <a className='btn' href="#hero">Home</a>
                <a className='btn' href="#about">About</a>
                <a className='btn' href="#myProjects">projects</a>
                <a className='btn' href="#contacts">Contacts</a>
              </nav>
            </div>
          </div>
  )
}

export default Header