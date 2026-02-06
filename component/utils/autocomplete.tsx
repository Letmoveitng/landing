import { ReactNode, useState, useEffect, useRef } from "react";

interface Prediction {
  description: string;
}

interface AutocompleteResponse {
  predictions: Prediction[];
}

interface AutocompleteProps {
  value: string;
  svg: ReactNode;
  delay: string;
  setValue: (val: string) => void;
  placeholder: string;
}

export default function Autocomplete({ value, setValue, svg, delay, placeholder }: AutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Prediction[]>([]);
  const ignoreNextFetch = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (ignoreNextFetch.current) {
            ignoreNextFetch.current = false;
            return; // skip this fetch
        }

        if (value.length < 3) {
            setSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_AUTOCOMPLETE_URL}?input=${encodeURIComponent(value)}`);
            const data: AutocompleteResponse = await res.json();
            setSuggestions(data.predictions);
            } catch (err) {
            console.error(err);
            }
        };

        fetchSuggestions();
    }, [value]);


  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full autocomplete-container">
      <div className={`slide-animate-y opacity-0 translate-y-35 duration-600 delay-${delay} transition-all ease-out bg-white w-full h-12 flex items-center mt-2 border border-[var(--primary)] rounded-xl`}>
        {svg}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="max-height w-full h-full min-h-full px-2 placeholder-[#00000099] text-black outline-none"
        />
      </div>

      {suggestions.length > 0 && (
        <div className="absolute bg-white rounded-lg shadow-lg w-full max-h-32 overflow-auto z-50 scrollbar-thin mt-1">
          {suggestions.map((s, i) => (
            <div
                key={i}
                className="p-2 border-l-4 border-[var(--primary)] my-1 text-sm cursor-pointer"
                onClick={() => {
                    setValue(s.description);
                    setSuggestions([]);
                    ignoreNextFetch.current = true; // synchronous
                }}

            >
              {s.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
