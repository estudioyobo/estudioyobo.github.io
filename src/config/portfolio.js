import { categories } from "./services";

const portfolio = [
  {
    title: "At Home Renovations",
    category: categories.identidad,
    image: "/images/proyecto-at-home-renovations.jpg"
  },
  {
    title: "Invitación Boda",
    category: `${categories.comunicacion}, ${categories.ilustracion}`,
    image: "/images/proyecto-invitacion-boda.jpg"
  },
  {
    title: "Inmovilla",
    category: categories.ilustracion,
    image: "/images/proyecto-iconos-inmovilla.jpg"
  },
  {
    title: "Yownes",
    category: `${categories.identidad}, ${categories.branding}`,
    image: "/images/proyecto-yownes.jpg"
  },
  {
    title: "Mandos",
    category: categories.ilustracion,
    image: "/images/proyecto-ilustraciones-mandos.jpg"
  },
  {
    title: "KRT Motorsport",
    category: categories.identidad,
    image: "/images/proyecto-krt.jpg"
  },
  {
    title: "Reason",
    category: categories.identidad,
    image: "/images/proyecto-reason.jpg"
  },
  {
    title: "Usui Reiki Ryoho",
    category: categories.identidad,
    image: "/images/proyecto-reyki.jpg"
  }
];

export default portfolio;
