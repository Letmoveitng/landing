"use client"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";


const reviews = [
    {
        id: null, name: "John T.", social: "Instagram", 
        review: "Great service! The platform provided a range of options that fit my budget. The movers were efficient and professional.",
        profile: "/reviews/1.png", rating: 4
    },
    {
        id: null, name: "Sara Oluwatoyin", social: "Instagram", 
        review: "Moving made easy! The platform's intuitive interface helped me find reliable movers within minutes.",
        profile: "/reviews/2.png", rating: 4
    },
    {
        id: null, name: "Adaobi Eli.", social: "Instagram", 
        review: "I was skeptical at first, but this platform exceeded my expectations. The movers were courteous and handled my fragile items with care.",
        profile: "/reviews/3.png", rating: 4
    },
    {
        id: null, name: "Sharon G.", social: "Instagram", 
        review: "I have been an agent for letmoveit.ng and I have been earning passively by helping people plan and book their move easily.",
        profile: "/reviews/4.png", rating: 4
    },
]
function StarRating({ multiplier }: { multiplier: number }) {
    const totalStars = 5;

    return (
        <div className="flex">
            {Array.from({ length: totalStars }).map((_, i) => (
                <svg
                    key={i}
                    className="w-[12px] h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                >
                    <path 
                        d="M6.08487 9.29159L9.84531 11.5612L8.84739 7.28358L12.1697 4.40544L7.79471 4.03427L6.08487 0L4.37502 4.03427L0 4.40544L3.32234 7.28358L2.32442 11.5612L6.08487 9.29159Z"
                        fill={i < multiplier ? "#5AA36A" : "black"}
                    />
                </svg>
            ))}
        </div>
    );
}




export default function Reviews() {

    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentWidth = useRef(0);
    const [paused, setPaused] = useState(false);
    const speed = 40;

    useAnimationFrame((_, delta) => {
        if (paused || !contentWidth.current) return;

        const moveBy = (speed * delta) / 1000;
        const next = x.get() - moveBy;

        x.set(next <= -contentWidth.current ? 0 : next);
    });

    return (
        <div
            ref={containerRef} 
            className="w-[100%] p-3 flex items-center justify-center space-x-10 overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{
                maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
        >
            <motion.div
                ref={(el) => {
                    if (el) contentWidth.current = el.scrollWidth / 2;
                }}
                style={{ x }}
                className="flex items-center space-x-5"
            >
                {[...reviews,...reviews,,...reviews].map((r,idx)=>(
                    <div key={idx} className="w-[220px] min-w-[220px] h-[187px] p-4 pr-7 bg-white flex flex-col justify-between rounded-tl-[0px] rounded-[30px] space-y-2">
                        <div className="w-[40px] h-[40px] bg-[#CCC] bg-no-repeat bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${r.profile})` }}></div>
                        <p className="font-normal text-[7pt]">{r.review}</p>
                        <div className="flex items-center space-x-2">
                        <span className="text-[8pt] font-semibold">{r.name}</span>
                        {
                            (r.social=="Instagram")?
                                <svg className="w-[11px] h-auto" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M6.30895 3.07251C4.51905 3.07251 3.07532 4.51624 3.07532 6.30613C3.07532 8.09602 4.51905 9.53976 6.30895 9.53976C8.09884 9.53976 9.54257 8.09602 9.54257 6.30613C9.54257 4.51624 8.09884 3.07251 6.30895 3.07251ZM6.30895 8.40841C5.15227 8.40841 4.20667 7.46562 4.20667 6.30613C4.20667 5.14664 5.14946 4.20385 6.30895 4.20385C7.46844 4.20385 8.41123 5.14664 8.41123 6.30613C8.41123 7.46562 7.46562 8.40841 6.30895 8.40841ZM10.4291 2.94023C10.4291 3.35957 10.0914 3.69447 9.67484 3.69447C9.25551 3.69447 8.92061 3.35675 8.92061 2.94023C8.92061 2.52372 9.25833 2.186 9.67484 2.186C10.0914 2.186 10.4291 2.52372 10.4291 2.94023ZM12.5708 3.70572C12.5229 2.69539 12.2921 1.80045 11.552 1.0631C10.8146 0.325755 9.91969 0.0949825 8.90936 0.0443252C7.86807 -0.014775 4.74701 -0.014775 3.70572 0.0443252C2.69821 0.0921682 1.80326 0.32294 1.0631 1.06029C0.32294 1.79763 0.0949825 2.69258 0.0443252 3.70291C-0.014775 4.7442 -0.014775 7.86525 0.0443252 8.90654C0.0921682 9.91687 0.32294 10.8118 1.0631 11.5492C1.80326 12.2865 2.69539 12.5173 3.70572 12.5679C4.74701 12.627 7.86807 12.627 8.90936 12.5679C9.91969 12.5201 10.8146 12.2893 11.552 11.5492C12.2893 10.8118 12.5201 9.91687 12.5708 8.90654C12.6299 7.86525 12.6299 4.74701 12.5708 3.70572ZM11.2255 10.0238C11.006 10.5754 10.581 11.0004 10.0266 11.2227C9.19641 11.552 7.22641 11.476 6.30895 11.476C5.39149 11.476 3.41867 11.5492 2.59126 11.2227C2.03966 11.0032 1.6147 10.5782 1.39237 10.0238C1.0631 9.1936 1.13909 7.22359 1.13909 6.30613C1.13909 5.38867 1.06591 3.41585 1.39237 2.58845C1.61189 2.03685 2.03685 1.61189 2.59126 1.38956C3.42148 1.06029 5.39149 1.13627 6.30895 1.13627C7.22641 1.13627 9.19923 1.0631 10.0266 1.38956C10.5782 1.60907 11.0032 2.03403 11.2255 2.58845C11.5548 3.41867 11.4788 5.38867 11.4788 6.30613C11.4788 7.22359 11.5548 9.19641 11.2255 10.0238Z" fill="black"/>
                                </svg>
                            :""
                        }
                        </div>
                        <div className="w-full flex justify-end">
                        <div className="flex items-center">
                            <StarRating multiplier={r.rating} />
                        </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}