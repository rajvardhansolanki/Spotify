
import { useDispatch, useSelector } from "react-redux";
import CustomSlider from "../../components/customSlider/CustomSlider.jsx";
import RowCard from "../../components/rowCard/RowCard.jsx";
import tracksData from "../../JsonData/data.json";

const tracksData1 = [
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
];

const Home = () => {
  const dispatch = useDispatch();
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );
  return (
    <>
      <div className="w-full p-3 md:p-6 rounded-xl shadow-md  border-1 border-[#0d542b]" style={{ backgroundColor: backgroundColor }}>
        <RowCard />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracksData} heading={"Reacently Played"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracksData} heading={"Library"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracksData} heading={"Favorite"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracksData} heading={"Discover"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracksData} heading={"Podcasts"} />
      </div>

    </>
  );
};

export default Home;
