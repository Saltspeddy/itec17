import { useRef } from "react";
import { useHistory } from "react-router-dom";

function Signout() {
  const history = useHistory();
  function handleSubmit() {
    history.push("/signup");
  }
  const btnRef = useRef(null);
  return (
    <div className="bg-[#5016BC] min-h-screen text-white col-span-4 flex flex-col justify-center items-center">
      <div className="bg-[#181925] min-w-[20em] min-h-[20em] flex flex-col justify-center items-center rounded-3xl">
        <h1 className="text-2xl">Signed in as NAME</h1>
        <button
          ref={btnRef}
          onMouseOver={() => {
            btnRef.current.style.backgroundColor = "#00408F";
          }}
          onMouseLeave={() => {
            btnRef.current.style.backgroundColor = "#004BA8";
          }}
          onClick={handleSubmit}
          className="p-2 mt-6 bg-[#004BA8] rounded-3xl duration-300"
        >
          Create account
        </button>
      </div>
    </div>
  );
}

export default Signout;
