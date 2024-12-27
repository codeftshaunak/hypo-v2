import DesktopNav from "../desktop-nav";
import Logo from "../logo";
import ThemeToggler from "../theme-toggler";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full py-4 px-8">
      <div className="container flex items-center justify-between gap-5">
        <Logo text="HypoMatrix" />
        <div className="flex-1"></div>
        <DesktopNav />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
