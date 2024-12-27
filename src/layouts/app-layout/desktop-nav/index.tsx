import Link from "next/link";

type Props = {};

const links = [
  {
    id: "#features",
    label: "Features",
  },
  {
    id: "#services",
    label: "Services",
  },
  {
    id: "#teams",
    label: "Teams",
  },
  {
    id: "#works",
    label: "Works",
  },
  {
    id: "#reviews",
    label: "Reviews",
  },
  {
    id: "#faq",
    label: "FAQ",
  },
  {
    id: "#contact",
    label: "Contact",
  },
];

const DesktopNav = (props: Props) => {
  return (
    <ul className="flex items-center gap-9">
      {links.map((item) => (
        <li key={item.id}>
          <Link
            href={item.id}
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
