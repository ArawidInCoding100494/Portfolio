


import photo from "../../../public/images/photo.jpg";
import akaM from "../../../public/images/akaM.png";
import articles from "../../../public/images/articles.jpg";
import createCrud from "../../../public/images/createCrud.jpg";
import zapcast from "../../../public/images/zapcast.jpg";

import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <div
        className=" home
        bg-gradient-to-br 
        from-slate-800 
        via-slate-400 
        to-slate-700 
        text-white
        overflow-hidden
        "
      >
        <header className=" fixed top-0 left-0 w-full z-30 bg-slate-500 sm:px-15 ">

          <div className="
          text-center 
          sm:flex justify-between py-2.5 capitalize font-bold text-2xl container">

            <div className="left">
              <h2 className="sm:text-3xl">abdurashid.dev</h2>
            </div>

            <div className="right hidden sm:block  w-1/2 ">
              <nav className=" flex justify-between">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#myProjects">projects</a>
                <a href="#contacts">Contacts</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="container py-8">

          <section id="hero"
            className="hero 
                flex 
                flex-col
                items-center
                justify-center
                h-dvh
                    "
          >
            <h1 className="capitalize font-bold text-5xl mt-5 text-center">
              frontend developer
            </h1>

            <h2 className="capitalize font-bold text-4xl my-7 text-slate-900 text-center">
              abdumajidov abdurashid
            </h2>

            <p className="  
            p-3 text-center text-[15px] mb-3 
            sm:w-[55%] text-[18px]
            ">
              I’m Abdurashid, a frontend developer focused on building modern
              and responsive web applications. Check out my projects below or
              get in touch to collaborate.
            </p>

            <div className="main-btns relative group inline-block">
              <a
                href="/abdurashid.pdf"
                download
                className="border rounded-xl py-1 px-5 mt-4 cursor-pointer hover:bg-slate-500 capitalize "
              >
                my cv
              </a>

              {/* Tooltip */}
              <span className="absolute -left-1/2 -translate-x-1/2  -mt-3  w-max opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded">
                here you can see my cv
              </span>
            </div>
          </section>

          <section id="about"
            className="about 
            flex-col items-center
             sm:flex flex-row
          ">
            <div className="left  w-full p-3">
              <h3 className="capitalize my-3 font-bold text-3xl">about me</h3>

              <p className="
              my-4 py-2 text-[14px] 
              sm:text-[18px]
              ">
                I'm a passionate Frontend Developer with a strong foundation in
                HTML, CSS, JavaScript, TypeScript, React, and Next.js. I love
                building clean, fast, and user-friendly web applications that
                deliver great digital experiences.
              </p>

              <p className="
              my-4 text-[14px]
              sm:text-[18px]
              ">
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
                  <div className="line h-2.5 rounded-2xl bg-slate-500">
                    <div className="colorLine rounded-2xl h-2.5 w-[85%] bg-slate-700"></div>
                  </div>
                </div>

                <div className="skillsPrasents my-2.5 ">
                  <div className="up text-slate-800 flex items-center justify-between">
                    <h4>JavaScript (ES6+)</h4>
                    <p>70%</p>
                  </div>
                  <div className="line h-2.5 rounded-2xl bg-slate-500">
                    <div className="colorLine rounded-2xl h-2.5 w-[70%] bg-slate-700"></div>
                  </div>
                </div>

                <div className="skillsPrasents my-2.5 ">
                  <div className="up text-slate-800 flex items-center justify-between">
                    <h4>react js</h4>
                    <p>70%</p>
                  </div>
                  <div className="line h-2.5 rounded-2xl bg-slate-500">
                    <div className="colorLine rounded-2xl h-2.5 w-[70%] bg-slate-700"></div>
                  </div>
                </div>

                <div className="skillsPrasents my-2.5 ">
                  <div className="up text-slate-800 flex items-center justify-between">
                    <h4>TailwindCSS & ShadCN</h4>
                    <p>88%</p>
                  </div>
                  <div className="line h-2.5 rounded-2xl bg-slate-500">
                    <div className="colorLine rounded-2xl h-2.5 w-[88%] bg-slate-700"></div>
                  </div>
                </div>

                <div className="skillsPrasents my-2.5 ">
                  <div className="up text-slate-800 flex items-center justify-between">
                    <h4>UI Design (Basic)</h4>
                    <p>30%</p>
                  </div>
                  <div className="line h-2.5 rounded-2xl bg-slate-500">
                    <div className="colorLine rounded-2xl h-2.5 w-[30%] bg-slate-700"></div>
                  </div>
                </div>

                <div className="skillsPrasents my-2.5 ">
                  <div className="up text-slate-800 flex items-center justify-between">
                    <h4>Team Leadership</h4>
                    <p>45%</p>
                  </div>
                  <div className="line h-2.5 rounded-2xl bg-slate-500">
                    <div className="colorLine rounded-2xl h-2.5 w-[45%] bg-slate-700"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right mt-5  h-full w-full flex justify-center">
              <img className="
              rounded-3xl w-80 
              sm:w-110 
              " src={photo} alt="" />
            </div>
          </section>

          <section id="myProjects" 
          className=" h-full  py-5 ">

            <h1 className=" text-center capitalize font-bold text-3xl pt-10 ">
              my projects
            </h1>

            <p className="text-center my-2.5 text-slate-900">
              A selection of my recent work spanning various industries and
              technologies.
            </p>

            <div className="cards  
            h-full p-3  mt-5  grid grid-cols-1 gap-2.5 
            sm:grid-cols-3
            ">

              <a className="card 
            border 
            border-slate-500 
            rounded-2xl
            cursor-pointer 
            relative 
            group 
            inline-block 
            my-3
            "
                href="https://aka-market5.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <img className="rounded-t-2xl" src={akaM} alt="" />
                </div>

                <div className="down capitalize p-3">
                  <h3 className="text-2xl my-3 ">Aka-Market</h3>

                  <div
                    className="notes-main 
                        flex
                        justify-between
                        align-items: center
                        my-2.5
                        "
                  >
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      react js
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      tailwind css
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      sass
                    </h4>
                  </div>

                  <div className="notes-down flex justify-between align-items: center">
                    <h4 className="p-1 px-2 rounded-2xl bg-slate-500">
                      web development
                    </h4>

                    <div
                      className="notes-down-right  
                      w-1/2 flex justify-between 
                     "
                    >
                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        github
                      </span>

                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        demo
                      </span>
                    </div>
                  </div>

                  <span className="absolute opacity-0 -left-16  -top-5 group-hover:opacity-100 bg-slate-900 p-1 rounded capitalize">
                    loyiha haqida izoh
                  </span>
                </div>
              </a>

              <a className="card 
            border 
            border-slate-500 
            rounded-2xl
            cursor-pointer 
            relative 
            group 
            inline-block 
            my-3
            "
                href="https://articles-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <img className="rounded-t-2xl" src={articles} alt="" />
                </div>

                <div className="down capitalize p-3">
                  <h3 className="text-2xl my-3 ">Articles</h3>

                  <div
                    className="notes-main 
                        flex
                        align-items: center
                        my-2.5
                        "
                  >
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      react js
                    </h4>
                    {/* <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      tailwind css
                    </h4> */}
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      sass
                    </h4>
                  </div>

                  <div className="notes-down flex justify-between align-items: center">
                    <h4 className="p-1 px-2 rounded-2xl bg-slate-500">
                      web development
                    </h4>

                    <div
                      className="notes-down-right  
                      w-1/2 flex justify-between 
                     "
                    >
                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        github
                      </span>

                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        demo
                      </span>
                    </div>
                  </div>

                  <span className="absolute opacity-0 -left-16  -top-5 group-hover:opacity-100 bg-slate-900 p-1 rounded capitalize">
                    loyiha haqida izoh
                  </span>
                </div>
              </a>

              <a className="card 
            border 
            border-slate-500 
            rounded-2xl
            cursor-pointer 
            relative 
            group 
            inline-block
            my-3 
            "
                href="https://create-user-cards.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <img className="rounded-t-2xl" src={createCrud} alt="" />
                </div>

                <div className="down capitalize p-3">
                  <h3 className="text-2xl my-3 ">creating card & delet it</h3>

                  <div
                    className="notes-main 
                        flex
                        justify-between
                        align-items: center
                        my-2.5
                        "
                  >
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      react js
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      tailwind css
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      sass
                    </h4>
                  </div>

                  <div className="notes-down flex justify-between align-items: center">
                    <h4 className="p-1 px-2 rounded-2xl bg-slate-500">
                      web development
                    </h4>

                    <div
                      className="notes-down-right  
                      w-1/2 flex justify-between 
                     "
                    >
                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        github
                      </span>

                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        demo
                      </span>
                    </div>
                  </div>

                  <span className="absolute opacity-0 -left-16  -top-5 group-hover:opacity-100 bg-slate-900 p-1 rounded capitalize">
                    loyiha haqida izoh
                  </span>
                </div>
              </a>

              <a className="card 
            border 
            border-slate-500 
            rounded-2xl
            cursor-pointer 
            relative 
            group 
            inline-block
            my-3 
            "
                href="https://oner-market.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <img className="rounded-t-2xl" src={zapcast} alt="" />
                </div>

                <div className="down capitalize p-3">
                  <h3 className="text-2xl my-3 ">авто запчасти</h3>

                  <div
                    className="notes-main 
                        flex
                        justify-between
                        align-items: center
                        my-2.5
                        "
                  >
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      react js
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      tailwind css
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      sass
                    </h4>
                  </div>

                  <div className="notes-down flex justify-between align-items: center">
                    <h4 className="p-1 px-2 rounded-2xl bg-slate-500">
                      web development
                    </h4>

                    <div
                      className="notes-down-right  
                      w-1/2 flex justify-between 
                     "
                    >
                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        github
                      </span>

                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        demo
                      </span>
                    </div>
                  </div>

                  <span className="absolute opacity-0 -left-16  -top-5 group-hover:opacity-100 bg-slate-900 p-1 rounded capitalize">
                    loyiha haqida izoh
                  </span>
                </div>
              </a>

              {/* <a
                className="card 
            border 
            border-slate-500 
            rounded-2xl
            cursor-pointer 
            relative 
            group 
            inline-block 
            "
                href="https://aka-market5.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <img className="rounded-t-2xl" src={akaM} alt="" />
                </div>

                <div className="down capitalize p-3">
                  <h3 className="text-2xl my-3 ">Aka-Market</h3>

                  <div
                    className="notes-main 
                        flex
                        justify-between
                        align-items: center
                        my-2.5
                        "
                  >
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      react js
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      tailwind css
                    </h4>
                    <h4 className=" inline-block p-1 px-2 rounded-2xl bg-slate-500  ">
                      sass
                    </h4>
                  </div>

                  <div className="notes-down flex justify-between align-items: center">
                    <h4 className="p-1 px-2 rounded-2xl bg-slate-500">
                      web development
                    </h4>

                    <div
                      className="notes-down-right  
                      w-1/2 flex justify-between 
                     "
                    >
                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        github
                      </span>

                      <span className="p-1 px-2 rounded-2xl bg-slate-500">
                        demo
                      </span>
                    </div>
                  </div>

                  <span className="absolute opacity-0 -left-16  -top-5 group-hover:opacity-100 bg-slate-900 p-1 rounded capitalize">
                    loyiha haqida izoh
                  </span>
                </div>
              </a> */}
            </div>
          </section>

          <section id="contacts" 
          className=" container  pt-15">
            <div className="contacts-header text-center">
              <h3 className="font-bold text-2xl">Get In Touch</h3>
              <p className="my-4 px-2">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life.
              </p>
            </div>

            <div className=" 
            mt-10 border border-slate-500 rounded-2xl p-3.5 flex   flex-col 
            sm:flex-row justify-between 
            ">
              <div className="main-left 
              mb-5 border-b
              sm:border-b-0
              ">
                <h4 className="text-2xl mb-4">Contact Information</h4>

                <div className="left-content">

                  <a
                    href="mailto:abdumajidovabdurashid572@gmail.com"
                      rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        mt-2
                        "
                       >
                    <div className="icon bg-slate-700 p-2 rounded-full  mr-2">
                      <MdEmail size={30} />
                    </div>
                    <div className="main-title">
                      <p>Email</p>
                      <h4>abdumajidovabdurashid572@gmail.com</h4>
                    </div>
                  </a>

                  <a
                    href="tel:+998901260607"
                    className="
                    flex
                    items-center
                    mt-8
                    "
                  >
                    <div className="icon bg-slate-700 p-2 rounded-full  mr-4">
                      <MdLocalPhone size={30} />
                    </div>
                    <div className="main-title">
                      <p>phone</p>
                      <h4>+998901260607</h4>
                    </div>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/uxcDYvKdhBSeygmJA"
                      target="_blank"
                      rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      mt-8
                      "
                  >
                    <div className="icon bg-slate-700 p-2 rounded-full  mr-4">
                      <FaMapLocationDot size={30} />
                    </div>
                    <div className="main-title">
                      <p>location</p>
                      <h4>Tashkent, Uzbekistan</h4>
                    </div>
                  </a>
                </div>

                <div className="left-bottom my-4">
                  <h4 className="font-bold pt-2">Connect With Me</h4>

                  <div className="bottom-links 
                  w-[80%] flex justify-between items-center my-2
                  sm:w-2/3
                  ">
                    <a
                      href="https://github.com/ArawidInCoding100494"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className=" inline-block bg-slate-700 p-2 rounded-full">
                        <LuGithub size={20} />
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className=" inline-block bg-slate-700 p-2 rounded-full">
                        <FaLinkedinIn size={20} />
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/abdurashid__126/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className=" inline-block bg-slate-700 p-2 rounded-full">
                        <FaInstagram size={20} />
                      </div>
                    </a>

                    <a
                      href="mailto:abdumajidovabdurashid572@gmail.com"
                      rel="noopener noreferrer"
                    >
                      <div className=" inline-block bg-slate-700 p-2 rounded-full">
                        <MdEmail size={20} />
                      </div>
                    </a>


                    <a
                      href="https://t.me/abdurashid_126"
                      rel="noopener noreferrer"
                    >
                      <div className=" inline-block bg-slate-700 p-2 rounded-full">
                        <FaTelegramPlane size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="main-right 
                    pl-3
                    mt-3
                    "
                    >
                <h4 className=" text-2xl">Send Me a Message</h4>

                <form
                  className="
                w-full 
                mt-3.5
                flex
                flex-col
                gap-4
                "
                >
                  <label
                    className="
                  w-full
                  flex
                  items-center
                  justify-between
                  pt-3
                  pb-1
                  "
                  >
                    <input
                      className="
                      border
                      p-1
                      w-[48%]
                      rounded-2xl
                      capitalize
                      outline-0 
                      "
                      type="text"
                      placeholder="your name"
                    />
                    <input
                      className="
                      border
                      p-1
                      w-[48%]
                      rounded-2xl
                      capitalize
                      outline-0
                      "
                      type="text"
                      placeholder="your surname"
                    />
                  </label>

                  <input
                    className="border w-full p-1 rounded-2xl capitalize outline-0"
                    type="email"
                    placeholder="your email"
                  />

                  <input
                    className="
                  border
                  w-full
                  rounded-2xl
                  p-1
                  outline-0
                  "
                    type="number"
                    placeholder="your phone number (optional)"
                  />

                  <textarea
                    className="border rounded-2xl p-1 outline-0"
                    name="message"
                    placeholder="your message"
                    rows="3"
                  ></textarea>

                  <button className="border rounded-2xl flex justify-center items-center capitalize p-1 cursor-pointer">
                    send message{" "}
                    <FaTelegramPlane style={{ marginLeft: "8px" }} />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
