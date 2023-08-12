import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Palatino from "next/font/local";

interface SidebarItemProps {
  label: string;
  active?: boolean;
  href: string;
}
const myFont = Palatino({
  src: [
    {
      path: "../../public/fonts/palatino-linotype.ttf",
      weight: "400",
    },
  ],
});

const SidebarItem: React.FC<SidebarItemProps> = ({ label, active, href }) => {
  return (
    <div className={`flex ${myFont.className} items-center ml-4 gap-8 mb-8`}>
      <div className="text-[#9197B3] text-sm">
        <MdOutlineKeyboardArrowRight />
      </div>
      <Link href={href} className="text-xl text-[#1A1558]  w-full text-center">
        <p
          className={
            active ? "border border-[#413B89] rounded-md py-2 shadow-sm" : ""
          }
        >
          {label}
        </p>
      </Link>
    </div>
  );
};

export default SidebarItem;
