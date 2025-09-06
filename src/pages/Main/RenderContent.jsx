
const RenderContent = ({
  children
}) => {
  return (
    <main className="flex-1 overflow-auto transition-colors duration-500 ease-in-out">
      {children}
      {/* <Player /> */}
    </main>
  );
}

export default RenderContent;
