import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const playlists = [
  {
    id: 1,
    title: "New Music Friday India",
    artist: "Various Artists",
    image: "https://i.ytimg.com/vi/y1YCNTNUw4E/mqdefault.jpg?v=66668f7c",
  },
  {
    id: 2,
    title: "Top Bollywood Hits",
    artist: "Bollywood Stars",
    image: "https://i.ytimg.com/vi/y1YCNTNUw4E/mqdefault.jpg?v=66668f7c",
  },
  {
    id: 3,
    title: "Chill Vibes",
    artist: "Lo-Fi Beats",
    image: "https://i.ytimg.com/vi/y1YCNTNUw4E/mqdefault.jpg?v=66668f7c",
  },
  {
    id: 4,
    title: "Workout Energy",
    artist: "Pump Up",
    image: "https://i.ytimg.com/vi/y1YCNTNUw4E/mqdefault.jpg?v=66668f7c",
  },
  {
    id: 5,
    title: "Romantic Classics",
    artist: "Love Songs",
    image: "https://i.ytimg.com/vi/y1YCNTNUw4E/mqdefault.jpg?v=66668f7c",
  },
];

const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className="px-2">
            <div className="relative group cursor-pointer">
              {/* Album Image */}
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full aspect-square rounded-xl object-cover shadow-lg"
              />

              {/* Title & Artist */}
              <div className="mt-2">
                <h3 className="text-white font-semibold truncate">{playlist.title}</h3>
                <p className="text-gray-400 text-sm truncate">{playlist.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
