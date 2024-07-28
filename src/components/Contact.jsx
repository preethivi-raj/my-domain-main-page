import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
        <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    Hello! I'm Preethiviraj, a Mechatronics Engineer and an aspiring Full Stack Developer. I am currently learning the MERN stack and Java, aiming to build a strong foundation in web development. I have worked on projects like a contact-saving application and a Twitter clone, gaining hands-on experience with technologies such as Redux, Axios, React Router DOM, CORS, Mongoose, and Express. These projects have helped me develop my skills and understand the full-stack development process. I am eager to start my professional journey and contribute to a dynamic team. I'm excited to solve real-world problems and make a meaningful impact through my work.
                    </p>
                </div>

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">15
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Repositories</span></p>
                    </div>

                     <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Projects</span></p>
                    </div>

                   {/* <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>happy clients</span></p>
                    </div> */}

                </div>

            </div>

            <form
                action="https://getform.io/f/bjjededb"
                method="POST"
                className=" max-w-6xl  p-5 md:p-12"
                id="form"
            >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            
          </form>

        </div>
        
        </Reveal>
    </div>
  )
}

export default Contact