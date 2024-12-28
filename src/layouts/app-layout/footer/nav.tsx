import { LinkType } from "@/types/hygraph";
import Link from "next/link";

type Props = {
  links: LinkType[];
};

const FooterNav = (props: Props) => {
  const { links } = props;
  return (
    <ul className="flex items-center gap-6">
      {links.map((item, index) => (
        <li key={index}>
          <Link
            href={item.url || item.path || "#"}
            className="text-sm text-muted-foreground hover:text-foreground duration-200"
            target={item.newTab ? "_blank" : undefined}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
