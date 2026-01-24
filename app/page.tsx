"use client";
import Image from "next/image";
import Header from "@component/header"
import EstimatorTool from "@component/estimatorTool"
import Services from "@component/services"
import Reviews from "@component/reviews"
import Blog from "@component/blog"
import Footer from "@component/footer"
import useMultiScrollAnimate from "@component/animate/scrollAnimate"


export default function Home() {

  useMultiScrollAnimate([
    { targetClass: "slide-animate-y", animationClasses: "opacity-100 translate-y-0" },
    { targetClass: "slide-animate-x", animationClasses: "opacity-100 translate-x-0" },
  ]);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white flex flex-col justify-start">
      <Header />

      <div className="w-full min-h-screen pt-20 max-md:pt-29 pb-2 max-md:px-5 flex max-md:flex-col items-center space-x-4 max-md:space-x-0" data-bg="light">
        <div className="w-1/2 max-md:w-full pl-15 max-md:pl-0 flex flex-col justify-center space-y-2 max-md:space-y-4">
          <h5 className="slide-animate-x opacity-0 -translate-x-35 duration-600 delay-200 font-medium text-[1.5vw] max-md:text-[5.5vw]">Are you moving?</h5>
          <h2 className="slide-animate-x opacity-0 -translate-x-35 duration-600 delay-400 w-72 max-md:w-auto leading-none font-bold text-[2.7vw] max-md:text-[9vw]">Find the closest <br /> truck to you</h2>
          <EstimatorTool />
        </div>
        <div className="max-md:hidden w-1/2 h-full">
          <div className="bg-hero-truc w-full h-full bg-no-repeat bg-cover bg-right flex items-center justify-end overflow-hidden">
            <embed className="slide-animate-x opacity-0 translate-x-35 duration-600 w-[95%] h-auto" src="/hero-truck.svg"></embed>
          </div>
        </div>
      </div>

      <Services />

      <div className="w-full min-h-[650px] bg-[url('/truck-sizes.png')] bg-no-repeat bg-center bg-cover my-4 py-20 px-2 max-md:px-7 flex flex-col items-center space-y-2"  data-bg="light">
        <h5 className="slide-animate-y opacity-0 translate-y-20 duration-200 transition-all ease-out font-bold text-[23pt]">For every sizes</h5>
        <span className="slide-animate-y opacity-0 translate-y-30 duration-400 transition-all ease-out font-normal text-[12pt] text-center">We are built for every load, different sizes. Pay for that exact space.</span>
      </div>

      <div className="w-full p-15 max-md:px-5 flex flex-col items-center"  data-bg="light">
        <div className="w-full flex flex-col items-center">
          <div className="slide-animate-y opacity-0 -translate-y-30 duration-400 transition-all ease-out w-full flex flex-col space-y-1">
            <h4 className="font-bold text-[23pt]">Earn more with us</h4>
            <p className="w-[80%] max-md:w-full font-normal text-[#7C7C7C] text-[11pt]">Join thousands of partners across different regions in the country making moving easy for customers and earning handsomely while at it.</p>
          </div>
          <div className="w-[70%] max-md:w-full mt-10 space-x-4 max-md:space-x-0 space-y-10 flex flex-col items-center">
            <div className="w-full flex max-md:flex-col items-center justify-between max-md:justify-center space-x-4 max-md:space-y-10">
              <div className="w-full flex items-center justify-start max-md:justify-center">
                <div className="min-w-[280px] h-[350px] bg-[#FAFAFA] bg-[url('/earn-1.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
              </div>
              <div className="w-full flex items-center justify-end max-md:justify-start">
                <div className="max-md:w-full slide-animate-x opacity-0 translate-x-35 duration-900 transition-all ease-out flex flex-col items-start space-y-1">
                  <h6 className="font-semibold text-[13pt]">Earn money as a truck partner</h6>
                  <p className="w-full font-normal text-[9pt]">Join thousands of verified truck partners. Get move request, accept and schedule moves.</p>
                  <a href="#" className="max-w-max max-md:min-w-full mt-4 px-4 py-2 max-md:py-3 font-normal text-[9pt] max-md:text-[10pt] max-md:text-center bg-[var(--primary)] font-medium text-[11px] text-white cursor-pointer rounded-md hover:animate-[gradient_0.3s_ease-in-out] active:animate-[active_0.2s_ease-in-out]">Register your truck</a>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row-reverse max-md:flex-col items-center justify-between max-md:justify-center space-x-4 max-md:space-y-10">
              <div className="w-1/2 max-md:w-full flex items-center justify-end max-md:justify-center">
                <div className="min-w-[280px] h-[350px] bg-[#FAFAFA] bg-[url('/service-loader.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
              </div>
              <div className="w-1/2 max-md:w-full flex items-center justify-end max-md:justify-center">
                <div className="slide-animate-x opacity-0 -translate-x-35 duration-900 transition-all ease-out flex flex-col items-start space-y-1">
                  <h6 className="font-semibold text-[13pt]">Earn money as a truck loader</h6>
                  <p className="w-full font-normal text-[9pt]">Join thousands of verified loaders. Get move request, accept and earn daily revenue. Upto NGN20,000/day.</p>
                  <a href="#" className="max-w-max max-md:min-w-full mt-4 px-4 py-2 max-md:py-3 font-normal text-[9pt] max-md:text-[10pt] max-md:text-center bg-[var(--primary)] font-medium text-[11px] text-white cursor-pointer rounded-md hover:animate-[gradient_0.3s_ease-in-out] active:animate-[active_0.2s_ease-in-out]">Join now</a>
                </div>
              </div>
            </div>
            <div className="w-full flex max-md:flex-col items-center justify-between max-md:justify-center space-x-4 max-md:space-y-10">
              <div className="w-full flex items-center justify-start max-md:justify-center">
                <div className="min-w-[280px] h-[350px] bg-[#FAFAFA] bg-[url('/earn-3.png')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
              </div>
              <div className="w-full flex items-center justify-end max-md:justify-center">
                <div className="slide-animate-x opacity-0 translate-x-35 duration-900 transition-all ease-out flex flex-col items-start space-y-1">
                  <h6 className="font-semibold text-[13pt]">Earn money as a Move Agent</h6>
                  <p className="w-full font-normal text-[9pt]">Join thousands of verified Agent. Booking for someone? Book a move for anyone with your unique ID and earn commissions Upto NGN25,000/move.</p>
                  <a href="#" className="max-w-max max-md:min-w-full mt-4 px-4 py-2 max-md:py-3 font-normal text-[9pt] max-md:text-[10pt] max-md:text-center bg-[var(--primary)] font-medium text-[11px] text-white cursor-pointer rounded-md hover:animate-[gradient_0.3s_ease-in-out] active:animate-[active_0.2s_ease-in-out]">Download App</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full max-w-max flex-shrink-0 my-2 px-15 max-md:px-5 py-15 flex max-md:flex-col items-center justify-center bg-black text-white bg-center bg-no-repeat bg-cover" data-bg="dark">
        <div className="w-full p-7 max-md:px-0 flex flex-col items-center justify-center space-y-1 max-md:space-y-5">
          <span className="text-[9pt] max-md:text-[9pt]">Latest Feature</span>
          <h4 className="text-[24pt] font-extrabold leading-none flex flex-col items-center justify-center">
            <span className="max-md:text-center">Leverage</span> 
            <span className="mt-1 max-md:text-center">our API Solutions</span>
          </h4>
          <p className="text-[10pt] text-center font-normal">Are you a moving company? You can leverage our technology for optimum operation efficiency. Integrate our move cost estimator on your platform, generate invoice, track move status successfully.</p>
          <a href="#" className="max-w-max mt-4 max-md:mt-2 px-6 py-2 font-normal text-[9pt] max-md:text-center bg-white font-medium text-[11px] text-black cursor-pointer rounded-md active:animate-[active_0.2s_ease-in-out]">Get started</a>
        </div>
        <div className="relative flex items-center justify-center scale-[2] w-full h-full max-md:opacity-[.1]">
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[none]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow2_2s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow3_2s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow4_2s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow5_2s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow6_6s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow7_6s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow8_6s_infinite]"></div>
          <div className="absolute w-5 h-5 rounded-sm bg-white shadow animate-[flow9_6s_infinite]"></div>
        </div>
      </div>

      <div className="bg-[var(--primary)] w-full my-4 p-6 flex flex-col items-center space-y-2" data-bg="light">
        <h4 className="font-normal text-[15pt]">What our customers are saying</h4>
        <p className="font-normal text-[11pt] text-white">Based on 2,500 customer reviews</p>
        <div className="w-[80%] max-md:w-full flex justify-center">
          <Reviews />
        </div>
      </div>

      <div className="w-full px-15 max-md:px-5 pt-15 pb-5 flex flex-col items-center" data-bg="light">
        <Blog />
      </div>

      <div className="w-full min-h-[350px] bg-black mt-4 p-15 max-md:px-5 max-md:py-10 bg-comic bg-[length:25%_auto,_cover] max-md:bg-[length:70%_auto,_cover] space-y-3" data-bg="dark">
        <h4 className="w-[38%] max-md:w-full font-extrabold text-white text-[15pt] max-md:text-[13pt]">Powering moving services for more than 20 million Nigerians annually</h4>
        <p className="w-[50%] max-md:w-full font-normal text-white text-[11pt] max-md:text-[9pt]">For Families, Individuals, Business, relocating to the urban for opportunities, exploring opportunities without barriers.</p>
      </div>

      <Footer />
    </div>
  );
}
