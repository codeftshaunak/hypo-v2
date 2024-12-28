import { LinkType } from "@/types/hygraph";
import Link from "next/link";

type Props = {
  links: LinkType[];
};

const DesktopNav = (props: Props) => {
  const { links } = props;
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {links.map((item, index) => (
        <li key={index}>
          <Link
            href={item.url || item.path || "#"}
            className="text-[13px] font-medium opacity-70 hover:opacity-100 duration-200"
            title={item.title}
          >
            {item.text || item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
