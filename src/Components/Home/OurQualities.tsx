import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning} from '@fortawesome/free-solid-svg-icons'
import { CircleDollarSign,CircleUser } from 'lucide-react';

const details=[
    {
     icon:<FontAwesomeIcon icon={faBoltLightning} />,
     heading :"Snappy Process",
     text:"Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms. ",
     
    },
    {
     icon:<CircleDollarSign size={50}  />,
     heading :" Affordable Prices",
     text:"We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",

    },
    {
     icon:<CircleUser  size={50}  />,
     heading :"People First",
     text:"Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",

    }
  ]

const OurQualities = () => {
  return (
    <div className="flex flex-col items-center  py-10 lg:mt-[20rem] ">
      
     
      <div className="w-full max-w-[1200px]  px-15">
       <div className="flex flex-col items-center md:items-start lg:items-start">
  <div className="w-40 h-[0.5px] bg-gray-500 lg:mb-[4rem] md:mb-[4rem] mb-[1rem]"></div>
  <h2 className="text-black  font-[550] text-[30px] lg:text-[65px] mb-20 text-center md:text-left lg:text-left">
    We're different
  </h2>
</div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0">
  {details.map((deets, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center md:items-start md:text-left"
    >
      <span className="bg-[#BFC8D0] mb-6 text-white text-[56px] rounded-full w-[100px] h-[100px] flex items-center justify-center">
        {deets.icon}
      </span>
      <h2 className="mb-2 text-[28px] font-bold text-[#22223B] w-[300px]">
        {deets.heading}
      </h2>
      <p className='text-[#7A7A7A] w-[300px] text-[18px] font-normal leading-relaxed'>
        {deets.text}
      </p>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default OurQualities;
