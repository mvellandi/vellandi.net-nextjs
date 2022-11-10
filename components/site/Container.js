export default function Container({ children }) {
  return (
    <>
      <div className="flex flex-col items-center">
        {children}
      </div>
    </>
  );
}