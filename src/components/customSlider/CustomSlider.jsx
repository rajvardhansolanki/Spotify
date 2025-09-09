import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import tracksData from "../../JsonData/data.json";

const tracksData = [
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltzy8n3GLxSAlIbpP1k-X7UnhpdRC5C9DwQ&s",
  },
  {
    id: 3,
    title: "Chill Vibes",
    artist: "Lo-Fi Beats",
    image: "https://cdn.myportfolio.com/cd3626cb-0cb2-497c-b826-2ed698882695/50c62b8d-37b4-4c8d-b16b-28ccaa5aa3e1_rw_1920.jpg?h=54155f042d7ad5d0c64c32329e2609bf",
  },
  {
    id: 4,
    title: "Workout Energy",
    artist: "Pump Up",
    image: "https://i.ytimg.com/vi/y5MPVd_urSs/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Romantic Classics",
    artist: "Love Songs",
    image: "https://i.scdn.co/image/ab67616d0000b27352e3a807b72281cb40c08092",
  },
  {
    id: 6,
    title: "Chill Vibes",
    artist: "Lo-Fi Beats",
    image: "https://images.nightcafe.studio/ik-seo/jobs/qmIOMF2Rn1vAltYq3PaR/qmIOMF2Rn1vAltYq3PaR--w97wj/create-a-bollywood-style-romantic-music-thumbnail-for-the-song-waqt-lage-with-the-following-details-.jpg?tr=w-1600,c-at_max",
  },
  {
    id: 7,
    title: "Workout Energy",
    artist: "Pump Up",
    image: "https://wallpapercave.com/wp/wp8073284.jpg",
  },
  {
    id: 8,
    title: "Romantic Classics",
    artist: "Love Songs",
    image: "https://im.idiva.com/content/2020/Oct/Catchy-Bollywood-Dance-Songs_thumb_5f803acf4b23a.jpg",
  },
];


const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5, // default for desktop
    slidesToScroll: 5,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 3,
          rows: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,  // ✅ show exactly 2
          rows: 1,
        },
      },
      {
        breakpoint: 480, // very small phones
        settings: {
          slidesToShow: 1,  // ✅ fallback single slide
          rows: 1,
        },
      },
    ],
  };



  return (
    <div className="w-full">
      <Slider {...settings}>
        {tracksData.map((playlist) => (
          <div key={playlist.id} className="px-2">
            <div className="relative group cursor-pointer">
              {/* Album Image */}
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full aspect-square rounded-xl object-cover shadow-lg hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 transition duration-300 ease-in-out"
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
