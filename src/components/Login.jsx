const URL = "https://robertuibar.pythonanywhere.com/api/signup/";
import { useState, useRef } from "react";

function Login() {
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
    <div className="bg-[#2A2D43] min-h-screen text-white col-span-4 flex flex-col justify-center items-center">
      <div className="bg-[#414361] min-w-[25em] min-h-[20em] flex flex-col justify-center items-center rounded-3xl">
        <form
          onSubmit={handleSubmit}
          className=" flex h-full w-full flex-col justify-center items-center gap-4"
        >
          <h1 className="text-2xl">Log into your account</h1>

          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            value={FormData.username}
            type="text"
          />
          <input
            className="text-black w-[80%] p-2 rounded-3xl"
            value={FormData.password}
            type="text"
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
