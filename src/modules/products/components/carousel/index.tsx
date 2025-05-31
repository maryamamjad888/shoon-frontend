
"use client"

import { useEffect, useState } from "react"

export default function SmoothSlider({ images }: { images: string[] }) {
  const [displayedImages, setDisplayedImages] = useState<string[]>(images.slice(0, 3));
  const [transitionIndex, setTransitionIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      if (transitionIndex !== null) return;

      if (direction === 'right') {
        setTransitionIndex(0);
        
        setTimeout(() => {
          setDisplayedImages(prev => {
            const newImages = [...prev.slice(1)];
            const nextImageIndex = (images.indexOf(prev[prev.length - 1]) + 1) % images.length;
            newImages.push(images[nextImageIndex]);
            return newImages;
          });
          setTransitionIndex(null);
          
          if (images.indexOf(displayedImages[displayedImages.length - 1]) === images.length - 1) {
            setDirection('left');
          }
        }, 1000);
      } else {
        setTransitionIndex(2);
        
        setTimeout(() => {
          setDisplayedImages(prev => {
            const newImages = [...prev.slice(0, prev.length - 1)];
            const currentFirstIndex = images.indexOf(prev[0]);
            const prevImageIndex = (currentFirstIndex - 1 + images.length) % images.length;
            newImages.unshift(images[prevImageIndex]);
            return newImages;
          });
          setTransitionIndex(null);
          
          if (images.indexOf(displayedImages[0]) === 0) {
            setDirection('right');
          }
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [displayedImages, images, transitionIndex, direction]);

  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden">
      <div className="flex gap-4">
        {displayedImages.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className={`w-[100px] h-[100px] flex-shrink-0 transition-all duration-1000 ease-in-out ${
              transitionIndex === i 
                ? direction === 'right' 
                  ? 'translate-x-[-112px] opacity-0' 
                  : 'translate-x-[112px] opacity-0'
                : ''
            }`}
          >
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}