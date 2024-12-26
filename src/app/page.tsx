import { HomeView } from "@/views/home-view";
import { getStaticProps } from "./loader";

type Props = {};

const Home = async (props: Props) => {
  const { website, features, services, members, reviews, projects, faqs } =
    await getStaticProps();

  return (
    <HomeView
      website={website}
      features={features}
      services={services}
      members={members}
      reviews={reviews}
      projects={projects}
      faqs={faqs}
    />
  );
};

export default Home;
