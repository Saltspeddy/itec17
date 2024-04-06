import { useState } from "react";

function AppContainer(props) {
  const [color, setColor] = useState("green");
  const appName = props.appName;
  const status = props.status;
  if (status === "Stable") {
  } else if (status === "down") {
    setColor("red");
  } else if (status === "unstable") {
    setColor("yellow");
  }
  return (
    <div className="w-[230px] h-[150px] bg-[#181925] rounded-xl flex items-center">
      <div className="w-full h-full m-4 flex gap-4 items-center justify-between">
        <h1 className="text-4xl">{appName}</h1>
        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
}
export default AppContainer;
