import { FaLongArrowAltRight } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

function About(){
    return(
        <div className="w-full md:w-[1200px] mx-auto flex md:flex-nowrap flex-wrap md:gap-20 pt-5 md:pl-16 md:pt-10 ">
            <div>
                <h1 className="md:text-[36px] text-[28px] md:text-center font-bold md:ml-0 ml-2 text-[#4F1C51] md:mb-0 mb-2 " >Skills</h1>
                <div className="left-icons md:mt-10 ">
                <div className="grid grid-cols-3 md:text-5xl md:gap-9 gap-3 text-3xl md:ml-0 ml-5 ">
                    <span className=" p-2 rounded-md text-orange-500 border bg-black " > <FaHtml5 /> </span>
                    <span className=" p-2 rounded-md text-blue-600 border bg-black " > <FaCss3 /> </span>
                    <span className=" p-2 rounded-md text-blue-500 border bg-black " > <FaReact /> </span>
                    <span className=" p-2 rounded-md text-yellow-500 border bg-black " > <FaJsSquare /> </span>
                    <span className=" p-2 rounded-md text-green-500 border bg-black " > <FaNode /> </span>
                    <span className=" p-2 rounded-md text-green-900 border bg-black " > <DiMongodb /> </span>
                    <span className=" p-2 rounded-md text-white border bg-black " > <SiExpress /> </span>
                    <span className=" p-2 rounded-md text-white border bg-black " > <SiExpress /> </span>
                    <span className=" p-2 rounded-md text-white border bg-black " > <SiExpress /> </span>
                </div>
                </div>
            </div>
            <div className="flex md:mt-24 gap-7 md:flex-nowrap flex-wrap  ">
                <ul>
                    <h1 className="text-[20px] font-semibold pb-3 text-[#4F1C51] md:mt-0 mt-3 " > <FaLongArrowAltRight className="inline" /> Front End Development </h1>
                        <li className="font-semibold opacity-85 " >1. HTML</li>
                        <li className="font-semibold opacity-85 " >2. CSS</li>
                        <li className="font-semibold opacity-85 " >3. JS</li>
                </ul>
                <ul>
                    <h1 className="text-[20px] font-semibold pb-3 text-[#4F1C51] " > <FaLongArrowAltRight className="inline" /> Frameworks and Libraries:  </h1>
                        <li className="font-semibold opacity-85 " >1. React JS</li>
                        <li className="font-semibold opacity-85 " >2. Tailwind CSS</li>
                        <li className="font-semibold opacity-85 " >3. Bootstrap</li>
                        <li className="font-semibold opacity-85 " >4. React Bootstrap</li>
                        <li className="font-semibold opacity-85 " >5. JQuery  </li>

                </ul>
                <ul>
                    <h1 className="text-[20px] font-semibold pb-3 text-[#4F1C51] " > <FaLongArrowAltRight           className="inline" /> DataBase </h1>
                        <li className="font-semibold opacity-85 " >1. MySQL</li>
                </ul>
            </div>
        </div>
    )
}

export default About;