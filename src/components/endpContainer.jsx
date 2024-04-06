import { useState } from "react";

function EndpContainer(props) {
  const [color, setColor] = useState("green");
  const endpName = props.endpName;
  const statusCheck = props.statusCheck;
  if (statusCheck === "stable") {
  } else if (statusCheck === "down") {
    setColor("red");
  } else if (statusCheck === "unstable") {
    setColor("yellow");
  }
  return (
    <div className="w-[200px] h-[100px] bg-[#181925] rounded-xl flex items-center">
      <div className="w-full h-full m-4 flex gap-4 items-center justify-between">
        <h1 className="text-2xl">{endpName}</h1>
        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
}
export default EndpContainer;
