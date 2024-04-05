const URL = "https://robertuibar.pythonanywhere.com/api/signup/";
import { useState, useRef } from "react";

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
    <div className="bg-[#2A2D43] col-span-3 flex flex-col justify-center items-center">
      <div className="bg-[#414361] w-[20vw] h-[30vh] flex flex-col justify-center items-center rounded-3xl">
        <h1>Log into your account</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input value={FormData.username} type="text" />
          <input value={FormData.password} type="text" />
          <input value={FormData.email} type="text" />
          <button
            ref={btnRef}
            onMouseOver={() => {
              btnRef.current.style.backgroundColor = "#00408F";
            }}
            onMouseLeave={() => {
              btnRef.current.style.backgroundColor = "#004BA8";
            }}
            onClick={handleSubmit}
            className=" p-2 bg-[#004BA8] rounded-3xl duration-300"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
