import { categories } from "./services";

const portfolio = [
  {
    title: "Invitación Andrés & Sarai",
    category: `${categories.comunicacion}, ${categories.ilustracion}`,
    image: "/images/proyecto-invitacion-boda.jpg"
  },
  {
    title: "Iconos Inmovilla",
    category: categories.ilustracion,
    image: "/images/proyecto-iconos-inmovilla.jpg"
  },
  {
    title: "Yownes",
    category: `${categories.identidad}, ${categories.branding}`,
    image: "/images/proyecto-yownes.jpg"
  },
  {
    title: "Colección de Mandos",
    category: categories.ilustracion,
    image: "/images/proyecto-ilustraciones-mandos.jpg"
  },
  {
    title: "KRT Motorsport",
    category: categories.identidad,
    image: "/images/proyecto-krt.jpg"
  },
  {
    title: "Usui Reiki Ryoho",
    category: categories.identidad,
    image: "/images/proyecto-reyki.jpg"
  },
  {
    title: "Reason.Build",
    category: categories.identidad,
    image: "/images/proyecto-reason.jpg"
  },
  {
    title: "At Home Renovations",
    category: categories.identidad,
    image: "/images/proyecto-at-home-renovations.jpg"
  }
];

export default portfolio;
