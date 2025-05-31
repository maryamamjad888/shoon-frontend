"use client"
import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";
import { useState, useEffect, useRef, SetStateAction } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomVerticalArrow from "../custom-arrow";



type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const zoomFactor = 2.5;

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
        return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const handleImageClick = (image: SetStateAction<HttpTypes.StoreProductImage>, index: number) => {
    setSelectedImage(image);
   
  };

  const handleMainImageClick = () => {
    const index = images.findIndex(img => img.id === selectedImage.id);
    setCurrentSlide(index !== -1 ? index : 0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      
      const x = ((e.clientX - rect.left) / rect.width);
      const y = ((e.clientY - rect.top) / rect.height);
      
      const boundedX = Math.max(0, Math.min(1, x));
      const boundedY = Math.max(0, Math.min(1, y));
      
      setMousePosition({ x: boundedX, y: boundedY });
    }
  };

  const thumbnailSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    prevArrow: <CustomVerticalArrow type="up" />,
    nextArrow: <CustomVerticalArrow type="down" />,
    afterChange: (index: number) => {
      setSelectedImage(images[index]);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  };
  

  const modalSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (current: SetStateAction<number>) => setCurrentSlide(current),
    arrows: true
  };

  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (!modalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, images.length]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start relative gap-4">
        <div className="md:w-1/6 max-h-80 px-1 my-6">
          <Slider {...thumbnailSliderSettings}>
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className="p-1 cursor-pointer"
                onClick={() => handleImageClick(image, index)}
              >
                <div className={`relative aspect-square w-full overflow-hidden bg-ui-bg-subtle border ${selectedImage.id === image.id ? 'border-black' : 'border-gray-200'}`}>
                  {image.url && (
                    <Image
                      src={image.url}
                      alt={`Product thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100px, 150px"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
 
        <div className="w-full md:w-3/5">
          <div
            ref={imageRef}
            className="relative aspect-[20/20] w-full overflow-hidden cursor-pointer"
            id={selectedImage?.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleMainImageClick}
          >
            {selectedImage?.url && (
              <>
                <Image
                  src={selectedImage.url}
                  priority={true}
                  className="absolute inset-0"
                  alt="Selected product image"
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "cover",
                    opacity: isHovering ? 0.4 : 1,
                    transition: "opacity 0.2s",
                  }}
                />
                
                {isHovering && (
                  <>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${selectedImage.url})`,
                          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
                          backgroundSize: `${zoomFactor * 100}%`,
                          backgroundRepeat: 'no-repeat',
                          opacity: 1,
                        }}
                      />
                    </div>
                    
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={closeModal}
              className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="w-full max-w-6xl px-4">
            <Slider {...modalSliderSettings}>
              {images.map((image, index) => (
                <div key={image.id} className="outline-none">
                  <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[2/1] w-full flex items-center justify-center">
                    <Image
                      src={image.url}
                      alt={`Product image ${index + 1}`}
                      width={1200}
                      height={800}
                      style={{
                        objectFit: "contain",
                        maxHeight: "85vh",
                        width: "auto",
                        margin: "0 auto"
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            
            <div className="text-white text-center mt-4">
              {currentSlide + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;