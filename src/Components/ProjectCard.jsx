function ProjectCard({name, content, code, demo, image}){
    let OpenLink = ()=>{
        window.open(demo, '_blank')
    }
    let OpenCode = ()=>{
        window.open(code, '_blank')
    }
    return(
        <div className="bg-black text-white shadow-slate-600 md:shadow-2xl shadow-lg md:p-5 p-2 rounded-lg md:mb-9 " >
            <div className="flex flex-col gap-3 items-center justify-start">
                <img src={image} alt="Project_Image !"  
                className="md:w-[250px] md:h-[200px] w-[200px] h-[150px]  rounded-lg object-cover " />
                <h1 className="font-bold md:text-[28px] text-[20px] " >{name}</h1>
                <p className="md:w-[250px] md:mb-0 mb-5 text-center " >{content}</p>
            </div>
            <div className="flex gap-6 md:mt-10 items-center justify-center md:mb-0 mb-2 ">
                <button className="bg-[#4F1C51] rounded-lg p-2 hover:bg-black duration-200 " onClick={OpenLink} > Demo </button>
                <button className=" hover:bg-[#4F1C51] hover:rounded-lg duration-200 p-2 " onClick={OpenCode}  >  Source Code </button>
            </div>
        </div>
    )
}

export default ProjectCard;