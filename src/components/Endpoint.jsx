import Charts from "./Charts";
import HomeBtn from "./HomeBtn";
import Navbar from "./Navbar";

function Endpoint() {
  return (
    <div className="bg-[#5016BC] w-screen h-screen flex justify-center items-center">
      <Navbar />
      <HomeBtn />
      <div className="w-[70%] h-[60%] grid grid-cols-5 grid-rows-3 gap-4">
        <div className=" col-span-3 row-span-2 bg-[#181925] rounded-2xl">
          <Charts />
        </div>
        <div className="col-span-2  row-span-2 bg-[#181925] flex p-4 gap-3 text-xl text-white rounded-2xl">
          <h1>ENDP NAME</h1>
          <p>Status: Stable</p>
        </div>
        <div className="col-span-5 bg-[#181925] flex flex-col p-4 gap-3 text-xl text-white rounded-2xl">
          <h1>ENDP NAME</h1>
          <p>Status: Stable</p>
        </div>
      </div>
    </div>
  );
}
export default Endpoint;
