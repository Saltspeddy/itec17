const URL = "http://172.20.10.5:8181/api/signup/";
import { useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Cookies from "js-cookie";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data posted successfully");
      // Optionally, clear the form after successful submission
      setFormData({
        username: "",
        password: "",
        email: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const btnRef = useRef(null);

  return (
    <div className="bg-[#5016BC] min-h-screen text-white flex flex-col justify-center items-center">
      <div className="bg-[#181925] min-w-[20em] min-h-[20em] flex flex-col justify-center items-center rounded-3xl">
        <form
          onSubmit={handleSubmit}
          className=" flex h-full w-full flex-col justify-center items-center gap-4"
        >
          <h1 className="text-2xl">Sign up</h1>

          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            placeholder="username"
            value={formData.username}
            name="username"
            type="text"
            onChange={handleChange}
          />
          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            placeholder="password"
            value={formData.password}
            name="password"
            type="text"
            onChange={handleChange}
          />
          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            placeholder="email"
            value={formData.email}
            name="email"
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
      <Link to="/login">already have an account?</Link>
    </div>
  );
}
export default Signup;
