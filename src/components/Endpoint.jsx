import Charts from "./Charts";
import HomeBtn from "./HomeBtn";
import Navbar from "./Navbar";

function Endpoint() {
  return (
    <div className="bg-[#5016BC] w-screen min-h-screen flex justify-center items-center py-16">
      <Navbar link="signout" />
      <HomeBtn />
      <div className="md:w-[70%] w-[95%] md:h-[60%] h-[100vh] min-h-[400px] grid grid-cols-5 grid-rows-3 gap-4 md:pt-0">
        <div className=" md:col-span-3 col-span-5 md:row-span-2 bg-[#181925] rounded-2xl">
          <Charts />
        </div>
        <div className="md:col-span-2 col-span-5 md:row-span-2 bg-[#181925] flex p-4 gap-3 text-xl text-white rounded-2xl">
          <h1>ENDP NAME</h1>
          <p>Status: Stable</p>
        </div>
        <div className="md:col-span-5 col-span-5 bg-[#181925] flex flex-col p-4 gap-3 text-xl text-white rounded-2xl">
          <h1>ENDP NAME</h1>
          <p>Status: Stable</p>
        </div>
      </div>
    </div>
  );
}
export default Endpoint;
