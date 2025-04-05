import ProjectCard from "./ProjectCard";
import ProjectData from '../Components/ProjectData'

function Projects(){
    return(
        <div className="w-full md:w-[1200px] mx-auto md:mt-12 " id="Projects" >
            <h1 className="md:text-3xl text-[28px] md:mt-0 mt-5 font-bold md:pl-32  text-[#4F1C51] md:mb-5 mb-2 pl-2 " >Projects</h1>
                <div className="grid md:grid-cols-3 gap-3 " >
                    {
                        ProjectData.map((Data, index)=>{
                            return(
                                <ProjectCard name={Data.name} content={Data.content} code={Data.code} demo={Data.demo} key={index} image={Data.image} />
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Projects;