import { useDispatch, useSelector } from "react-redux";

const RenderContent = ({
  children
}) => {
  const dispatch = useDispatch();
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );
  return (
    <main className="max-h-[78.8vh] md:max-h-[75.6vh] sm:max-h-[75.6vh] h-full flex-1 overflow-auto transition-colors duration-500 ease-in-out p-1 md:p-1" style={{ backgroundColor: fontColor }}>
      {children}
    </main>
  );
}

export default RenderContent;
