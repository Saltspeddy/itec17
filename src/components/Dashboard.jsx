import Charts from "./Charts";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Homebtn from "./HomeBtn";
import EndpContainer from "./endpContainer";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Settings from "./Settings";
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
    <div className="w-screen min-h-screen bg-[#5016BC] flex flex-col justify-center items-center">
      <Navbar link="signout" />
      <Homebtn />
      <Settings />
      <div></div>
      <h1 className="text-3xl text-white mb-2 md:pt-0 pt-16 font-rubik">
        Enter your website URL
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          name="url"
          placeholder="enter your endpoint"
          value={formData.url}
          className="p-4 text-black rounded-3xl w-[50vw] min-w-[300px]"
          type="text"
          onChange={handleChange}
        />
      </form>
      <div className="w-[80%] p-4 text-white flex flex-wrap gap-4 justify-center items-center">
        <Link to="/endpoint">
          <EndpContainer endpName={"/contact"} status={"green"} />
        </Link>
        <EndpContainer endpName={"/about"} status={"down"} />
        <EndpContainer endpName={"/informatii"} status={"yellow"} />
        <EndpContainer endpName={"/home"} status={"green"} />
        <EndpContainer endpName={"/home"} status={"green"} />
      </div>
    </div>
  );
}
export default Dashboard;
