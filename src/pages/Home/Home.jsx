
import { useSelector } from "react-redux";
import CustomSlider from "../../components/customSlider/CustomSlider.jsx";
import CollectionCard from "../../components/collectionCard/CollectionCard.jsx";

const Home = () => {
  const tracks = useSelector((state) => state.getTracks.tracks);

  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );

  return (
    <div className="w-full h-auto p-1">
      <div className="w-full flex flex-wrap p-3 md:p-6 rounded-xl shadow-md  border-1 border-[#0d542b] transition-colors duration-800 ease-in-out" style={{ backgroundColor: backgroundColor }}>
        <CollectionCard />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden transition-colors duration-800 ease-in-out" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracks} heading={"Reacently Played"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden transition-colors duration-800 ease-in-out" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracks} heading={"Library"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden transition-colors duration-800 ease-in-out" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracks} heading={"Favorite"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden transition-colors duration-800 ease-in-out" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracks} heading={"Discover"} />
      </div>
      <div className="border-1 border-[#0d542b] w-full mt-1 p-3 md:p-4  rounded-xl shadow-md flex flex-wrap overflow-hidden transition-colors duration-800 ease-in-out" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider data={tracks} heading={"Podcasts"} />
      </div>

    </div>
  );
};

export default Home;
