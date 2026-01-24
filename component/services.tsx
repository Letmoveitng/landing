"use client";

import { useRef, useEffect, useState } from "react";

export default function Services() {
     
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateButtons = () => {
        const track = trackRef.current;
        if (!track) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        const scrollLeft = track.scrollLeft;

        setCanScrollLeft(scrollLeft > 1);
        setCanScrollRight(scrollLeft < maxScroll - 1);
    };

    const scrollByCard = (dir: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;

        const card = track.querySelector<HTMLElement>(".service-card");
        if (!card) return;

        const gap = 24; // space-x-6 = 1.5rem = 24px
        const cardWidth = card.offsetWidth + gap;

        track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        updateButtons();

        track.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);

        let isDragging = false;
        let startX = 0;
        let scrollStart = 0;

        const onPointerDown = (e: PointerEvent) => {
            isDragging = true;
            startX = e.clientX;
            scrollStart = track.scrollLeft;
            track.style.cursor = "grabbing";
            track.setPointerCapture(e.pointerId);
        };

        const onPointerMove = (e: PointerEvent) => {
            if (!isDragging) return;
            const walk = e.clientX - startX;
            track.scrollLeft = scrollStart - walk;
            updateButtons();
        };

        const onPointerUpOrLeave = (e: PointerEvent) => {
            isDragging = false;
            track.style.cursor = "grab";
            track.releasePointerCapture(e.pointerId);
        };

        track.addEventListener("pointerdown", onPointerDown);
        track.addEventListener("pointermove", onPointerMove);
        track.addEventListener("pointerup", onPointerUpOrLeave);
        track.addEventListener("pointerleave", onPointerUpOrLeave);

        return () => {
            track.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);

            track.removeEventListener("pointerdown", onPointerDown);
            track.removeEventListener("pointermove", onPointerMove);
            track.removeEventListener("pointerup", onPointerUpOrLeave);
            track.removeEventListener("pointerleave", onPointerUpOrLeave);
        };
    }, []);



    return (
      <div className="w-full mt-auto py-4 flex flex-col items-center" data-bg="light">
        <h3 className="font-bold text-[2.7vw] max-md:text-[23pt] text-center">Our Services</h3>
        <p className="text-center mt-2 max-md:px-4 text-[1.2vw] max-md:text-[11pt]">These features are all available in different regions</p>

        <div className="w-full mt-12 flex flex-col items-center">
          <div ref={trackRef} className="slide-animate-x opacity-0 translate-x-50 duration-600 transition-all ease-out services-track w-full min-w-full flex items-center justify-start space-x-6 max-md:space-x-6 px-15 max-md:px-7 overflow-x-auto select-none snap-x snap-mandatory scroll-smooth scroll-px-15 max-md:scroll-px-5 cursor-grab active:cursor-grabbing">
            <div className="service-card w-[300px] min-w-[300px] bg-[#FAFAFA] bg-service-residential h-[480px] bg-no-repeat bg-cover bg-center rounded-md snap-start max-md:snap-center">
              <div className="mx-5 my-10 text-white flex flex-col">
                <h3 className="font-medium text-[20pt]">Residential</h3>
                <span className="font-normal text-[9pt]">Plan your next move, add the details of your apartment, select and add all your move needs.</span>
                <a href="#" className="max-w-max mt-2 px-6 py-2 font-normal text-[9pt] bg-[var(--primary)] font-medium text-[11px] text-white cursor-pointer rounded-md hover:animate-[active_0.2s_ease-in-out]">Get Started</a>
              </div>
            </div>
            <div className="service-card w-[300px] min-w-[300px] bg-[#FAFAFA] bg-service-business h-[480px] bg-no-repeat bg-cover bg-center rounded-md snap-start max-md:snap-center">
              <div className="mx-5 my-10 text-white flex flex-col">
                <h3 className="font-medium text-[20pt]">Business</h3>
                <span className="font-normal text-[9pt]">Move to a new office space easily, move materials long distance seamlessly, select space and get moving.</span>
                <a href="#" className="max-w-max mt-2 px-6 py-2 font-normal text-[9pt] bg-[var(--primary)] font-medium text-[11px] text-white cursor-pointer rounded-md hover:animate-[active_0.2s_ease-in-out]">Select space size</a>
              </div>
            </div>
            <div className="service-card w-[300px] min-w-[300px] bg-[#FAFAFA] bg-service-item-delivery h-[480px] bg-no-repeat bg-cover bg-center rounded-md snap-start max-md:snap-center">
              <div className="mx-5 my-10 text-white flex flex-col">
                <h3 className="font-medium text-[20pt]">Item Delivery</h3>
                <span className="font-normal text-[9pt]">Select a truck or van for delivery or by listing items.</span>
                <a href="#" className="max-w-max mt-7 px-6 py-2 font-normal text-[9pt] bg-[#E2E3D5] text-black font-medium text-[11px] cursor-pointer rounded-md hover:animate-[active_0.2s_ease-in-out]">Deliver now</a>
              </div>
            </div>
            <div className="service-card w-[300px] min-w-[300px] bg-[#FAFAFA] bg-service-loader h-[480px] bg-no-repeat bg-cover bg-center rounded-md snap-start max-md:snap-center">
              <div className="mx-5 my-10 text-white flex flex-col">
                <h3 className="font-medium text-[20pt]">Loaders Network</h3>
                <span className="font-normal text-[9pt]">Join the network. Pack, Load. Move.</span>
                <a href="#" className="max-w-max mt-11 px-6 py-2 font-normal text-[9pt] bg-black text-white font-medium text-[11px] cursor-pointer rounded-md hover:animate-[active_0.2s_ease-in-out]">Join now</a>
              </div>
            </div>
            <div className="service-card w-[300px] min-w-[300px] bg-[#FAFAFA] bg-service-business-solution h-[480px] bg-no-repeat bg-cover bg-center rounded-md snap-start max-md:snap-center">
              <div className="mx-5 my-10 text-white flex flex-col">
                <h3 className="font-medium text-[20pt]">Business Solution</h3>
                <span className="font-normal text-[9pt]">Integrate our API service to leverage our technology on your platform. Increase your operational efficiency</span>
                <a href="#" className="max-w-max mt-2 px-6 py-2 font-normal text-[9pt] bg-[var(--primary)] text-white font-medium text-[11px] cursor-pointer rounded-md hover:animate-[active_0.2s_ease-in-out]">Get started</a>
              </div>
            </div>
          </div>
          <div className="w-full px-15 py-5 flex items-center justify-end space-x-2">
            <button
                onClick={() => scrollByCard(-1)}
                disabled={!canScrollLeft}
                className={`transition ${!canScrollLeft ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
              <rect x="0.294406" y="0.294406" width="28.263" height="27.0854" rx="13.5427" stroke="black" strokeWidth="0.588812"/>
              <path d="M18.1501 18.1225L13.8569 13.8293L18.1501 9.53615C18.5816 9.10462 18.5816 8.40753 18.1501 7.97599C17.7186 7.54446 17.0215 7.54446 16.59 7.97599L11.5111 13.0548C11.0796 13.4863 11.0796 14.1834 11.5111 14.615L16.59 19.6938C17.0215 20.1253 17.7186 20.1253 18.1501 19.6938C18.5706 19.2622 18.5816 18.5541 18.1501 18.1225Z" fill="black"/>
              </svg>
            </button>
            <button
                onClick={() => scrollByCard(1)}
                disabled={!canScrollRight}
                className={`transition ${!canScrollRight ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
              <rect x="-0.294406" y="0.294406" width="28.263" height="27.0854" rx="13.5427" transform="matrix(-1 0 0 1 28.2706 0)" stroke="black" strokeWidth="0.588812"/>
              <path d="M11.0218 18.3764L15.315 14.0832L11.0218 9.79006C10.5902 9.35852 10.5902 8.66143 11.0218 8.2299C11.4533 7.79837 12.1504 7.79837 12.5819 8.2299L17.6607 13.3087C18.0923 13.7402 18.0923 14.4373 17.6607 14.8689L12.5819 19.9477C12.1504 20.3792 11.4533 20.3792 11.0218 19.9477C10.6013 19.5161 10.5902 18.808 11.0218 18.3764Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
}