import logo from "../assets/logo.png";
import { Bell } from "phosphor-react";
import avatar from "../assets/profile.jpg";
export function Header() {
  return (
    <nav className="flex items-center justify-between p-4  shadow ">
      <div className="flex items-center gap-1">
        <img className="h-10" src={logo} alt="" />
        <span>TrustPay</span>
      </div>
      <div className="flex items-center gap-2  ">
        <button className="mr-4 cursor-pointer">
          <Bell size={24} />
        </button>
        <div className="flex items-center mr-4 gap-2 ">
          <img
            className="h-8 rounded-full w-8 border-2 border-gray-300"
            src={avatar}
            alt=""
          />
          <span>Augusto Manuel</span>
        </div>
      </div>
    </nav>
  );
}
