
import { useDispatch, useSelector } from "react-redux";
import CustomSlider from "../../components/customSlider/CustomSlider.jsx";
import RowCard from "../../components/rowCard/RowCard.jsx";
const Home = () => {
  const dispatch = useDispatch();
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );
  return (
    <>
      <div className="w-full p-3 md:p-6 rounded-xl shadow-md  border-1 border-gray-700" style={{ backgroundColor: backgroundColor }}>
        <RowCard />
      </div>
      <div className="border-1 border-gray-700 w-full h-full mt-2 p-3 md:p-6 gap-x-2 rounded-xl shadow-md flex flex-wrap overflow-hidden" style={{ backgroundColor: backgroundColor }}>
        <CustomSlider />
      </div>
    </>
  );
};

export default Home;
