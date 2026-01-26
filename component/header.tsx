import { useState } from "react";
import Image from "next/image";
import useHeaderColor from "./utils/headerColor";



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const color = useHeaderColor();

    return (
        <div className="z-[9999999999] fixed w-full px-10 max-md:px-2 py-4 text-center">
        <header className={` w-full bg-white/10 backdrop-blur-xl px-5 max-md:px-4 py-3 rounded-full flex justify-between items-center transition-colors ease-out duration-300 text-${color} `}>
          <Image
            src={(color=="black")?"/logoWithText.png":"/logoWithText-White.png"}
            alt="Letmoveit Logo"
            width={120}
            height={23}
            className="w-[9.7vw] max-md:w-[25vw] h-auto"
          />

          <nav className="w-auto flex items-center justify-between">
            <div className="w-auto flex items-center">
              <a href="#" className="max-md:hidden mx-3 font-medium text-[1vw]">Support</a>
              <a href="#" className="max-md:hidden mx-3 px-10 py-2 font-medium text-[1vw] text-white bg-[var(--primary)] rounded-xl hover:animate-[gradient_0.3s_ease-in-out] active:animate-[active_0.2s_ease-in-out]">Find Truck</a>
              <button role="button" className="mx-3 max-md:mx-0 px-4 py-2 max-md:py-[6px] flex items-center space-x-1 border-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M12.6469 4.66884L13.233 3.3704L14.5315 2.78424C14.8208 2.65069 14.8208 2.2426 14.5315 2.10905L13.233 1.52289L12.6469 0.217026C12.5133 -0.072342 12.1052 -0.072342 11.9717 0.217026L11.3855 1.51547L10.0797 2.10163C9.79029 2.23518 9.79029 2.64327 10.0797 2.77682L11.3781 3.36298L11.9643 4.66884C12.0978 4.95821 12.5133 4.95821 12.6469 4.66884ZM6.74079 5.7818L5.56106 3.1849C5.30137 2.60617 4.47037 2.60617 4.21068 3.1849L3.03094 5.7818L0.434052 6.96153C-0.144684 7.22864 -0.144684 8.05222 0.434052 8.31191L3.03094 9.49164L4.21068 12.0885C4.47779 12.6673 5.30137 12.6673 5.56106 12.0885L6.74079 9.49164L9.33768 8.31191C9.91642 8.0448 9.91642 7.22122 9.33768 6.96153L6.74079 5.7818ZM11.9643 10.6046L11.3781 11.903L10.0797 12.4892C9.79029 12.6228 9.79029 13.0308 10.0797 13.1644L11.3781 13.7505L11.9643 15.0564C12.0978 15.3458 12.5059 15.3458 12.6394 15.0564L13.2256 13.758L14.5315 13.1718C14.8208 13.0383 14.8208 12.6302 14.5315 12.4966L13.233 11.9105L12.6469 10.6046C12.5133 10.3152 12.0978 10.3152 11.9643 10.6046Z" fill="#5AA36A"/>
                </svg>
                <span className="font-medium text-[1vw] max-md:text-[2.5vw]">Try Okeru.ai</span>
              </button>
            </div>
            <div className="w-auto ml-6 max-md:ml-0 flex items-center">
              <button role="button" className="flex mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.625C0 2.5184 2.5184 0 5.625 0H12.375C15.4816 0 18 2.5184 18 5.625V12.375C18 15.4816 15.4816 18 12.375 18H5.625C2.5184 18 0 15.4816 0 12.375V5.625Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.9988 1.40625C11.9988 0.6296 12.6284 0 13.4051 0H16.5938C17.3704 0 18 0.6296 18 1.40625V16.5938C18 17.3704 17.3704 18 16.5938 18H13.4051C12.6284 18 11.9988 17.3704 11.9988 16.5938V1.40625ZM0 1.40625C0 0.6296 0.6296 0 1.40625 0H4.59492C5.37157 0 6.00117 0.6296 6.00117 1.40625V16.5938C6.00117 17.3704 5.37157 18 4.59492 18H1.40625C0.629599 18 0 17.3704 0 16.5938V1.40625Z" fill="#008753"/>
                </svg>
              </button>
              <button
                onClick={toggleMenu}
                className="group flex flex-col items-center justify-center space-y-1"
            >
                <span
                className={`block bg-${color} w-7 h-[3px] rounded-full transition-all duration-400 ${
                    isOpen ? "opacity-0 w-7" : ""
                }`}
                ></span>
                <span
                className={`block bg-${color} w-7 h-[3px] absolute rounded-full transition-all duration-400 ${
                    isOpen ? "rotate-45 origin-center opacity-100 translate-y-[1.6px]" : "opacity-0 translate-y-0"
                }`}
                ></span>
                <span
                className={`block bg-${color} w-7 h-[3px] transition-all duration-400 ${
                    isOpen ? "-rotate-45 origin-center" : ""
                }`}
                ></span>
                <span
                className={`block bg-${color} w-7 h-[3px] rounded-full transition-all duration-400 ${
                    isOpen ? "opacity-0 w-7" : ""
                }`}
                ></span>
            </button>
            </div>
            <div className={``}>
                <div className={`max-md:hidden w-auto h-[300px] absolute top-0 right-0 transition-all duration-400 mt-[65px] mr-[1.9vw] text-black flex items-center space-x-[1vw] ${
                    isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    } origin-top`}>
                    <div className="w-[43vw] h-full bg-[#F0F1F3] rounded-xl">
                        <div className="w-full flex justify-between px-10 py-5">
                            <div className="w-full flex text-left justify-between space-x-5">
                                <div className="max-w-max flex flex-col space-y-4">
                                    <h4 className="py-2 text-[1vw] text-left font-medium rounded-md">Product</h4>
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col items-start text-[0.842vw] font-normal space-y-4">
                                            <a href="#" className="hover:text-[var(--primary)]">Residential</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Business</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Item Delivery</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Marketplace</a>
                                            <a href="#" className="hover:text-[var(--primary)]">API for Business</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Okeru.ai</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Coperate</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-max flex flex-col space-y-4">
                                    <h4 className="py-2 text-[1vw] text-left font-medium rounded-md">Earn</h4>
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col items-start text-[0.842vw] font-normal space-y-4">
                                            <a href="#" className="hover:text-[var(--primary)]">Truck Owner</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Loader</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Agent</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-max flex flex-col space-y-4">
                                    <h4 className="py-2 text-[1vw] text-left font-medium rounded-md">Company</h4>
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col items-start text-[0.842vw] font-normal space-y-4">
                                            <a href="#" className="hover:text-[var(--primary)]">Mission</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Careers</a>
                                            <a href="#" className="hover:text-[var(--primary)]">News</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Team</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-max flex flex-col space-y-4">
                                    <h4 className="bg-transparent px-0 py-2 text-left text-[1vw] font-medium rounded-md">Support</h4>
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col items-start text-[0.842vw] font-normal space-y-4">
                                            <a href="#" className="hover:text-[var(--primary)]">Call</a>
                                            <a href="#" className="hover:text-[var(--primary)]">Email</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-max flex flex-col space-y-6">
                                    <h4 className="bg-transparent px-0 py-2 text-left text-[1vw] font-medium rounded-md">Garage</h4>
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col items-start text-[0.842vw] font-normal space-y-4">
                                            <a href="#" className="hover:text-[var(--primary)]">Find us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30vw] h-full bg-[#F0F1F3] rounded-xl">
                        <div className="w-full flex flex-col items-center px-7 py-7 space-y-4">
                            <a href="#" className="w-full flex items-center justify-between space-x-5">
                                <div className="w-full flex items-start space-x-5">
                                    <div className="bg-white min-w-[3.21vw] min-h-[3.21vw] flex items-center justify-center rounded-md overflow-hidden">
                                        <svg className="w-[13px] h-auto" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <rect width="19" height="19" rx="2.56757" fill="url(#pattern0_17538_18229)"/>
                                            <defs>
                                            <pattern id="pattern0_17538_18229" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use 
                                                xlinkHref="#image0_17538_18229" 
                                                transform="scale(0.0104167)"
                                            />
                                            </pattern>
                                            <image id="image0_17538_18229" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO2cO4pVURBFV6CRn8k4AlsDnYCZAzATBTEwMPQDzsExGDgDh+EHFEQEMyPbLQ3d0HilT0PzrOpz1oLKHvU2tW69H+8eEBERERERERERERERkcCJJTtGAcUoYHYBmaxG/P34d8Ab4DXwCngC3APuAHsKYOcCzlp3gWvApVM8938JVF0jdvW8v4EPwFvgOXADuDhM02BgmUTAv+oH8BS42iXQagJyWN+AW50CrSYgwD7wuFOgLCbgqB50C5TFBOwfvkG3CZTFBOTw09LlToGymIAcfz+oDpJFBXw5+p5QHSSLCjio290CZTEBL7sFymICDn4ILA+RhQV86hYoiwn42S1QGgrYtdDygUUB9UOLGzBPjajut+lfPbAooH5ocQPmqRHV/Tb9qwcWBdQPLW7APDWiut+mf/XAooD6ocUNmKdGVPfb9K8eWBRQP7S4AfPUiOp+m/7VA4sC6ocWN2CeGlHdb9O/emBRQP3Q4gbMUyOq+236Vw8sCqgfWtyAeWpEGpV/zKJWwMduV0QW2wD/nEutgBfdrogstgHeoEHd8D97ixKlV/+jjiuZRV6C3h8/XaU6TBa8UXuvU6AsJuB+t0BZRMAv4GGnQFlIwFfgZqdAqwj4fngG3ZUugVY5suwZcB24cIo85QPLORfgoX2c82Mr5WQUUIwCilFAMQoQERERERERERERERHOwh+HcRZfC9OtywAAAABJRU5ErkJggg==" />
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col items-start space-y-1">
                                        <h4 className="text-[.9vw] text-left font-normal">Register as a Truck owner</h4>
                                        <p className="text-[.7vw] text-left text-[#000000B2] font-normal">Join thousands of verified truck partners. Get move request, accept and schedule moves.</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg className="w-[.52vw] h-auto" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                        <path d="M0.261745 8.46756L3.73378 4.99553L0.261745 1.52349C-0.0872483 1.1745 -0.0872483 0.610738 0.261745 0.261745C0.610738 -0.0872483 1.1745 -0.0872483 1.52349 0.261745L5.63087 4.36913C5.97987 4.71812 5.97987 5.28188 5.63087 5.63087L1.52349 9.73825C1.1745 10.0872 0.610738 10.0872 0.261745 9.73825C-0.0782998 9.38926 -0.0872483 8.81656 0.261745 8.46756Z" fill="black" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="w-full flex items-center justify-between space-x-5">
                                <div className="w-full flex items-start space-x-5">
                                    <div className="bg-white min-w-[3.21vw] min-h-[3.21vw] flex items-center justify-center rounded-md overflow-hidden">
                                        <svg className="w-[.6vw] h-auto" xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                            <path d="M5.7 4.75H1.9C0.855 4.75 0 5.605 0 6.65V11.4C0 11.9225 0.4275 12.35 0.95 12.35H1.9V18.05C1.9 18.5725 2.3275 19 2.85 19H4.75C5.2725 19 5.7 18.5725 5.7 18.05V12.35H6.65C7.1725 12.35 7.6 11.9225 7.6 11.4V6.65C7.6 5.605 6.745 4.75 5.7 4.75Z" fill="black"/>
                                            <path d="M3.79844 3.8C4.84778 3.8 5.69844 2.94934 5.69844 1.9C5.69844 0.850659 4.84778 0 3.79844 0C2.7491 0 1.89844 0.850659 1.89844 1.9C1.89844 2.94934 2.7491 3.8 3.79844 3.8Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col items-start space-y-1">
                                        <h4 className="text-[.9vw] text-left font-normal">Register as a Loader</h4>
                                        <p className="text-[.7vw] text-left text-[#000000B2] font-normal">Join thousands of verified loaders. Get move request, accept and earn daily revenue. Upto NGN20,000/day</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg className="w-[.52vw] h-auto" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                        <path d="M0.261745 8.46756L3.73378 4.99553L0.261745 1.52349C-0.0872483 1.1745 -0.0872483 0.610738 0.261745 0.261745C0.610738 -0.0872483 1.1745 -0.0872483 1.52349 0.261745L5.63087 4.36913C5.97987 4.71812 5.97987 5.28188 5.63087 5.63087L1.52349 9.73825C1.1745 10.0872 0.610738 10.0872 0.261745 9.73825C-0.0782998 9.38926 -0.0872483 8.81656 0.261745 8.46756Z" fill="black" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="w-full flex items-center justify-between space-x-5">
                                <div className="w-full flex items-start space-x-5">
                                    <div className="bg-white min-w-[3.21vw] min-h-[3.21vw] flex items-center justify-center rounded-md overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                            <path d="M1.29708 13C2.01048 13 2.59416 12.4163 2.59416 11.7029V7.16313C2.59416 6.44974 2.01048 5.86605 1.29708 5.86605C0.583687 5.86605 0 6.44974 0 7.16313V11.7029C0 12.4163 0.583687 13 1.29708 13ZM6.72537 9.38763L7.67872 9.71838C7.75006 9.74433 7.8214 9.7573 7.89274 9.7573H12.3223C13.0422 9.7573 13.6194 10.3345 13.6258 11.0544L8.83313 12.8508C8.57371 12.9481 8.28835 12.9611 8.02245 12.8833L3.89124 11.7159V5.86605H4.92891C5.08456 5.86605 5.24021 5.89199 5.38289 5.95036L9.87728 7.63008C10.1756 7.74033 10.3767 8.02569 10.3767 8.34996C10.3767 8.77151 10.0329 9.11524 9.61137 9.11524H7.90571C7.82789 9.11524 7.75006 9.10227 7.67224 9.06984L6.94587 8.79097C6.77725 8.72612 6.58917 8.81691 6.53081 8.98553C6.47244 9.14767 6.55675 9.32926 6.72537 9.38763ZM12.426 2.55849L9.18334 0.243203C8.72936 -0.0810676 8.12622 -0.0810676 7.67872 0.243203L4.43602 2.55849C4.09229 2.80494 3.89124 3.19406 3.89124 3.61562V4.56897H4.93539C5.09753 4.56897 5.26615 4.6014 5.41532 4.65977L10.4674 6.67673C11.1938 6.97506 11.6737 7.67548 11.6737 8.46021H12.9708V3.61562C12.9708 3.19406 12.7698 2.80494 12.426 2.55849ZM7.78249 5.21751C7.6009 5.21751 7.45822 5.07483 7.45822 4.89324C7.45822 4.71165 7.6009 4.56897 7.78249 4.56897C7.96408 4.56897 8.10676 4.71165 8.10676 4.89324C8.10676 5.07483 7.96408 5.21751 7.78249 5.21751ZM7.78249 3.92043C7.6009 3.92043 7.45822 3.77775 7.45822 3.59616C7.45822 3.41457 7.6009 3.27189 7.78249 3.27189C7.96408 3.27189 8.10676 3.41457 8.10676 3.59616C8.10676 3.77775 7.96408 3.92043 7.78249 3.92043ZM9.07957 5.21751C8.89798 5.21751 8.7553 5.07483 8.7553 4.89324C8.7553 4.71165 8.89798 4.56897 9.07957 4.56897C9.26116 4.56897 9.40384 4.71165 9.40384 4.89324C9.40384 5.07483 9.26116 5.21751 9.07957 5.21751ZM9.07957 3.92043C8.89798 3.92043 8.7553 3.77775 8.7553 3.59616C8.7553 3.41457 8.89798 3.27189 9.07957 3.27189C9.26116 3.27189 9.40384 3.41457 9.40384 3.59616C9.40384 3.77775 9.26116 3.92043 9.07957 3.92043Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col items-start space-y-1">
                                        <h4 className="text-[.9vw] text-left font-normal">Register as an Agent</h4>
                                        <p className="text-[.7vw] text-left text-[#000000B2] font-normal">Join thousands of verified Agent. Booking for someone? Book a move for anyone with your unique ID and earn commissions Upto NGN25,000/move</p>
                                    </div>
                                </div>
                                <div className="">
                                    <svg className="w-[.52vw] h-auto" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                        <path d="M0.261745 8.46756L3.73378 4.99553L0.261745 1.52349C-0.0872483 1.1745 -0.0872483 0.610738 0.261745 0.261745C0.610738 -0.0872483 1.1745 -0.0872483 1.52349 0.261745L5.63087 4.36913C5.97987 4.71812 5.97987 5.28188 5.63087 5.63087L1.52349 9.73825C1.1745 10.0872 0.610738 10.0872 0.261745 9.73825C-0.0782998 9.38926 -0.0872483 8.81656 0.261745 8.46756Z" fill="black" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </nav>
        </header>
        {/* MOBILE MENU */}
                <div className={`bg-white md:hidden w-full text-black h-screen m-0 overflow-hidden fixed top-0 left-0 transition-all duration-400 text-black flex flex-col space-x-[1vw] ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    } origin-top`}>
                    {/* spacing for header */}
                    <div className="w-full absolute py-6 px-3 flex items-center justify-end">
                        <button
                            onClick={toggleMenu}
                            className="group flex flex-col items-center justify-center space-y-1"
                        >
                            <span
                            className={`block bg-black w-7 h-[3px] rounded-full transition-all duration-400 ${
                                isOpen ? "opacity-0 w-7" : ""
                            }`}
                            ></span>
                            <span
                            className={`block bg-black w-7 h-[3px] absolute rounded-full transition-all duration-400 ${
                                isOpen ? "rotate-45 origin-center opacity-100 translate-y-[1.6px]" : "opacity-0 translate-y-0"
                            }`}
                            ></span>
                            <span
                            className={`block bg-black w-7 h-[3px] transition-all duration-400 ${
                                isOpen ? "-rotate-45 origin-center" : ""
                            }`}
                            ></span>
                            <span
                            className={`block bg-black w-7 h-[3px] rounded-full transition-all duration-400 ${
                                isOpen ? "opacity-0 w-7" : ""
                            }`}
                            ></span>
                        </button>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between py-2">
                        <div className="mt-13 px-5 flex flex-col space-y-6 overflow-x-auto scrollbar-thin scrollbar-brand">
                            <details className="group border-b border-black/10 pb-1">
                                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium list-none">
                                    Product
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                    <svg
                                        className="
                                        w-4 h-4 transition-transform duration-300
                                        group-open:-rotate-360
                                        md:hidden
                                        "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    </span>
                                </summary>

                                <div className="mt-3 pl-3 flex flex-col items-start space-y-3 text-sm text-black/80">
                                    <a href="#" className="hover:text-[var(--primary)]">Residential</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Business</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Item Delivery</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Marketplace</a>
                                    <a href="#" className="hover:text-[var(--primary)]">API for Business</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Okeru.ai</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Corporate</a>
                                </div>
                            </details>
                            <details className="group border-b border-black/10 pb-1">
                                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium list-none">
                                    Earn
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                    <svg
                                        className="
                                        w-4 h-4 transition-transform duration-300
                                        group-open:-rotate-360
                                        md:hidden
                                        "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>

                                    </span>
                                </summary>

                                <div className="mt-3 pl-3 flex flex-col items-start space-y-3 text-sm text-black/80">
                                    <a href="#" className="hover:text-[var(--primary)]">Truck Owner</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Loader</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Agent</a>
                                </div>
                            </details>
                            <details className="group border-b border-black/10 pb-1">
                                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium list-none">
                                    Company
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                    <svg
                                        className="
                                        w-4 h-4 transition-transform duration-300
                                        group-open:-rotate-360
                                        md:hidden
                                        "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>

                                    </span>
                                </summary>

                                <div className="mt-3 pl-3 flex flex-col items-start space-y-3 text-sm text-black/80">
                                    <a href="#" className="hover:text-[var(--primary)]">Mission</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Careers</a>
                                    <a href="#" className="hover:text-[var(--primary)]">News</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Team</a>
                                </div>
                            </details>
                            <details className="group border-b border-black/10 pb-1">
                                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium list-none">
                                    Support
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                    <svg
                                        className="
                                        w-4 h-4 transition-transform duration-300
                                        group-open:-rotate-360
                                        md:hidden
                                        "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>

                                    </span>
                                </summary>

                                <div className="mt-3 pl-3 flex flex-col items-start space-y-3 text-sm text-black/80">
                                    <a href="#" className="hover:text-[var(--primary)]">Call</a>
                                    <a href="#" className="hover:text-[var(--primary)]">Email</a>
                                </div>
                            </details>
                            <details className="group border-b border-black/10 pb-1">
                                <summary className="flex items-center justify-between cursor-pointer text-lg font-medium list-none">
                                    Garage
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                    <svg
                                        className="
                                        w-4 h-4 transition-transform duration-300
                                        group-open:-rotate-360
                                        md:hidden
                                        "
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>

                                    </span>
                                </summary>

                                <div className="mt-3 pl-3 flex flex-col items-start space-y-3 text-sm text-black/80">
                                    <a href="#" className="hover:text-[var(--primary)]">Find us</a>
                                </div>
                            </details>
                            <div className="w-full mt-3">
                                <div className="w-full flex items-center overflow-x-scroll  scrollbar-thin scrollbar-brand px-7 py-7 space-x-10 scroll-smooth snap-x snap-mandatory select-none">
                                    <a href="#" className="w-full flex flex-shrink-0 items-center justify-between space-x-5 snap-center">
                                        <div className="w-full flex items-center space-x-5">
                                            <div className="bg-[#D7D7D755] min-w-[50px] min-h-[50px] flex items-center justify-center rounded-md overflow-hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                    <rect width="19" height="19" rx="2.56757" fill="url(#pattern0_17538_18228)"/>
                                                    <defs>
                                                    <pattern id="pattern0_17538_18228" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use 
                                                        xlinkHref="#image0_17538_18228" 
                                                        transform="scale(0.0104167)"
                                                    />
                                                    </pattern>
                                                    <image id="image0_17538_18228" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO2cO4pVURBFV6CRn8k4AlsDnYCZAzATBTEwMPQDzsExGDgDh+EHFEQEMyPbLQ3d0HilT0PzrOpz1oLKHvU2tW69H+8eEBERERERERERERERkcCJJTtGAcUoYHYBmaxG/P34d8Ab4DXwCngC3APuAHsKYOcCzlp3gWvApVM8938JVF0jdvW8v4EPwFvgOXADuDhM02BgmUTAv+oH8BS42iXQagJyWN+AW50CrSYgwD7wuFOgLCbgqB50C5TFBOwfvkG3CZTFBOTw09LlToGymIAcfz+oDpJFBXw5+p5QHSSLCjio290CZTEBL7sFymICDn4ILA+RhQV86hYoiwn42S1QGgrYtdDygUUB9UOLGzBPjajut+lfPbAooH5ocQPmqRHV/Tb9qwcWBdQPLW7APDWiut+mf/XAooD6ocUNmKdGVPfb9K8eWBRQP7S4AfPUiOp+m/7VA4sC6ocWN2CeGlHdb9O/emBRQP3Q4gbMUyOq+236Vw8sCqgfWtyAeWpEGpV/zKJWwMduV0QW2wD/nEutgBfdrogstgHeoEHd8D97ixKlV/+jjiuZRV6C3h8/XaU6TBa8UXuvU6AsJuB+t0BZRMAv4GGnQFlIwFfgZqdAqwj4fngG3ZUugVY5suwZcB24cIo85QPLORfgoX2c82Mr5WQUUIwCilFAMQoQERERERERERERERHOwh+HcRZfC9OtywAAAABJRU5ErkJggg==" />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-start space-y-1">
                                                <h4 className="text-[10pt] text-left font-normal">Register as a Truck owner</h4>
                                                <p className="text-[8pt] text-left text-[#000000B2] font-normal">Join thousands of verified truck partners. Get move request, accept and schedule moves.</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                                <path d="M0.261745 8.46756L3.73378 4.99553L0.261745 1.52349C-0.0872483 1.1745 -0.0872483 0.610738 0.261745 0.261745C0.610738 -0.0872483 1.1745 -0.0872483 1.52349 0.261745L5.63087 4.36913C5.97987 4.71812 5.97987 5.28188 5.63087 5.63087L1.52349 9.73825C1.1745 10.0872 0.610738 10.0872 0.261745 9.73825C-0.0782998 9.38926 -0.0872483 8.81656 0.261745 8.46756Z" fill="black" fillOpacity="0.7"/>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="#" className="w-full flex flex-shrink-0 items-center justify-between space-x-5 snap-center">
                                        <div className="w-full flex items-center space-x-5">
                                            <div className="bg-[#D7D7D755] min-w-[50px] min-h-[50px] flex items-center justify-center rounded-md overflow-hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="19" viewBox="0 0 8 19" fill="none">
                                                    <path d="M5.7 4.75H1.9C0.855 4.75 0 5.605 0 6.65V11.4C0 11.9225 0.4275 12.35 0.95 12.35H1.9V18.05C1.9 18.5725 2.3275 19 2.85 19H4.75C5.2725 19 5.7 18.5725 5.7 18.05V12.35H6.65C7.1725 12.35 7.6 11.9225 7.6 11.4V6.65C7.6 5.605 6.745 4.75 5.7 4.75Z" fill="black"/>
                                                    <path d="M3.79844 3.8C4.84778 3.8 5.69844 2.94934 5.69844 1.9C5.69844 0.850659 4.84778 0 3.79844 0C2.7491 0 1.89844 0.850659 1.89844 1.9C1.89844 2.94934 2.7491 3.8 3.79844 3.8Z" fill="black"/>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-start space-y-1">
                                                <h4 className="text-[10pt] text-left font-normal">Register as a Loader</h4>
                                                <p className="text-[8pt] text-left text-[#000000B2] font-normal">Join thousands of verified loaders. Get move request, accept and earn daily revenue. Upto NGN20,000/day</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                                <path d="M0.261745 8.46756L3.73378 4.99553L0.261745 1.52349C-0.0872483 1.1745 -0.0872483 0.610738 0.261745 0.261745C0.610738 -0.0872483 1.1745 -0.0872483 1.52349 0.261745L5.63087 4.36913C5.97987 4.71812 5.97987 5.28188 5.63087 5.63087L1.52349 9.73825C1.1745 10.0872 0.610738 10.0872 0.261745 9.73825C-0.0782998 9.38926 -0.0872483 8.81656 0.261745 8.46756Z" fill="black" fillOpacity="0.7"/>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="#" className="w-full flex flex-shrink-0 items-center justify-between space-x-5 snap-center">
                                        <div className="w-full flex items-center space-x-5">
                                            <div className="bg-[#D7D7D755] min-w-[50px] min-h-[50px] flex items-center justify-center rounded-md overflow-hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                    <path d="M1.29708 13C2.01048 13 2.59416 12.4163 2.59416 11.7029V7.16313C2.59416 6.44974 2.01048 5.86605 1.29708 5.86605C0.583687 5.86605 0 6.44974 0 7.16313V11.7029C0 12.4163 0.583687 13 1.29708 13ZM6.72537 9.38763L7.67872 9.71838C7.75006 9.74433 7.8214 9.7573 7.89274 9.7573H12.3223C13.0422 9.7573 13.6194 10.3345 13.6258 11.0544L8.83313 12.8508C8.57371 12.9481 8.28835 12.9611 8.02245 12.8833L3.89124 11.7159V5.86605H4.92891C5.08456 5.86605 5.24021 5.89199 5.38289 5.95036L9.87728 7.63008C10.1756 7.74033 10.3767 8.02569 10.3767 8.34996C10.3767 8.77151 10.0329 9.11524 9.61137 9.11524H7.90571C7.82789 9.11524 7.75006 9.10227 7.67224 9.06984L6.94587 8.79097C6.77725 8.72612 6.58917 8.81691 6.53081 8.98553C6.47244 9.14767 6.55675 9.32926 6.72537 9.38763ZM12.426 2.55849L9.18334 0.243203C8.72936 -0.0810676 8.12622 -0.0810676 7.67872 0.243203L4.43602 2.55849C4.09229 2.80494 3.89124 3.19406 3.89124 3.61562V4.56897H4.93539C5.09753 4.56897 5.26615 4.6014 5.41532 4.65977L10.4674 6.67673C11.1938 6.97506 11.6737 7.67548 11.6737 8.46021H12.9708V3.61562C12.9708 3.19406 12.7698 2.80494 12.426 2.55849ZM7.78249 5.21751C7.6009 5.21751 7.45822 5.07483 7.45822 4.89324C7.45822 4.71165 7.6009 4.56897 7.78249 4.56897C7.96408 4.56897 8.10676 4.71165 8.10676 4.89324C8.10676 5.07483 7.96408 5.21751 7.78249 5.21751ZM7.78249 3.92043C7.6009 3.92043 7.45822 3.77775 7.45822 3.59616C7.45822 3.41457 7.6009 3.27189 7.78249 3.27189C7.96408 3.27189 8.10676 3.41457 8.10676 3.59616C8.10676 3.77775 7.96408 3.92043 7.78249 3.92043ZM9.07957 5.21751C8.89798 5.21751 8.7553 5.07483 8.7553 4.89324C8.7553 4.71165 8.89798 4.56897 9.07957 4.56897C9.26116 4.56897 9.40384 4.71165 9.40384 4.89324C9.40384 5.07483 9.26116 5.21751 9.07957 5.21751ZM9.07957 3.92043C8.89798 3.92043 8.7553 3.77775 8.7553 3.59616C8.7553 3.41457 8.89798 3.27189 9.07957 3.27189C9.26116 3.27189 9.40384 3.41457 9.40384 3.59616C9.40384 3.77775 9.26116 3.92043 9.07957 3.92043Z" fill="black"/>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-start space-y-1">
                                                <h4 className="text-[10pt] text-left font-normal">Register as an Agent</h4>
                                                <p className="text-[8pt] text-left text-[#000000B2] font-normal">Join thousands of verified Agent. Booking for someone? Book a move for anyone with your unique ID and earn commissions Upto NGN25,000/move</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                                <path d="M0.261745 8.46756L3.73378 4.99553L0.261745 1.52349C-0.0872483 1.1745 -0.0872483 0.610738 0.261745 0.261745C0.610738 -0.0872483 1.1745 -0.0872483 1.52349 0.261745L5.63087 4.36913C5.97987 4.71812 5.97987 5.28188 5.63087 5.63087L1.52349 9.73825C1.1745 10.0872 0.610738 10.0872 0.261745 9.73825C-0.0782998 9.38926 -0.0872483 8.81656 0.261745 8.46756Z" fill="black" fillOpacity="0.7"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 py-3 flex flex-col items-center max-h-max space-y-4">
                            <a
                                href="#"
                                className="w-full text-center py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:animate-[gradient_0.3s_ease-in-out] active:animate-[active_0.2s_ease-in-out]"
                            >
                                {/* Find Truck */}
                                Download App
                            </a>

                            <span className="text-normal text-[11pt]">
                                Need help? 
                                <a href="#" className="text-[var(--primary)] font-medium"> Contact Support</a>
                            </span>
                        </div>
                    </div>
                </div>
      </div>
    )
}