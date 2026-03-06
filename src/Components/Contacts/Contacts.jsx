import { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Contacts = () => {

      // ------------- TELEGRAM BOT CONFIG -------------
  const BOT_TOKEN = "8562172346:AAF4hcRihHNiGlJAiycMHd8ynsHToZEFkuE";
  const CHAT_ID = "117340626";
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;



     const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });


    // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
📩 Yangi xabar!
👤 Name: ${formData.name}
👤 Surname: ${formData.surname}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
💬 Message: ${formData.message}
`;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    // alert("Yuborildi! ✔️");

    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    });
  };


  return (
    <section id="contacts" className=" container  pt-15 px-3">
                <div className="contacts-header text-center">
                  <h3 className="font-bold text-2xl">Get In Touch</h3>
                  <p className="my-4 px-2">
                    Have a project in mind? Let's discuss how we can work together
                    to bring your ideas to life.
                  </p>
                </div>
    
                <div
                  className=" 
                mt-10 border border-slate-500 rounded-2xl p-3.5 flex   flex-col 
                sm:flex-row justify-between 
                "
                >
                  <div className="main-left 
                  mb-5 border-b
                  sm:border-b-0
                  "
                  >
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
                        <div className="icon bg-white border border-black/20 p-2 rounded-full  mr-2">
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
                        <div className="icon bg-white border border-black/20 p-2 rounded-full  mr-4">
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
                        <div className="icon bg-white border border-black/20 p-2 rounded-full  mr-4">
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
    
                      <div
                        className="bottom-links 
                      w-[80%] flex justify-between items-center my-2
                      sm:w-2/3
                      "
                      >
                        <a
                          href="https://github.com/ArawidInCoding100494"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className=" inline-block bg-white border border-black/20 p-2 rounded-full">
                            <LuGithub size={20} />
                          </div>
                        </a>
    
                        <a
                          href="https://www.linkedin.com/feed/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className=" inline-block bg-white border border-black/20 p-2 rounded-full">
                            <FaLinkedinIn size={20} />
                          </div>
                        </a>
    
                        <a
                          href="https://www.instagram.com/abdurashid__126/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className=" inline-block bg-white border border-black/20 p-2 rounded-full">
                            <FaInstagram size={20} />
                          </div>
                        </a>
    
                        <a
                          href="mailto:abdumajidovabdurashid572@gmail.com"
                          rel="noopener noreferrer"
                        >
                          <div className=" inline-block bg-white border border-black/20 p-2 rounded-full">
                            <MdEmail size={20} />
                          </div>
                        </a>
    
                        <a
                          href="https://t.me/abdurashid_126"
                          rel="noopener noreferrer"
                        >
                          <div className=" inline-block bg-white border border-black/20 p-2 rounded-full">
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
                      onSubmit={handleSubmit}
                      className="w-full mt-3.5 flex flex-col gap-4"
                    >
                      <label className="w-full flex items-center justify-between pt-3 pb-1">
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="border p-1 w-[48%] rounded-2xl capitalize outline-0"
                          type="text"
                          placeholder="your name"
                          required
                        />
    
                        <input
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          className="border p-1 w-[48%] rounded-2xl capitalize outline-0"
                          type="text"
                          placeholder="your surname"
                          required
                        />
                      </label>
    
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border w-full p-1 rounded-2xl capitalize outline-0"
                        type="email"
                        placeholder="your email"
                        required
                      />
    
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border w-full rounded-2xl p-1 outline-0"
                        type="number"
                        placeholder="your phone number (optional)"
                      />
    
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border rounded-2xl p-1 outline-0"
                        placeholder="your message"
                        rows="3"
                        required
                      ></textarea>
    
                      <button
                        type="submit"
                        className="border rounded-2xl flex justify-center items-center capitalize p-1 cursor-pointer"
                      >
                        send message{" "}
                        <FaTelegramPlane style={{ marginLeft: "8px" }} />
                      </button>
                    </form>
    
                  </div>
                </div>
              </section>
  )
}

export default Contacts