import { Roboto, Playfair_Display, Poppins, Inknut_Antiqua, Vollkorn, Inter, Montserrat, Merriweather, Zeyada, Kaushan_Script, Great_Vibes, Noto_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inknut",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vollkorn",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
});

const zeyada = Zeyada({
  subsets: ["latin"],
  variable: "--font-zeyada",
  weight: "400",
});

const kaushan = Kaushan_Script({
  subsets: ["latin-ext"],
  variable: "--font-kaushan",
  weight: "400",
});

const greatvibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-greatvibes",
  weight: "400",
});

const notosans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-notosans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export { roboto, playfair, poppins, inknut, vollkorn, inter, montserrat, merriweather, zeyada, kaushan, greatvibes, notosans };
