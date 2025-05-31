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
    <div className="search flex items-center mx-auto py-2 w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 text-search text-gray-600 placeholder-gray-400 focus:outline-none min-w-0 w-full overflow-visible border-b border-gray-300 py-2"
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
  );
}
