import { initSeo } from "remix-seo";

export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
  title: "Helmi Satria - Full-stack Javascript Developer",
  description:
    "Experienced full-stack javascript developer with 4+ years of experience in building web applications. Highly interested in building huge userbase applications using any web technology",
  twitter: {
    image: {
      url: "https://res.cloudinary.com/helmisatria/image/upload/v1662170636/helmisatria.com/v2/Helmi%20Satria%20Twitter.png",
      alt: "Helmi Satria",
    },
  },
  openGraph: {
    description:
      "Experienced full-stack javascript developer with 4+ years of experience in building web applications.",
    defaultImageHeight: 630,
    defaultImageWidth: 1200,
    images: [
      {
        width: 1200,
        height: 300,
        alt: "Helmi Satria",
        url: "https://res.cloudinary.com/helmisatria/image/upload/v1662170636/helmisatria.com/v2/Helmi%20Satria%20Twitter.png",
      },
    ],
  },
});
