import {Link} from 'react-router-dom'

function HeroSection() {
  let Pdfurl = '../Afshan_Ahamed_M.pdf'

  const handlePDf = ()=>{
    window.open(Pdfurl, '_blank')
  }

  return (
    <main className="w-full md:w-[1200px] mx-auto flex md:pt-36 pt-[52px] justify-evenly md:flex-nowrap flex-wrap-reverse md:mb-40 " id="Home">
        <div>
            <h1 className="text-[20px] md:text-start text-center md:text-[36px] font-bold">Welcome ! 
              <br/> I'm <span className="text-[#4F1C51]" >Afshan</span> Ahamed M  </h1>
            <p className="md:font-semibold text-[18px] md:pl-0 pl-5 md:text-gray-500 text-gray-500 ">
              Aspiring Front End Developer, <br/> Web Developer,
              <br/> Preparing for Backend Development.
            </p>
            <button className="bg-[#4F1C51] mt-5 md:p-2 p-1 md:ml-0 ml-5 text-white rounded-lg shadow-sm hover:scale-90 duration-100 hover:shadow-lg hover:shadow-[#4F1c51] " onClick={handlePDf}  > 
              <Link to='/myPDF' target="_blank">Download CV</Link> 
               </button>
        </div>
        <div>
            <img src="../images/Afshan_Photo.png" alt="MyPhoto"  className="md:w-[350px] w-[250px] h-[200px] md:h-[250px] rounded-xl object-contain shadow-sm shadow-gray-600 " />
        </div>
    </main>
  )
}

export default HeroSection;