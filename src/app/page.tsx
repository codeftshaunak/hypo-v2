import HomeView from "@/views/home";
import { getPageData } from "./loader";

const HomePage = async () => {
  const response = await getPageData();
  return <HomeView {...response} />;
};

export default HomePage;
