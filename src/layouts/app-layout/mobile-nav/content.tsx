import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { LinkType } from "@/types/hygraph";
import Link from "next/link";
import Logo from "../logo";
import CloseBtn from "./close-btn";

type Props = {
  logoText: string;
  links: LinkType[];
  onClose: () => void;
  open: boolean;
};

const MobileNavContent = (props: Props) => {
  const { logoText, links, onClose, open } = props;
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full bg-background flex flex-col lg:hidden duration-200",
        open ? "" : "-translate-x-full"
      )}
    >
      <div className="flex items-center gap-2 justify-between px-6 py-3">
        <Logo text={logoText} />

        <CloseBtn onClose={onClose} />
      </div>
      <ScrollArea className="flex-1 pb-5">
        <ul className="flex flex-col w-full">
          {links.map((item, index, array) => (
            <li key={item.path}>
              <Link
                href={item.url || item.path || "#"}
                className={cn(
                  "py-3 px-6 inline-block border-b w-full text-sm font-medium hover:bg-muted",
                  array.length === index + 1 ? "border-transparent" : ""
                )}
                title={item.title}
              >
                {item.text || item.title}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default MobileNavContent;
