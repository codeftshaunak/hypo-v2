import IsScrolling from "@/components/common/is-scrolling";
import { WebsiteType } from "@/types/website";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: ReactNode;
  website: WebsiteType;
};

const AppLayout = (props: Props) => {
  const { children, website } = props;
  return (
    <>
      <Header website={website} />
      {children}
      <Footer website={website} />
      <IsScrolling height={64} />
    </>
  );
};

export default AppLayout;
