import Charts from "./Charts";
import { useState, useEffect } from "react";
const URL = "http://172.20.10.5:8181/api/endp/";
// import Cookies from "js-cookie";
function Dashboard() {
  const [formData, setFormData] = useState({
    url: "",
    token: localStorage.getItem("Token"),
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
          // Authorization:,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("State:", data.status);
      console.log("State:", data.time_response);
      console.log("State:", data.user);

      if (!response.ok) {
        console.log(response.json());
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data posted successfully");
      // Optionally, clear the form after successful submission
      setFormData({
        url: "",
        token: localStorage.getItem("Token"),
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="md:ml-[200px] min-h-screen bg-[#7F2CCB] flex flex-col justify-center items-center">
      <div></div>
      <h1>Enter your website URL</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="url"
          placeholder="enter your endpoint"
          value={formData.url}
          className="p-2 text-black rounded-3xl"
          type="text"
          onChange={handleChange}
        />
      </form>
      <div className="w-full p-4 text-white flex flex-wrap gap-4 justify-center items-center">
        <div className=" flex flex-row flex-wrap bg-[#181925] h-[200px] w-[500px] rounded-xl">
          <Charts />

          <div className="p-4">
            <div className="flex ">
              <h1>Name:</h1>
              <p>example.com</p>
            </div>
            <div className="flex justify-center items-center">
              <h1>Status:</h1>
              <p>Healthy</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-[#181925] h-[200px] w-[500px] rounded-xl">
          <Charts />
          <div className="p-4">
            <div className="flex text-2xl justify-center items-center">
              <h1>Status:</h1>
              <p>Unstable</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-[#181925] h-[200px] w-[500px] rounded-xl">
          <Charts />
          <div className="p-4">
            <div className="flex text-2xl justify-center items-center">
              <h1>Status:</h1>
              <p>Unstable</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-[#181925] h-[200px] w-[500px] rounded-xl">
          <Charts />
          <div className="p-4">
            <div className="flex text-2xl justify-center items-center">
              <h1>Status:</h1>
              <p>Down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
