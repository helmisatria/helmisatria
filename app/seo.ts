import { initSeo } from "remix-seo";

export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
  title: "Helmi Satria - Full-stack Javascript Developer",
  description:
    "Experienced full-stack javascript developer with 4+ years of experience in building web applications. Highly interested in building huge userbase applications using any web technology",
  twitter: {
    image: {
      url: "https://res.cloudinary.com/helmisatria/image/upload/c_fill,h_400,w_400/v1662137627/Helmi_Satria_compressed.jpg",
      alt: "Helmi Satria",
    },
  },
  openGraph: {
    images: [
      {
        height: 400,
        width: 400,
        alt: "Helmi Satria",
        url: "https://res.cloudinary.com/helmisatria/image/upload/c_fill,h_400,w_400/v1662137627/Helmi_Satria_compressed.jpg",
      },
    ],
  },
});
