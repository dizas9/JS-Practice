import logo from "./logo.svg";
export default function SecondCard() {
  return (
    <>
      <div className="secondCard">
        <img
          src={logo}
          alt=""
          className="h-24 w-24  bg-black rounded-full m-1"
        />
        <div className="flex-col space-y-1">
          <p className="font-semibold">React Framework</p>
          <p className="font-thin text-gray-500">JavaScript Library</p>
        </div>
      </div>
    </>
  );
}
