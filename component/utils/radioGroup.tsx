import { useState } from "react";

type RadioOption = {
  id: string;
  label: string;
  svg: string;
};

type RadioGroupProps = {
  options: RadioOption[];
  onChange?: (value: string) => void;
};

export default function RadioGroup({ options, onChange }: RadioGroupProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="slide-animate-x opacity-0 translate-x-35 duration-500 transition-all ease-out w-full mt-2 flex flex-wrap items-center">
        <div className="w-full px-2 py-2 flex items-center justify-around border-1 border-[var(--primary)] rounded-full space-x-2 select-none">
            {options.map((opt) => {
                const isActive = selected === opt.label;
                return (
                    <span 
                        key={opt.id}
                        onClick={() => handleSelect(opt.label)}
                        className={`
                            flex items-center cursor-pointer text-[.9vw] max-md:text-[2.5vw] my-1 px-[3vw] md:px-3 py-1 border border-1 border-[#CBCBCB] rounded-2xl
                            ${isActive 
                            ? "bg-[var(--primary)] text-white scale-[1.02]" 
                            : "bg-white text-black hover:bg-[#D7D7D755]"}
                        `}>
                        {opt.svg}
                        <span className="ml-1">{opt.label}</span>
                    </span>
                )
            })}
        </div>
    </div>
  );
}
