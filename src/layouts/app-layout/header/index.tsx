import { WebsiteType } from "@/types/website";
import DesktopNav from "../desktop-nav";
import Logo from "../logo";
import MobileNav from "../mobile-nav";
import ThemeToggler from "../theme-toggler";

type Props = {
  website: WebsiteType;
};

const Header = (props: Props) => {
  const { website } = props;
  const { logoText, navigationLinks } = website;

  return (
    <header className="w-full fixed left-0 top-0 header duration-200">
      <div className="container flex items-center justify-between py-4 px-8 gap-3 lg:gap-5">
        <Logo text={logoText} />
        <div className="flex-1"></div>
        <DesktopNav links={navigationLinks} />
        <ThemeToggler />
        <MobileNav logoText={logoText} links={navigationLinks} />
      </div>
    </header>
  );
};

export default Header;
