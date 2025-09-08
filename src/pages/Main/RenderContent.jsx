
const RenderContent = ({
  children
}) => {
  return (
    <main className="h-[78.8vh] md:h-[75.6] flex-1 overflow-auto transition-colors duration-500 ease-in-out p-4">
      {children}
    </main>
  );
}

export default RenderContent;
