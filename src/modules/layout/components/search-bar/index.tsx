"use client";

import { useState, useEffect } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const fullText = "What are you looking for?";
  const typingSpeed = 100; 
  const pauseAfterFull = 1500; 

  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (index <= fullText.length) {
        setPlaceholder(fullText.slice(0, index));
        index++;
        timeoutId = setTimeout(type, typingSpeed);
      } else {
       
        setTimeout(() => {
          index = 0;
          setPlaceholder("");
          type();
        }, pauseAfterFull);
      }
    };

    type(); 

    return () => clearTimeout(timeoutId); 
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="w-full flex justify-center">
  <div className="flex se items-center max-sm:py-0 sm:py-2 max-sm:px-2 border sm:border-0 max-sm:w-[300px] w-full sm:max-w-md">
  <input
    type="text"
    placeholder={placeholder}
    className="text-search text-gray-600 placeholder-gray-400 focus:outline-none min-w-0 w-full overflow-visible border-b border-gray-300 max-sm:border-0 py-2 max-sm:placeholder:text-lg"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
      <button onClick={handleSearch} className="ml-3 flex-shrink-0" aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
    </div>
  );
}