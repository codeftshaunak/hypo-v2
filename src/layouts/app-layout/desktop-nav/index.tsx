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
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
