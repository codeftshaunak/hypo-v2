import Link from "next/link";
import { NavLink } from "../type";

type Props = {
  links: NavLink[];
};

const DesktopNav = (props: Props) => {
  const { links } = props;
  return (
    <ul className="hidden lg:flex items-center gap-9">
      {links.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className="text-[13px] font-medium opacity-70 hover:opacity-100 duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
