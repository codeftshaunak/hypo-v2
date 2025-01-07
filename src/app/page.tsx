import HomeView from "@/views/home";
import { getPageData } from "./loader";
import Schema from "./schema";

const HomePage = async () => {
  const response = await getPageData();

  return (
    <>
      <HomeView {...response} />
      <Schema {...response} />
    </>
  );
};

export default HomePage;
