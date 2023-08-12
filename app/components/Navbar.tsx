import { IoIosNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className="flex justify-end items-center gap-4 p-4 border-b-2">
      <IoIosNotificationsOutline />
      <p>User Name</p>
    </div>
  );
}

export default Navbar;
