import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact(){
    let gitLink = 'https://github.com/AfshanAhamedM99?tab=repositories'
    let LinkedinLink = 'https://www.linkedin.com/in/afshan-ahamed-m-4b68a325a/'
    let OpenGit = ()=>{
        window.open(gitLink, '_blank')
    }
    let OpenLinke = ()=>{
        window.open(LinkedinLink, '_blank')
    }
    return(
        <div className='bg-black text-white w-full md:mt-32 mt-9 flex items-center justify-center md:gap-52 md:pt-10 md:pb-10 pb-2 md:flex-nowrap flex-wrap gap-10 ' >
            <div>
                <h1 className="font-bold md:text-[32px] text-[20px] " >Contact Me </h1>
                <p className="font-semibold" >Feel Free to Contact Me !</p>
            </div>
            <div>
                <ul className=" flex flex-col gap-2  ">
                    <li> <MdOutlineAlternateEmail className="inline mr-2 " /> Ahamedafshan801@gmail.com  </li>
                    <li onClick={OpenGit} className="cursor-pointer" ><BsGithub className="inline mr-2 " /> Github.com/afshanahamed99  </li>
                    <li onClick={OpenLinke} className="cursor-pointer" > <BsLinkedin className="inline mr-2"  /> Linkedin.com/AfshanAhamedM </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;