export const categories = {
  ilustracion: "Ilustración",
  branding: "Branding",
  identidad: "Identidad Corporativa",
  comunicacion: "Comunicación gráfica",
  packaging: "Packaging",
  social: "Social media",
  motion: "Motions Graphics",
  apps: "Apps Móviles",
  api: "APIs",
  web: "Apps Web",
  databases: "Bases de Datos",
  bots: "Bots de Telegram"
};

const services = {
  design: [
    {
      title: categories.identidad,
      description:
        "Dedicamos tiempo y esfuerzo para que tu marca quede perfecta, tanto si es nueva o deseas un rediseño.",
      list: ["Naming", "Logotipo", "Branding", "Manuales de estilo"],
      image: "/icons/identidad-corporativa.svg",
      color: "/icons/identidad-corporativa-color.svg"
    },
    {
      title: categories.comunicacion,
      description:
        "Comunicar tu idea de manera correcta es muy importante para no confundir a tu público. Desarollamos todo tipo de publicidad, desde carteles hasta tarjetas.",
      list: [
        "Carteles",
        "Tríticos-Dípticos",
        "Flyers",
        "Pegatinas",
        "Tarjetas"
      ],
      image: "/icons/comunicacion-grafica.svg",
      color: "/icons/comunicacion-grafica-color.svg"
    },
    {
      title: categories.ilustracion,
      description:
        "Realizamos ilustraciones como tal o como apoyo a otros campos del diseño.",
      list: [
        "Iconos",
        "Ilustraciones por encargo",
        "Como complemento de gráficas",
        "En textil, camisetas, bolsos..."
      ],
      image: "/icons/ilustracion.svg",
      color: "/icons/ilustracion-color.svg"
    },
    {
      title: categories.packaging,
      description:
        "Hacemos que los unboxings sean atractivos desde el principio. Transmitimos la imágen de tu marca de una manera atractiva y divertida.",
      list: ["Etiquetas", "Diseño de packaging", "Bandas o cintas para cajas"],
      image: "/icons/packaging.svg",
      color: "/icons/packaging-color.svg"
    },
    {
      title: categories.social,
      description:
        "Tomamos las riendas de las redes sociales tales como Facebook, Twitter o Instagram para ayudarte a llegar al público de una manera graficamente correcta.",
      list: ["Publicaciones en RRSS", "Campañas para RRSS"],
      image: "/icons/social-media.svg",
      color: "/icons/social-media-color.svg"
    },
    {
      title: categories.motion,
      description:
        "Los videos promocionales pueden ser de gran ayuda a la hora de mostrar tu marca o un nuevo producto.",
      list: ["Minivídeos animados"],
      image: "/icons/stop-motions.svg",
      color: "/icons/stop-motions-color.svg"
    }
  ],
  develop: [
    {
      title: categories.apps,
      description: "Hacemos apps móviles a medida para hacer realidad tu idea.",
      list: ["iOS", "Android", "React-Native (multiplataforma)"],
      image: "/icons/apps-moviles.svg"
    },
    {
      title: categories.web,
      description:
        "Desarrollamos tanto páginas web para tu marca personal, tienda para tu negocio o cualquier aplicación que necesites.",
      list: ["Páginas Web", "Apps Web", "Tiendas"],
      image: "/icons/web.svg"
    },
    {
      title: categories.api,
      description: "Servicios de API para proveer de datos a tus aplicaciones.",
      list: ["REST", "GraphQL"],
      image: "/icons/apis.svg"
    },
    {
      title: categories.databases,
      description: "Gestiona tus datos con una base de datos a medida.",
      list: ["MySql", "MongoDB"],
      image: "/icons/databases.svg"
    },
    {
      title: categories.bots,
      description:
        "¿Tienes una idea de interacción para usuarios en Telegram? Cuéntanosla y la pondremos en marcha.",
      list: [],
      image: "/icons/telegram.svg"
    }
  ]
};

export default services;
