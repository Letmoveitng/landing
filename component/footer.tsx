"use client";
import { useEffect, useRef } from "react";

export default function Footer() {

  const detailsRefs = useRef<HTMLDetailsElement[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    
    // Initialize open state
    detailsRefs.current.forEach((d) => {
      if (d) d.open = mq.matches;
    });

    // Handler for media query change
    const handler = (e: MediaQueryListEvent) => {
      detailsRefs.current.forEach((d) => {
        if (d) d.open = e.matches;
      });
    };

    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  // Function to add elements to refs
  const addToRefs = (el: HTMLDetailsElement | null) => {
    if (el && !detailsRefs.current.includes(el)) {
      detailsRefs.current.push(el);
    }
  };


  return (
    <footer className="bg-black text-white w-full flex flex-col space-x-1">
      <div className="w-full flex max-md:flex-col-reverse justify-between px-15 max-md:px-5 pt-15  max-md:pt-10" data-bg="dark">
        <div className="max-w-max max-md:max-w-full flex max-md:flex-col space-y-8 space-x-10 max-md:space-y-0">
          <details ref={addToRefs} className="max-md:w-full group md:open md:pointer-events-none max-md:pointer-events-auto space-y-8 max-md:space-y-0">
            <summary
              className="
                flex items-center justify-between cursor-pointer
                text-[12pt] font-medium
                max-md:py-4
                list-none
              "
            >
              Product
              <svg
                className="
                  w-4 h-4 transition-transform duration-300
                  group-open:rotate-180
                  md:hidden
                "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="flex flex-col text-[10pt] font-normal space-y-4 max-md:space-y-6 pointer-events-auto max-md:pb-4 max-md:px-2">
              <a href="#">Residential</a>
              <a href="#">Business</a>
              <a href="#">Item Delivery</a>
              <a href="#">Marketplace</a>
              <a href="#">API for Business</a>
              <a href="#">Okeru.ai</a>
              <a href="#">Corporate</a>
            </div>
          </details>
          <details ref={addToRefs} className="max-md:w-full group md:open md:pointer-events-none max-md:pointer-events-auto space-y-8 max-md:space-y-0">
            <summary
              className="
                flex items-center justify-between cursor-pointer
                text-[12pt] font-medium
                max-md:py-4
                list-none
              "
            >
              Earn
              <svg
                className="
                  w-4 h-4 transition-transform duration-300
                  group-open:rotate-180
                  md:hidden
                "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="flex flex-col text-[10pt] font-normal space-y-4 max-md:space-y-6 max-md:pb-4 max-md:px-2">
              <a href="#">Truck Owner</a>
              <a href="#">Loader</a>
              <a href="#">Agent</a>
            </div>
          </details>
          <details ref={addToRefs} className="max-md:w-full group md:open md:pointer-events-none max-md:pointer-events-auto space-y-8 max-md:space-y-0">
            <summary
              className="
                flex items-center justify-between cursor-pointer
                text-[12pt] font-medium
                max-md:py-4
                list-none
              "
            >
              Company
              <svg
                className="
                  w-4 h-4 transition-transform duration-300
                  group-open:rotate-180
                  md:hidden
                "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="flex flex-col text-[10pt] font-normal space-y-4 max-md:space-y-6 max-md:pb-4 max-md:px-2">
              <a href="#">Mission</a>
              <a href="#">Careers</a>
              <a href="#">News</a>
              <a href="#">Team</a>
            </div>
          </details>
          <details ref={addToRefs} className="max-md:w-full group md:open md:pointer-events-none max-md:pointer-events-auto space-y-8 max-md:space-y-0">
            <summary
              className="
                flex items-center justify-between cursor-pointer
                text-[12pt] font-medium
                max-md:py-4
                list-none
              "
            >
              Support
              <svg
                className="
                  w-4 h-4 transition-transform duration-300
                  group-open:rotate-180
                  md:hidden
                "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="flex flex-col text-[10pt] font-normal space-y-4 max-md:space-y-6 max-md:pb-4 max-md:px-2">
              <a href="#">Call</a>
              <a href="#">Email</a>
            </div>
          </details>
          <details ref={addToRefs} className="max-md:w-full group md:open md:pointer-events-none max-md:pointer-events-auto space-y-8 max-md:space-y-0">
            <summary
              className="
                flex items-center justify-between cursor-pointer
                text-[12pt] font-medium
                max-md:py-4
                list-none
              "
            >
              Garage
              <svg
                className="
                  w-4 h-4 transition-transform duration-300
                  group-open:rotate-180
                  md:hidden
                "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="flex flex-col text-[10pt] font-normal space-y-4 max-md:space-y-6 max-md:pb-4 max-md:px-2">
              <a href="#">Find us</a>
            </div>
          </details>
          <details ref={addToRefs} className="max-md:w-full group md:open md:pointer-events-none max-md:pointer-events-auto space-y-8 max-md:space-y-0">
            <summary
              className="
                flex items-center justify-between cursor-pointer
                text-[12pt] font-medium
                max-md:py-4
                list-none
              "
            >
              Term
              <svg
                className="
                  w-4 h-4 transition-transform duration-300
                  group-open:rotate-180
                  md:hidden
                "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="flex flex-col text-[10pt] font-normal space-y-4 max-md:pb-4 max-md:px-2">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Terms of Drivers</a>
              <a href="#">Terms of Loaders</a>
            </div>
          </details>
        </div>

        
        <div className="flex items-start justify-end max-md:mb-10 space-x-2">
          <div className="m-h-max flex items-center justify-end space-x-5">
            <a href="#" className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M10.2903 5.01146C7.37087 5.01146 5.01605 7.36628 5.01605 10.2857C5.01605 13.2051 7.37087 15.56 10.2903 15.56C13.2097 15.56 15.5646 13.2051 15.5646 10.2857C15.5646 7.36628 13.2097 5.01146 10.2903 5.01146ZM10.2903 13.7147C8.40369 13.7147 6.86135 12.1769 6.86135 10.2857C6.86135 8.39451 8.3991 6.85676 10.2903 6.85676C12.1815 6.85676 13.7193 8.39451 13.7193 10.2857C13.7193 12.1769 12.1769 13.7147 10.2903 13.7147ZM17.0105 4.79572C17.0105 5.47967 16.4597 6.02592 15.7803 6.02592C15.0963 6.02592 14.5501 5.47508 14.5501 4.79572C14.5501 4.11635 15.1009 3.56552 15.7803 3.56552C16.4597 3.56552 17.0105 4.11635 17.0105 4.79572ZM20.5037 6.04428C20.4257 4.39636 20.0493 2.93664 18.842 1.73399C17.6394 0.531327 16.1797 0.154923 14.5317 0.0722972C12.8333 -0.0240991 7.74269 -0.0240991 6.04428 0.0722972C4.40095 0.150332 2.94123 0.526737 1.73399 1.7294C0.526737 2.93205 0.154923 4.39177 0.0722972 6.03969C-0.0240991 7.7381 -0.0240991 12.8287 0.0722972 14.5272C0.150332 16.1751 0.526737 17.6348 1.73399 18.8374C2.94123 20.0401 4.39636 20.4165 6.04428 20.4991C7.74269 20.5955 12.8333 20.5955 14.5317 20.4991C16.1797 20.4211 17.6394 20.0447 18.842 18.8374C20.0447 17.6348 20.4211 16.1751 20.5037 14.5272C20.6001 12.8287 20.6001 7.74269 20.5037 6.04428ZM18.3096 16.3495C17.9515 17.2492 17.2584 17.9423 16.3541 18.305C15 18.842 11.7867 18.7181 10.2903 18.7181C8.79387 18.7181 5.57607 18.8374 4.22652 18.305C3.32682 17.9469 2.63368 17.2538 2.27105 16.3495C1.73399 14.9954 1.85792 11.7822 1.85792 10.2857C1.85792 8.78928 1.73858 5.57148 2.27105 4.22193C2.62909 3.32223 3.32223 2.62909 4.22652 2.26646C5.58066 1.7294 8.79387 1.85333 10.2903 1.85333C11.7867 1.85333 15.0045 1.73399 16.3541 2.26646C17.2538 2.6245 17.9469 3.31764 18.3096 4.22193C18.8466 5.57607 18.7227 8.78928 18.7227 10.2857C18.7227 11.7822 18.8466 15 18.3096 16.3495Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className="p-2 m-h-max border-1 border-[var(--primary)] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M4.60315 20.5641H0.339682V6.8345H4.60315V20.5641ZM2.46912 4.96165C1.1058 4.96165 0 3.83244 0 2.46912C9.75805e-09 1.81427 0.260139 1.18624 0.723189 0.723189C1.18624 0.260139 1.81427 0 2.46912 0C3.12397 0 3.752 0.260139 4.21505 0.723189C4.67811 1.18624 4.93824 1.81427 4.93824 2.46912C4.93824 3.83244 3.83198 4.96165 2.46912 4.96165ZM20.56 20.5641H16.3057V13.8806C16.3057 12.2878 16.2735 10.2451 14.089 10.2451C11.8724 10.2451 11.5327 11.9756 11.5327 13.7658V20.5641H7.27379V6.8345H11.3628V8.70734H11.4225C11.9917 7.62862 13.3821 6.49022 15.4565 6.49022C19.7713 6.49022 20.5645 9.33162 20.5645 13.0222V20.5641H20.56Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end md-max:justify-start px-15 max-md:px-5 max-md:mt-20">
        <div className="max-w-max flex space-x-15 max-md:flex-col max-md:space-y-10">
          <div className="max-w-max flex flex-col space-y-3">
            <h4 className="text-[12pt] font-medium">Address</h4>
            <div className="flex flex-col text-[10pt] font-normal space-y-4">
              <span>Suite 37, Hill Crest Shopping Mall, Lokogoma, FCT, Abuja</span>
              <span>NSE Building, NSE Close, Off Idowu taylor street, Victoria Island, Lagos</span>
            </div>
          </div>
          <div className="max-w-max flex flex-col space-y-7">
              <div className="max-w-max flex flex-col space-y-3">
                  <h4 className="text-[12pt] font-medium">Contact</h4>
                  <div className="flex flex-col text-[10pt] font-normal space-y-4">
                      <a href="#">+234 913 379 3916</a>
                      <span><a href="mailto:info@letmoveit.ng">info@letmoveit.ng</a> | <a href="mailto:letmoveitng@gmail.com">letmoveitng@gmail.com</a></span>
                  </div>
              </div>
              <div className="max-w-max flex flex-col space-y-3">
                  <h4 className="text-[12pt] font-medium">Career</h4>
                  <div className="flex flex-col text-[10pt] font-normal space-y-4">
                      <a href="mailto:talents@letmoveit.ng">talents@letmoveit.ng</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="p-3 mt-[200px] max-md:mt-30 bg-white text-center text-black font-normal text-[10pt]">Copyright (c) 2026 Letmoveit.ng. All right reserved</div>
    </footer>
  )
}