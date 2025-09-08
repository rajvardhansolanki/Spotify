// src/components/customSlider/CustomSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768, // small screens -> 2 slides
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="w-full overflow-hidden">
      {/* small CSS tweaks to make each slick slide center its content and avoid overflow */}
      <style>{`
        /* make slick slide act like a flexbox and center its inner box */
        .slick-slide { display: flex !important; justify-content: center; align-items: center; box-sizing: border-box; }
        /* ensure the visible area doesn't let children bleed out */
        .slick-list { overflow: hidden; }
      `}</style>

      <Slider {...settings} className="w-full">
        {items.map((item) => (
          <div key={item} className="px-1 py-2">
            {/* Inner box: fixed target size with sensible fallbacks (max-w-full so it won't overflow parent) */}
            <div className="w-[200px] h-[200px] max-w-full flex-shrink-0 rounded-lg shadow-md bg-gray-800 text-white flex items-center justify-center">
              Box {item}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
