
const RenderContent = ({
  children
}) => {
  return (
    <main className="max-h-[78.8vh] md:max-h-[75.6vh] sm:max-h-[75.6vh] h-full flex-1 overflow-auto transition-colors duration-500 ease-in-out p-1 md:p-4">
      {children}
    </main>
  );
}

export default RenderContent;
