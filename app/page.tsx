import type { Metadata, NextPage } from "next";
import { getWebsite } from "services/website-service";
import { HomeView } from "views/home-view";
import { getStaticProps } from "./loader";

export async function generateMetadata(): Promise<Metadata> {
  const response = await getWebsite();
  const website = response?.data;

  if (!website) return {};

  return {
    title: website.seo?.title,
    description: website.seo?.description,
    openGraph: {
      title: website.seo.openGraph?.title,
      description: website.seo.openGraph?.description,
      url: website.seo?.url,
      images:
        website.seo.openGraph?.images?.map((image) => ({
          url: image.url,
          width: image.width,
          height: image.height,
        })) || [],
      videos:
        website.seo.openGraph?.videos?.map((video) => ({
          url: video.url,
          width: video.width,
          height: video.height,
        })) || [],
    },
  };
}

type Props = {};

const Home: NextPage<Props> = async (props) => {
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
