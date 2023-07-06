const Page: React.FC = () => {
  return (
    <div className="w-full flex text-center justify-center items-center p-10 min-h-screen">
      <form className="w-1/2 flex flex-col p-10 h-1/4 bg-gray-600">
        <div>
          <input type="number" className="w-full h-9" />
        </div>
      </form>
    </div>
  );
};

export default Page;
