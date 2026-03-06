import React from 'react'

const Hero = () => {
  return (
    <section
            id="hero"
            className="hero 
                flex 
                flex-col
                items-center
                justify-center
                h-dvh
                    "
          >
            <h1 className="capitalize font-bold text-5xl mt-5 text-center text-[#c73a4c]">
              frontend developer
            </h1>

            <h2 className="capitalize font-bold text-4xl my-7 text-slate-900 text-center ">
              abdumajidov abdurashid
            </h2>

            <p
              className="  
            p-3 text-center mb-3 
            sm:w-[55%] text-[18px]
            "
            >
              I’m Abdurashid, a frontend developer focused on building modern
              and responsive web applications. Check out my projects below or
              get in touch to collaborate.
            </p>

            <div className="main-btns relative group inline-block">
              <a
                href="/abdurashid.pdf"
                download
                className="btn px-2.5 font-bold"
              >
                my cv
              </a>

              {/* Tooltip */}
              <span className="absolute -left-25 -translate-x-1/2  -mt-8  w-max opacity-0 group-hover:opacity-100 transition border border-black/20 bg-gray-100 capitalize font-bold text-sm px-2 py-1 rounded">
                Here you can download my cv 🎉
              </span>
            </div>
          </section>
  )
}

export default Hero