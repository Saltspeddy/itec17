import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <div className="bg-[#414361] text-xl font-roboto flex flex-col justify-center items-start">
      <div>
        <ul className="text-xl">
          <Link to="/"> Home</Link>
          <Link to="/dashboard" className="text-xl">
            Dashboard
          </Link>
          <Link to="login">login</Link>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
