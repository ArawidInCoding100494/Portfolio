import React from 'react'
import akaM from "../../../public/images/akaM.png";
import articles from "../../../public/images/articles.jpg";
import createCrud from "../../../public/images/createCrud.jpg";
import zapcast from "../../../public/images/zapcast.jpg";

const MyProjects = () => {
    const projects = [
  {
    id: 1,
    title: "Aka-Market",
    image: akaM, 
    link: "https://aka-market-6.vercel.app/login",
    techStack: ["react js", "tailwind css", "sass"],
    category: "web development",
    description: "bu loyiha texnikalar dokonida sotuvchilar uchun maxsus ishlab chiqilgan veb-ilova bo'lib, ularning mahsulotlarini samarali boshqarish imkonini beradi.",
    github: "#",
    demo: "https://aka-market-6.vercel.app/login"
  },
  {
    id: 2,
    title: "Articles",
    image: articles,
    link: "https://articles-sigma.vercel.app/",
    techStack: ["react js", "sass"],
    category: "web development",
    description: "loyiha asosan react router dom ni o'rganish maqsadida qilingan",
    github: "#",
    demo: "https://articles-sigma.vercel.app/"
  },
  {
    id: 3,
    title: "creating card & delet it",
    image: createCrud,
    link: "https://create-user-cards.vercel.app/",
    techStack: ["react js", "tailwind css", "sass"],
    category: "web development",
    description: " bu loyiha CRUD-TODO darstliklarini organish jarayonida yaratilgan ",
    github: "#",
    demo: "https://create-user-cards.vercel.app/"
  },
  {
    id: 4,
    title: "авто запчасти",
    image: zapcast,
    link: "https://aka-market-6.vercel.app/login",
    techStack: ["react js", "tailwind css", "sass"],
    category: "web development",
    description: "loyihada faqat html, sass, va qisman javascriptdan foydalanilgan ",
    github: "#",
    demo: "https://aka-market-6.vercel.app/login"
  }
];
  return (
    <div className="projects-container grid sm:grid-cols-3 gap-4 px-3">
  {projects.map((project) => (
    <a
      key={project.id}
      className="card border border-slate-200 rounded-2xl cursor-pointer relative group inline-block my-3 p-2 duration-500 bg-white hover:shadow-2xl hover:p-0"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="top">
        <img className="rounded-t-2xl" src={project.image} alt={project.title} />
      </div>

      <div className="down capitalize p-3">
        <h3 className="text-2xl my-3 font-bold">{project.title}</h3>

        <div className="notes-main flex justify-between items-center my-2.5">
          {project.techStack.map((tech, index) => (
            <h4 key={index} className="inline-block p-1 px-2.5 rounded-2xl bg-gray-100 text-[#c73a4c] font-bold  text-sm">
              {tech}
            </h4>
          ))}
        </div>

        <div className="notes-down flex justify-between items-center">
          <h4 className="p-1 px-2.5 rounded-2xl bg-gray-100  text-[#c73a4c] font-bold text-sm">
            {project.category}
          </h4>

          <div className="notes-down-right w-1/2 flex justify-between">
            <span className="p-1 px-2.5 rounded-2xl bg-gray-100 text-[#c73a4c] font-bold text-sm">github</span>
            <span className="p-1 px-2.5 rounded-2xl bg-gray-100 text-[#c73a4c] font-bold text-sm">demo</span>
          </div>
        </div>

        {/* Hoverda chiqadigan izoh */}
        <span className="absolute opacity-0 -left-16 -top-5 group-hover:opacity-100 bg-orange-600 p-2 rounded-md capitalize text-white text-xs w-64 transition-opacity duration-500 pointer-events-none z-50 shadow-xl">
          {project.description}
        </span>
      </div>
    </a>
  ))}
</div>
  )
}

export default MyProjects