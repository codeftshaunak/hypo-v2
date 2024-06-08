import { NextSeoProps } from "next-seo";

export const seoConfig: NextSeoProps = {
  title: "HypoMatrix",
  description:
    "Hypomatrix web design and development agency. Best website development agency in the world. Web development and software development project develop by great developer with mordern technology react.js next.js node.js python mongodb express.js.",
  openGraph: {
    title: "HypoMatrix",
    description:
      "Empower your business with HypoMatrix's creative and technical expertise. We deliver customized digital solutions for enhanced growth and visibility.",
    url: "https://hypomatrix.com",
    images: [
      {
        url: "https://hypomatrix.com/static/logos/hypomatrix.png",
        alt: "HypoMatrix",
        height: 760,
        width: 1728,
      },
    ],
  },
};
