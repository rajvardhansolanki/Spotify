import ThumbNill from "../../assets/Images/Thumbnil/one.jpeg";
const Player = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-2/5 h-full p-2 flex gap-2">
        <div className="w-[5rem] h-[4rem] bg-red-300 overflow-hidden">
          <img className="w-full h-full bg-cover" src={ThumbNill} alt="thumbnill" />
        </div>
        <div className="w-full  px-1 text-white">
          <p className="text-[0.8rem] font-bold ">Heeriye Nasha Tera Karke Ranjha...</p>
          <p className="text-[0.8rem] ">Salman Khan | Jacqueline Fernandez's</p>
          <p className="text-[0.8rem] ">Salman Khan | Jacqueline Fernandez's</p>
        </div>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
}

export default Player;
