import React from 'react'
import photto from "../../../public/images/photto.jpg";


const AboutMe = () => {
  return (
     <section
                id="about"
                className="about 
                flex-col items-center
                 sm:flex sm:flex-row
              "
              >
                <div className="left  w-full p-3">
                  <h3 className="capitalize my-3 font-bold text-3xl text-[#c73a4c]">about <span className='text-[#900781]'>me</span></h3>
    
                  <p
                    className="
                  my-4 py-2 text-[14px] 
                  sm:text-[18px]
                  "
                  >
                    I'm a passionate Frontend Developer with a strong foundation in
                    HTML, CSS, JavaScript, TypeScript, React, and Next.js. I love
                    building clean, fast, and user-friendly web applications that
                    deliver great digital experiences.
                  </p>
    
                  <p
                    className="
                  my-4 text-[14px]
                  sm:text-[18px]
                  "
                  >
                    With experience in team leadership and a focus on both code
                    quality and design aesthetics, I bring a balanced approach to
                    every project. I specialize in crafting responsive interfaces,
                    using modern libraries like TailwindCSS, ShadCN UI, and always
                    striving to blend creativity with functionality.
                  </p>
    
                  <div className="skils my-2 capitalize ">
                    <h3 className=" text-2xl font-bold pt-3 ">my skills</h3>
    
                    <div className="skillsPrasents my-2.5 ">
                      <div className="up text-slate-800 flex items-center justify-between">
                        <h4>html & css</h4>
                        <p>85%</p>
                      </div>
                     <div className="line h-2.5 rounded-2xl bg-slate-200 overflow-hidden">
                    <div 
                      className="h-full rounded-2xl w-[85%] 
                                bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)] 
                                bg-[length:300%_auto] 
                                animate-gradientMove"
                    ></div>
                  </div>
                    </div>
    
                    <div className="skillsPrasents my-2.5 ">
                      <div className="up text-slate-800 flex items-center justify-between">
                        <h4>JavaScript (ES6+)</h4>
                        <p>70%</p>
                      </div>
                      <div className="line h-2.5 rounded-2xl bg-slate-200 overflow-hidden">
                      <div 
                        className="h-full rounded-2xl w-[70%] 
                                  bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)] 
                                  bg-[length:300%_auto] 
                                  animate-gradientMove"
                      ></div>
                    </div>
                    </div>
    
                    <div className="skillsPrasents my-2.5 ">
                      <div className="up text-slate-800 flex items-center justify-between">
                        <h4>react js</h4>
                        <p>70%</p>
                      </div>
                      <div className="line h-2.5 rounded-2xl bg-slate-200 overflow-hidden">
                      <div 
                        className="h-full rounded-2xl w-[70%] 
                                  bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)] 
                                  bg-[length:300%_auto] 
                                  animate-gradientMove"
                      ></div>
                    </div>
                    </div>
    
                    <div className="skillsPrasents my-2.5 ">
                      <div className="up text-slate-800 flex items-center justify-between">
                        <h4>TailwindCSS & ShadCN</h4>
                        <p>88%</p>
                      </div>
                      <div className="line h-2.5 rounded-2xl bg-slate-200 overflow-hidden">
                      <div 
                        className="h-full rounded-2xl w-[88%] 
                                  bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)] 
                                  bg-[length:300%_auto] 
                                  animate-gradientMove"
                      ></div>
                    </div>
                    </div>
    
                    <div className="skillsPrasents my-2.5 ">
                      <div className="up text-slate-800 flex items-center justify-between">
                        <h4>UI Design (Basic)</h4>
                        <p>30%</p>
                      </div>
                      <div className="line h-2.5 rounded-2xl bg-slate-200 overflow-hidden">
                        <div 
                          className="h-full rounded-2xl w-[30%] 
                                    bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)] 
                                    bg-[length:300%_auto] 
                                    animate-gradientMove"
                        ></div>
                      </div>
                    </div>
    
                    <div className="skillsPrasents my-2.5 ">
                      <div className="up text-slate-800 flex items-center justify-between">
                        <h4>Team Leadership</h4>
                        <p>45%</p>
                      </div>
                      <div className="line h-2.5 rounded-2xl bg-slate-200 overflow-hidden">
                        <div 
                          className="h-full rounded-2xl w-[45%] 
                                    bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)] 
                                    bg-[length:300%_auto] 
                                    animate-gradientMove"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="right mt-5  h-full w-full flex justify-center">
                  <img
                    className="
                  rounded-3xl w-80 
                  sm:w-110 
                  "
                    src={photto}
                    alt=""
                  />
                </div>
              </section>
  )
}

export default AboutMe