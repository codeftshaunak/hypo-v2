import DesktopNav from "../desktop-nav";
import Logo from "../logo";
import MobileNav from "../mobile-nav";
import ThemeToggler from "../theme-toggler";

type Props = {};

const links = [
  {
    path: "#features",
    label: "Features",
  },
  {
    path: "#services",
    label: "Services",
  },
  {
    path: "#teams",
    label: "Teams",
  },
  {
    path: "#works",
    label: "Works",
  },
  {
    path: "#reviews",
    label: "Reviews",
  },
  {
    path: "#faq",
    label: "FAQ",
  },
  {
    path: "#contact",
    label: "Contact",
  },
];

const Header = (props: Props) => {
  return (
    <header className="w-full ">
      <div className="container flex items-center justify-between py-4 px-8 gap-3 lg:gap-5">
        <Logo text="HypoMatrix" />
        <div className="flex-1"></div>
        <DesktopNav links={links} />
        <ThemeToggler />
        <MobileNav logoText="HypoMatrix" links={links} />
      </div>
    </header>
  );
};

export default Header;
