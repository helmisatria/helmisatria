import { initSeo } from "remix-seo";

export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
  title: "Helmi Satria - Fullstack Javascript Developer",
  description:
    "Experienced fullstack javascript developer with 4+ years of experience in building web applications. Highly interested in building huge userbase applications using any web technology",
  twitter: {
    image: {
      url: "https://res.cloudinary.com/helmisatria/image/upload/c_fill,h_500,w_500/v1662137627/Helmi_Satria_compressed.jpg",
      alt: "Helmi Satria",
    },
  },
  openGraph: {
    images: [
      {
        alt: "Helmi Satria",
        url: "https://res.cloudinary.com/helmisatria/image/upload/c_fill,h_500,w_500/v1662137627/Helmi_Satria_compressed.jpg",
      },
    ],
  },
});
