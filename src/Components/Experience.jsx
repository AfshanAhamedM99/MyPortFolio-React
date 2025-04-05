function Experience(){
    return(
        <div className=" w-full md:w-[1200px] flex mx-auto md:mt-8 md:pl-14 pl-2 flex-col " >
            <h1 className="md:text-3xl text-[28px] font-bold md:pl-20 mt-5 text-[#4F1C51] " > Experience & Certifications </h1>
            <div className="flex justify-around items-center md:flex-nowrap flex-wrap ">
                <img src="../images/Afshan_Photo.png" alt="MyPhoto"  className="md:w-[350px] md:mb-12 mb-5 w-[250px] h-[200px] md:h-[250px] rounded-xl object-contain shadow-sm shadow-gray-600 md:mt-0 mt-5 " />
                
                <div className="right-xperience">
                    <div className="border bg-black text-white md:p-7 p-2 rounded-md " >
                        <h1 className="md:text-lg text-[16px] font-bold  " >TranAct Global Pvt Ltd.</h1>
                        <p className="text-gray-300 text-[14px] " > 21 Nov 2022 - 11 Sept 2024 </p>
                        <p className="text-gray-500" > Yeshwanthpur, Opposite to Vaishnavi Saphhire Mall, Bengaluru.  </p>
                        <p className="text-gray-200 text-[14px] " >- Customer Support Respresentative </p>
                        <p className="text-gray-200 text-[14px] " >- L1 Support Agent ( Kale Logistics Process ) </p>
                    </div>
                    <div className="border bg-black text-white md:p-7 p-2 rounded-md md:mt-0 mt-2 " >
                        <h1 className="md:text-lg text-[16px] font-bold  " >Apponix Academy </h1>
                        <p className="text-gray-300 text-[14px] " > Oct 2024 - Feb 2025 </p>
                        <p className="text-gray-200 text-[14px] " >Python Full Stack Development </p>
                        <p className="text-gray-500" > RajajiNagar 4th Block, Bengaluru.  </p>
                    </div>
                    <div className="border bg-black text-white md:p-7 p-2 rounded-md md:mb-0 mb-2 md:mt-0 mt-2" >
                        <h1 className="md:text-lg text-[16px] font-bold  " >Hacker Rank Skill Certificate  </h1>
                        <p className="text-gray-300 text-[14px] " > JavaScript Basis </p>
                        <p className="text-gray-500" > 24 Nov 2024 </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Experience;