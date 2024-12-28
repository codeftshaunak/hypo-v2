import { WebsiteType } from "@/types/website";
import Link from "next/link";
import Logo from "../logo";
import FooterNav from "./nav";

type Props = {
  website: WebsiteType;
};

const Footer = (props: Props) => {
  const { website } = props;
  const { logoText, footerSection, footerLinks } = website;
  return (
    <footer className="container p-8">
      <Logo text={footerSection.title || logoText} />
      <p className="max-w-2xl text-sm text-muted-foreground mt-2">
        {footerSection.description}
      </p>

      <div className="flex items-center justify-between mt-10">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <Link href="/" className="text-primary hover:underline">
            {website?.title}
          </Link>
        </p>

        <FooterNav links={footerLinks} />
      </div>
    </footer>
  );
};

export default Footer;
