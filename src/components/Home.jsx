import { Link } from "react-router-dom/cjs/react-router-dom";
import Navbar from "./Navbar";
import { useRef, useState, useEffect } from "react";
import AppContainer from "./AppContainer";
const URL = "http://172.20.10.5:8181/api/app_create/";
const appsURL = "http://172.20.10.5:8181/api/app_get/";
function Home() {
  const btnRef = useRef(null);
  const [className, setClassName] = useState(
    "w-screen z-30 h-screen bg-black text-black fixed opacity-50 hidden"
  );
  const [classNameField, setClassNameField] = useState(
    "fixed z-50 bg-[#181925] w-[500px] h-[200px] translate-x-[calc(50%-250px)] translate-y-[calc(50%+200px)] flex flex-col justify-center items-center rounded-2xl hidden"
  );
  //SHOW CREATE APP FORM

  function createApp() {
    console.log(3);
    if (
      className ===
      "w-screen z-30 h-screen bg-black text-black fixed opacity-50 hidden"
    ) {
      setClassName(
        "w-screen z-30 h-screen bg-black text-black fixed opacity-50 visible"
      );
      setClassNameField(
        "fixed z-50 bg-[#181925] w-[500px] h-[200px] translate-x-[calc(50%-250px)] translate-y-[calc(50%+200px)] flex flex-col justify-center items-center rounded-2xl visible"
      );
    } else {
      setClassName(
        "w-screen z-30 h-screen bg-black text-black fixed opacity-50 hidden"
      );
      setClassNameField(
        "fixed z-50 bg-[#181925] w-[500px] h-[200px] translate-x-[calc(50%-250px)] translate-y-[calc(50%+200px)] flex flex-col justify-center items-center rounded-2xl hidden"
      );
    }
  }
  const [apps, setData] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    token: localStorage.getItem("Token"),
  });

  const getApps = async (e) => {
    console.log(3);
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          // Authorization:,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // console.log(data);
      if (!response.ok) {
        console.log(response.json());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data posted successfully");
      // Optionally, clear the form after successful submission
      setFormData({
        token: localStorage.getItem("Token"),
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  //handling the changes in the input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //posting the added data to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          // Authorization:,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(response.json());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data posted successfully");
      // Optionally, clear the form after successful submission
      setFormData({
        name: "",
        token: localStorage.getItem("Token"),
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  // url('https://i.pinimg.com/originals/81/cc/25/81cc25c4e463033b6a11db7da58b8e0f.jpg')
  return (
    <div
      // onClick={createApp}
      className="w-screen bg-cover bg-center bg-no-repeat bg-[#5016BC] text-white min-h-screen flex flex-col items-center"
    >
      {/* <div className="w-screen h-screen bg-black opacity-40 fixed z-10"></div> */}
      <Navbar />
      <div
        className={className}
        onClick={() => {
          createApp();
        }}
      ></div>
      <div className={classNameField}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="p-2 rounded-3xl"
            name="name"
            value={formData.name}
            type="text"
            onChange={handleChange}
          />
          <button
            ref={btnRef}
            onMouseOver={() => {
              btnRef.current.style.backgroundColor = "#00408F";
            }}
            onMouseLeave={() => {
              btnRef.current.style.backgroundColor = "#004BA8";
            }}
            onClick={handleSubmit}
            className="p-2 bg-[#004BA8] rounded-3xl duration-300"
          >
            Create account
          </button>
        </form>
      </div>
      <div className="h-[70vh] w-screen flex flex-col justify-center items-center z-20">
        <h1 className="text-[19vh] font-maker">FIRECHECK</h1>
        <h2 className="text-2xl">
          track the status of your favorite websites in real time
        </h2>
      </div>
      <div className="w-[80vw] flex justify-between border-b-4 mb-2 border-white z-20">
        <h1 className="text-3xl">Your apps</h1>
        <button
          onClick={() => {
            createApp();
          }}
          className="flex justify-center items-center opacity-100 z-30"
        >
          <p>Add app</p>
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <div className="px-14 gap-4 w-full flex flex-wrap justify-center z-20">
        {/* {apps === 0 ? (
          <p>Just a sec</p>
        ) : (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4">
              {apps.map((dataItem) => {
                return (
                  <Link
                    to="dashboard"
                    className="w-[400px] h-[400px] bg-[#181925] rounded-md"
                    key={dataItem.id} // Remember to provide a unique key when iterating over an array
                  ></Link>
                );
              })}
            </div>
          </div>
        )} */}
        <Link to="dashboard">
          <AppContainer appName={"Fible"} status={"Stable"} />
        </Link>
        <Link to="dashboard">
          <AppContainer appName={"CNB"} status={"Stable"} />
        </Link>
        <Link to="dashboard">
          <AppContainer appName={"La Terasa"} status={"Stable"} />
        </Link>
        <Link to="dashboard">
          <AppContainer appName={"Pyro"} status={"Stable"} />
        </Link>
        <Link to="dashboard">
          <AppContainer appName={"Pyro"} status={"Stable"} />
        </Link>
      </div>
    </div>
  );
}
export default Home;
