


import { useState } from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../../Components/AboutMe/AboutMe";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Contacts from "../../Components/Contacts/Contacts";

const Home = () => {
 





  return (
    <div className="">
      <section
        className=" home
        bg-[linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088)]
        bg-size-[300%_auto] 
        bg-position-[left_center] 
        overflow-hidden
        "
      >
        <header className=" fixed top-0 left-0 w-full z-10 ">
        <Header/>
        </header>

        <main className="container py-8 pb-24">
          <Hero/>

         <AboutMe/>


          <section id="myProjects" className=" h-full  py-5 ">
            <h1 className=" text-center capitalize font-bold text-3xl pt-10 ">
              my projects
            </h1>

            <p className="text-center my-2.5 text-slate-900">
              A selection of my recent work spanning various industries and
              technologies.
            </p>
            <MyProjects/>
          </section>

          <Contacts />

          <footer className="  fixed bottom-0 left-0 right-0 container border-t border-black/20 sm:px-15 ">
          <div
            className=" 
          text-center py-2.5 capitalize font-bold text-2xl
          sm:flex justify-center "
          >
            <div className="left">
              <h2 className="hidden text-3xl sm:block">abdurashid.dev</h2>
            </div>

            <div className="right w-full container  sm:hidden">
              <nav className=" flex justify-between">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#myProjects">projects</a>
                <a href="#contacts">Contacts</a>
              </nav>
            </div>
          </div>
        </footer>
        </main>
        
      </section>
    </div>
  );
};

export default Home;
