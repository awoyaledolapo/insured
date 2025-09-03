import { Link } from "react-router-dom"


const FindOut = () => {
  return (
<div className=" py-30">
    <div className=" overflow-hidden w-full max-w-[300px] lg:max-w-[1100px] md:max-w-[1100px] mx-auto bg-[#0c0115] relative flex items-center justify-center min-h-[200px]">
      <img
        src="bg-pattern-how-we-work-desktop.svg"
        alt="pattern right"
        className="hidden md:block absolute right-0 top-0 h-auto z-0 pointer-events-none"
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col lg:flex-row md:flex-row justify-around items-center lg:gap-[13rem] md:gap-[13rem] gap-[3rem]  z-10 w-full">
        <h1 className="lg:text-[40px] md:text-[35px] text-[30px] text-white max-w-[50rem] text-center lg:text-start ">
          Find out more <br/>about how we work
        </h1>
        <Link to="">
          <button className="text-white border-white border-2 p-2 w-40 bg-transparent hover:cursor hover:text-gray-950 hover:bg-white transition-all duration-300 relative z-10">
            HOW WE WORK
          </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default FindOut