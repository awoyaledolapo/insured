import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className="relative bg-[#0c0115] flex flex-col-reverse lg:flex-row md:flex-row h-[900px] lg:h-[600px] md:h-[500px] justify-center text-gray-50  py-0 md:py-20  overflow-visible mt-5 lg:mt-0 md:mt-0 md:px-10 px-0">
            <img
                src="bg-pattern-intro-right-desktop.svg"
                alt="pattern right"
                className="hidden lg:block absolute right-0 top-0 h-auto z-30 pointer-events-none"
                style={{ objectFit: "cover" }}
            />
            <img
                src="bg-pattern-intro-left-desktop.svg"
                alt="pattern left"
                className="hidden lg:block absolute left-0 top-[26rem] h-auto z-30 pointer-events-none"
                style={{ objectFit: "cover" }}
            />
           <div className=" p-6 lg:p-0 flex-1 max-w-xl z-10 text-center lg:text-left md:text-left mb-[3rem] lg:mb-0">
        <div className="hidden lg:block w-[10rem] h-[1px] bg-white mb-8"></div>
        <h1 className="text-white font-semibold text-5xl md:text-5xl lg:text-6xl leading-tight lg:mb-6 mb-10 ">
          Humanizing <br /> your insurance.
        </h1>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-md md:max-w-[22rem] lg:max-w-lg">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <Link to="">
          <button className="text-white border-2 border-white px-6 py-3 text-sm tracking-wide font-semibold hover:bg-white hover:text-[#2d2640] transition-all duration-300">
            VIEW PLANS
          </button>
        </Link>
      </div>


      <div className="flex-1 flex items-center justify-center relative z-10 lg:max-w-[450px] md:max-w-[300px]  lg:mt-[10rem]">
        <img
          src="image-intro-desktop.jpg"
          alt="intro-img"
          className="w-full  object-cover "
        />
      </div>

        </div>
    )
}
export default Hero;
