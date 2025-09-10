import one from "../../assets/Images/Thumbnil/one.jpeg";

const RowCard = () => {
  return (
    <>
      <div className="w-full h-auto grid md:grid-cols-3 gap-4 grid-cols-2">
        <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
          {/* Image section - fixed width */}
          <div className="w-16 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={one}
              alt="thumbnail-image"
            />
          </div>

          {/* Text section - takes remaining space */}
          <div className="flex-1 bg-[#0d542b] flex items-center pl-2.5">
            <p className="text-xs md:text-sm text-white truncate text-wrap">Shap of you</p>
          </div>
        </div>
        <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
          {/* Image section - fixed width */}
          <div className="w-16 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={one}
              alt="thumbnail-image"
            />
          </div>

          {/* Text section - takes remaining space */}
          <div className="flex-1 bg-[#0d542b] flex items-center pl-2.5">
            <p className="text-white truncate text-wrap">Shap of you</p>
          </div>
        </div>
        <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
          {/* Image section - fixed width */}
          <div className="w-16 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={one}
              alt="thumbnail-image"
            />
          </div>

          {/* Text section - takes remaining space */}
          <div className="flex-1 bg-[#0d542b] flex items-center pl-2.5">
            <p className="text-white truncate text-wrap">Shap of you</p>
          </div>
        </div>
        <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
          {/* Image section - fixed width */}
          <div className="w-16 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={one}
              alt="thumbnail-image"
            />
          </div>

          {/* Text section - takes remaining space */}
          <div className="flex-1 bg-[#0d542b] flex items-center pl-2.5">
            <p className="text-white truncate text-wrap">Shap of you</p>
          </div>
        </div>
        <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
          {/* Image section - fixed width */}
          <div className="w-16 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={one}
              alt="thumbnail-image"
            />
          </div>

          {/* Text section - takes remaining space */}
          <div className="flex-1 bg-[#0d542b] flex items-center pl-2.5">
            <p className="text-white truncate text-wrap">Shap of you</p>
          </div>
        </div>
        <div className="h-16 bg-[#536A6A] rounded-[0.4rem] overflow-hidden flex">
          {/* Image section - fixed width */}
          <div className="w-16 shrink-0">
            <img
              className="h-full w-full object-cover"
              src={one}
              alt="thumbnail-image"
            />
          </div>

          {/* Text section - takes remaining space */}
          <div className="flex-1 bg-[#0d542b] flex items-center pl-2.5">
            <p className="text-white truncate text-wrap">Shap of you</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default RowCard;
