
const RenderContent = ({
  children
}) => {
  return (
    <main className="max-h-[78.8vh] md:max-h-[75.6] h-full flex-1 overflow-auto transition-colors duration-500 ease-in-out p-1 md:p-4">
      {children}
    </main>
  );
}

export default RenderContent;
