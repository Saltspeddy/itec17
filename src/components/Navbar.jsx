import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";
function Navbar() {
  const homeRef = useRef(null);
  const dashboardRef = useRef(null);

  return (
    <div className="bg-[#181925] w-[200px] md:translate-x-0 translate-x-[-200px] h-screen fixed text-xl font-roboto flex flex-col justify-center items-start">
      <ul className="h-full text-xl flex flex-col justify-between  text-white w-full">
        <div className="flex flex-col gap-4">
          <Link
            ref={homeRef}
            onMouseOver={() => {
              homeRef.current.style.backgroundColor = "#2A2D43";
            }}
            onMouseLeave={() => {
              homeRef.current.style.backgroundColor = "#404363";
            }}
            to="/"
            className="bg-[#404363] p-2  duration-300 w-full"
          >
            {" "}
            Home
          </Link>

          <Link
            ref={dashboardRef}
            onMouseOver={() => {
              dashboardRef.current.style.backgroundColor = "#2A2D43";
            }}
            onMouseLeave={() => {
              dashboardRef.current.style.backgroundColor = "#404363";
            }}
            to="/dashboard"
            className="bg-[#404363] p-2 w-full duration-300"
          >
            Dashboard
          </Link>
        </div>

        <Link to="signup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;
