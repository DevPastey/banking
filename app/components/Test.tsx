'use client'
import { useState } from "react";

const Test = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen)
        console.log(isOpen);
    };
        
    

  return (
    <div className="ml-6 hidden">
      <span>
            <div>
              <button className="px-4 py-2 bg-amber-400 rounded text-white animate-bounce cursor-pointer" onClick={handleClick}
              >
                    Click me
                </button>
            </div>
            <div>
              <div className={`w-90 h-68 bg-gray-200 transition-all duration-700 -translate-x-[110%] ${isOpen ? 'translate-x-0 transition-all duration-700' : ''}`}>My modal box that animates and slides into view from left</div>
            </div>
          </span>
    </div>
  )
}

export default Test
