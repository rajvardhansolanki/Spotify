import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentTrackId } from "../../features/getTracks/getTracks";


const useResponsiveSlides = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setSlidesToShow(5);
      else if (w >= 768) setSlidesToShow(4);
      else if (w >= 640) setSlidesToShow(2);
      else setSlidesToShow(2);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesToShow;
};

const CustomSlider = ({ data, heading }) => {
  const dispatch = useDispatch();
  const slidesToShow = useResponsiveSlides();
  const containerRef = useRef(null); // viewport
  const trackRef = useRef(null); // sliding track
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState("");


  const totalSlides = Array.isArray(data) ? data.length : 0;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);
  const slideWidth = containerWidth && slidesToShow ? containerWidth / slidesToShow : 0;

  const handleClick = (currentTrackId) => {
    dispatch(setCurrentTrackId(currentTrackId));
    // ensure autoplay for first click
    const audio = document.querySelector("audio");
    if (audio) {
      audio.play().catch(() => { });
    }
  };

  // update container width on mount & resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // clamp currentIndex when slidesToShow/totalSlides change
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    if (currentIndex < 0) setCurrentIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex, slidesToShow, totalSlides]);

  // Apply transform based on currentIndex
  const setTrackPosition = useCallback(
    (translateX, animate = true) => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = animate
        ? "transform 500ms cubic-bezier(.22,.9,.34,1)"
        : "none";
      trackRef.current.style.transform = `translateX(${translateX}px)`;
    },
    []
  );

  // Snap to position when currentIndex or slideWidth changes
  useEffect(() => {
    const translate = -(currentIndex * slideWidth);
    setTrackPosition(translate, true);
  }, [currentIndex, slideWidth, setTrackPosition]);

  // Next / Prev handlers
  const next = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  const prev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));

  return (
    <div className="w-full">
      {/* Header with controls */}
      <div className="flex justify-between mt-1 mb-4 md:mt-1 md:mb-4">
        <div className="px-2 md:px-3">
          <h2 className="text-xl md:text-2xl font-bold text-white hover:underline cursor-pointer">
            {heading}
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={currentIndex <= 0}
            aria-label="Previous"
            className={`p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-700 transition ${currentIndex <= 0
              ? "opacity-40 cursor-not-allowed hover:bg-gray-900"
              : ""
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
            className={`p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-700 transition ${currentIndex >= maxIndex
              ? "opacity-40 cursor-not-allowed hover:bg-gray-900"
              : ""
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* viewport */}
      <div ref={containerRef} className="relative overflow-hidden touch-pan-y">
        <div
          ref={trackRef}
          className="flex"
          style={{
            width: slideWidth && totalSlides ? `${slideWidth * totalSlides}px` : "100%",
            transform: `translateX(${-(currentIndex * slideWidth)}px)`,
            transition: "transform 500ms cubic-bezier(.22,.9,.34,1)",
            willChange: "transform",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => {
              return (
                <div key={item.id}>
                  <div
                    style={{ width: slideWidth || "100%" }}
                    className="px-1 flex-none"
                    onClick={() => handleClick(item.id)}
                  >
                    <div className="relative group cursor-pointer">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        draggable={false}
                        className="w-full aspect-square rounded-xl object-cover shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                      />
                      <div className="mt-2">
                        <h3 className="text-white font-semibold truncate">{item.name}</h3>
                        <p className="text-gray-400 text-sm truncate">{item.artist}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }))
            : (
              <div className="p-4">
                <p className="text-gray-400">No tracks available</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
