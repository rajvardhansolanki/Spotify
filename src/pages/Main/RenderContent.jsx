
const RenderContent = ({
  children
}) => {
  return (
    <main className="h-full flex-1 overflow-auto transition-colors duration-500 ease-in-out p-2">
      {children}
    </main>
  );
}

export default RenderContent;
