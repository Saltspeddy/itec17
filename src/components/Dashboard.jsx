import Charts from "./Charts";

function Dashboard() {
  return (
    <div className="md:ml-[200px] p-4 bg-[#2A2D43] text-white min-h-screen flex flex-col gap-4 justify-center items-center">
      <div className="grid grid-cols-3 bg-[#181925] h-[40vh] w-[80%] rounded-3xl">
        <Charts />
        <div className="p-4">
          <div className="flex">
            <h1>Status:</h1>
            <p>Up</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="green"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#181925] h-[40vh] w-[80%] rounded-3xl">a</div>
      <div className="bg-[#181925] h-[40vh] w-[80%] rounded-3xl">a</div>
    </div>
  );
}
export default Dashboard;
