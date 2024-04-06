const URL = "http://172.20.10.5:8181/api/login/";
import { useState, useRef } from "react";
import Cookies from "js-cookie";
import { data } from "autoprefixer";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Token:", data.token);
      Cookies.set("Token", data, { expires: 1 / 24 });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data posted successfully");
      // Optionally, clear the form after successful submission
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const btnRef = useRef(null);

  return (
    <div className="md:ml-[200px] bg-[#7F2CCB] min-h-screen text-white col-span-4 flex flex-col justify-center items-center">
      <div className="bg-[#181925] min-w-[25em] min-h-[20em] flex flex-col justify-center items-center rounded-3xl">
        <form
          onSubmit={handleSubmit}
          className=" flex h-full w-full flex-col justify-center items-center gap-4"
        >
          <h1 className="text-2xl">Log into your account</h1>

          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            placeholder="username"
            value={formData.username}
            type="text"
            name="username"
            onChange={handleChange}
          />
          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            placeholder="password"
            value={formData.password}
            type="text"
            name="password"
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
    </div>
  );
}
export default Login;
