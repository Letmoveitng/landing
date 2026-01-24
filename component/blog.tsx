export default function Blog() {
    return (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col space-y-1">
            <h4 className="slide-animate-x opacity-0 -translate-x-35 duration-600 transition-all ease-out font-bold text-[23pt]">Latest Updates</h4>
            <p className="slide-animate-y opacity-0 translate-y-10 duration-900 transition-all ease-out w-[80%] max-md:w-full font-normal text-[#7C7C7C] text-[11pt]">Here you will find all the latest news and updates about us</p>
          </div>
          <div className="w-full mt-10 space-x-4 flex justify-center">
            <div className="w-full flex flex-col items-center">
              <div className="w-[70%] max-md:w-full flex max-md:flex-col items-center justify-center rounded-xl overflow-hidden">
                <div className="w-1/2 max-md:w-full h-[350px] bg-[#D9D9D9] bg-[url('/blog/1.png')] bg-no-repeat bg-center bg-cover"></div>
                <div className="w-1/2 max-md:w-full h-full max-md:h-auto bg-[#F1F1F1] p-10 max-md:px-5 flex flex-col space-y-3">
                    <span className="text-[9pt] font-medium text-[#7C7C7C]">15 Dec 2025</span>
                    <h4 className="text-[11pt] font-bold">Use <span className="text-[var(--primary)]">Joyszn</span> to get a 20% discount this season. Valid till January 10th, 2026.</h4>
                </div>
              </div>
              <div className="w-full flex justify-end max-md:justify-center mt-7 p-5 space-x-2">
                <button className="w-[15px] h-[15px] bg-[var(--primary)] rounded-full"></button>
                <button className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></button>
                <button className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></button>
              </div>
            </div>
          </div>
        </div>
    )
}