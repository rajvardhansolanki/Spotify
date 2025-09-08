
import { useDispatch, useSelector } from "react-redux";
import ThumbNill from "../../assets/Images/Thumbnil/three.jpg";
import RowCard from "../../components/rowCard/RowCard";
const Home = () => {
  const dispatch = useDispatch();
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );
  return (
    <>
      <div className="w-full p-3 md:p-6 rounded-xl shadow-md" style={{ backgroundColor: backgroundColor }}>
        <RowCard />
      </div>
      <div className="w-full p-3 rounded-xl shadow-md mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style={{ backgroundColor: backgroundColor }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-black rounded-xl p-3 hover:bg-[#282828] transition duration-300 cursor-pointer">
            <img
              src={ThumbNill}
              alt="image"
              className="rounded-lg w-full h-48 object-cover mb-3"
            />
            <h3 className="text-white font-semibold truncate">Sailyara</h3>
            <p className="text-gray-400 text-sm truncate">Sailyara</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default Home;
