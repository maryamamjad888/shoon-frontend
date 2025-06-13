"use client";
import { HttpTypes } from "@medusajs/types";
import Image from "next/image";
import { useState, useEffect, useRef, SetStateAction } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomVerticalArrow from "../custom-arrow";
import CustomHorizontalArrow from "../horizantal-arrow";

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
  const thumbnailSliderRef = useRef<Slider | null>(null);

  const zoomFactor = 2.5;
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 500;

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const changeImage = (direction: "next" | "prev") => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    setSelectedImage(images[nextIndex]);
    thumbnailSliderRef.current?.slickGoTo(nextIndex);
  };

  const handleMainImageClick = () => {
    const index = images.findIndex((img) => img.id === selectedImage.id);
    setCurrentSlide(index !== -1 ? index : 0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleMouseEnter = () => {
    if (!isSmallScreen) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!isSmallScreen && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      });
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
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false,
        arrows: true,
        prevArrow: <CustomHorizontalArrow type="left" />,
        nextArrow: <CustomHorizontalArrow type="right" />,
        },
      },
    ],
  };

  const modalSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (current: SetStateAction<number>) => setCurrentSlide(current),
    arrows: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
        arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (!modalOpen) return;
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowRight") setCurrentSlide((prev) => (prev + 1) % images.length);
      else if (e.key === "ArrowLeft") setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, images.length]);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start gap-4 relative">
        {/* Thumbnail Slider on the LEFT */}
        <div className="w-full max-[500px]:hidden sm:w-1/6 max-h-80 px-1 sm:my-6 order-2 sm:order-none sm:order-first">
          <Slider ref={thumbnailSliderRef} {...thumbnailSliderSettings}>
            {images.map((image, index) => (
              <div
                key={image.id}
                className="p-1 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className={`relative aspect-square w-full overflow-hidden border ${
                    selectedImage.id === image.id ? "border-black" : "border-gray-200"
                  }`}
                >
                  {image.url && (
                    <Image
                      src={image.url}
                      alt={`Product thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100px, 150px"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Main Image */}
        <div className="w-full sm:w-3/5 order-1 sm:order-none relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 sm:hidden">
    <button
      onClick={() => changeImage("prev")}
      className="text-black text-4xl font-bold p-1 hover:scale-110 transition"
      aria-label="Previous image"
    >
      ❮
    </button>
  </div>

  {/* Right Arrow Button */}
  <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 sm:hidden">
    <button
      onClick={() => changeImage("next")}
      className="text-black text-4xl font-bold p-1 hover:scale-110 transition"
      aria-label="Next image"
    >
      ❯
    </button>
  </div>
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
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${selectedImage.url})`,
                        backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
                        backgroundSize: `${zoomFactor * 100}%`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal View */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="absolute top-4 right-4" style={{ zIndex: 9999 }}>
            <button
              onClick={closeModal}
              className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-all"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="w-full max-w-6xl px-4 max-sm:-ml-16">
            <Slider {...modalSliderSettings}>
              {images.map((image, index) => (
  <div key={image.id} className="outline-none">
    <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[2/1] w-full flex items-center justify-center">
      <Image
        src={image.url}
        alt={`Product image ${index + 1}`}
        width={1200}
        height={800}
        className="sm:w-auto sm:h-auto w-[325px] h-[325px] object-contain"
        style={{
          maxHeight: "85vh",
          margin: "0 auto",
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
