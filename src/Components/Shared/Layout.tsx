import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, Link } from "react-router-dom"
import { useState } from "react";
import { Menu, X, } from 'lucide-react';
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';



const socials = [
    {
        icon: <FontAwesomeIcon icon={faSquareFacebook} />,
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
        icon: <FontAwesomeIcon icon={faPinterest} />,
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram} />
    }

]

const sections = [
    {
        title: "OUR COMPANY",
        links: ["How We Work", "Why Insure?", "View Plans", "Reviews"],
    },
    {
        title: "HELP ME",
        links: ["FAQ", "Terms of Use", "Privacy Policy", "Cookies"],
    },
    {
        title: "CONTACT",
        links: ["Sales", "Support", "Live Chat"],
    },
    {
        title: "OTHERS",
        links: ["Careers", "Press", "Licenses"],
    },
];

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <header>
                <nav className="flex justify-around items-center gap-[10rem] py-3 lg:py-5 md:py-5 bg-white">
                    <div>
                        <img src="logo.svg" alt="logo" />
                    </div>
                    <div className="flex gap-7 p-2 items-center   ">
                        <div className='gap-7 lg:flex  md:hidden hidden'>

                            <Link to="/" className="text-gray-500 hover:text-gray-950 transition-all duration-300">How We Work</Link>
                            <Link to="/about" className="text-gray-500 hover:text-gray-950 transition-all duration-300" >Blog</Link>
                            <Link to="/account" className="text-gray-500 hover:text-gray-950 transition-all duration-300">Account</Link>
                        </div>
                        <Link to="">
                            <button className="hidden cursor-pointer lg:inline md:inline text-gray-950 border-gray-950 border-2 p-2 w-40 bg-white hover:bg-gray-950 hover:text-white transition-all duration-300">
                                View Plans
                            </button>
                        </Link>
                        <button className="text-gray-950 bg-white inline lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} className="" /> : <Menu size={34} className="" />}
                        </button>
                    </div>
                </nav>

                {
                    isOpen && (
                        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#0c0115] text-white flex flex-col items-center gap-6 px-10 py-10 rounded-md shadow-lg z-50">
                            <Link
                                to="/"
                                className="uppercase tracking-wide text-sm hover:text-gray-300 transition-all duration-300"
                             
                              onClick={() => setIsOpen(!isOpen)}
                          >
                                How We Work
                            </Link>
                            <Link
                                to="/about"
                                className="uppercase tracking-wide text-sm hover:text-gray-300 transition-all duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                           >
                                Blog
                            </Link>
                            <Link
                                to="/account"
                                className="uppercase tracking-wide text-sm hover:text-gray-300 transition-all duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                                Account
                            </Link>
                            <Link to="">
                                <button   onClick={() => setIsOpen(!isOpen)}
                           className="uppercase tracking-wide text-sm border border-white px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300">
                                    View Plans
                                </button>
                            </Link>
                        </div>
                    )
                }

            </header>

            <Outlet />
            <section className="bg-gray-50 relative ">
                <img
                    src="bg-pattern-footer-desktop.svg"
                    alt="pattern right"
                    className="hidden md:block absolute left-0 top-0 h-auto z-0 pointer-events-none"
                    style={{ objectFit: "cover" }}
                />
                <div className="w-full max-w-[1100px] lg:max-w-[1080px] md:max-w-[700px] mx-auto z-10 flex flex-col gap-10 relative">
                    <div className="relative z-10 flex flex-col items-center justify-center gap-4 lg:flex-row md:flex-row lg:justify-between md:justify-between lg:items-center md:items-center mt-10 ">
                        <div className='cursor-pointer'>
                            <img src="logo.svg" alt="logo" className="relative z-10" />
                        </div>
                        <div>
                            <Link to="">
                                {socials.map((social, index) => (
                                    <span key={index} className='text-[24px] text-gray-500 lg:m-1 md:m-1'>
                                        {social.icon}
                                    </span>
                                ))}
                            </Link>
                        </div>
                    </div>
                    <div className="h-[0.5px] bg-gray-500 mb-[2rem] lg:w-full md:w-full w-[250px]  self-center"></div>
                    <div>
                        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 mb-[2rem] md:grid md:grid-cols-4 md:gap-8 md:text-left md:items-start">
                            {sections.map((section) => (
                                <div key={section.title}>
                                    <h2 className="font-semibold text-xs text-gray-500 mb-4 uppercase tracking-wide">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-2 cursor-pointer">
                                        {section.links.map((link) => (
                                            <li key={link}>
                                                <a href="#" className="font-semibold tracking-wide text-sm">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Layout;