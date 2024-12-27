import AppLayout from "@/layouts/app-layout";
import { getWebsite } from "@/services/website-service";
import "@/styles/index.css";
import { inter } from "./fonts";
import metadata from "./metadata";

export const generateMetadata = metadata;

type Props = { children: React.ReactNode };

const RootLayout = async (props: Props) => {
  const { children } = props;
  const response = await getWebsite();
  const website = response?.data;

  if (!website) throw new Error("Website not found");

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AppLayout website={website}>{children}</AppLayout>
      </body>
    </html>
  );
};

export default RootLayout;
