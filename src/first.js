import logo from "./logo.svg";
export default function FirstCard() {
  return (
    <>
      <div className="flex-row md:flex-col items-center justify-center bg-white mx-8 md:p-8 p-4 rounded-xl shadow-lg hover:shadow space-y-2 space-x-1">
        <img
          src={logo}
          alt=""
          className="h-24 w-24 bg-black rounded-full mx-auto ring-4 transform hover:scale-110"
        />
        <div className="text-center space-y-2">
          <p className="text-lg font-bold">Learn React</p>
          <p className="text-gray-500">Youtube Channel</p>
          <button className="px-4 py-1 border-2 border-purple-200 rounded-full hover:bg-purple-200  text-purple-600 hover:text-white font-semibold text-center">
            Visit now
          </button>
        </div>
      </div>
    </>
  );
}
