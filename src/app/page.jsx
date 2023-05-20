import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="banner"
        className="grid gap-8 items-center min-h-[calc(100vh-69px)] w-full px-[4%] mx-[auto] py-10 md:grid-cols-banner"
      >
        <div className="grid order-2 gap-4 md:gap-6 md:order-1">
          <h1 className="text-3xl lg:text-5xl font-bold">{banner.title}</h1>
          <p className="leading-relaxed md:text-lg text-justify">
            {banner.text[0]}
          </p>
          <p className="leading-relaxed md:text-lg text-justify">
            {banner.text[1]}
          </p>
          <ButtonLink route={banner.cta.route}>{banner.cta.label}</ButtonLink>
        </div>
        <div className="grid place-items-center md:order-1">
          <Image
            alt="Mountains"
            src={banner.image}
            width={300}
            height={300}
            sizes="100vw"
            className="w-full h-auto max-w-[300px] md:max-w-full"
            priority={true}
          />
        </div>
      </section>

      <section
        id="services"
        className="grid gap-8 items-center w-full px-[4%] mx-[auto] py-10 md:grid-cols-2"
      >
        <div className="grid order-2 gap-4 md:gap-6 ">
          <h2 className="text-2xl lg:text-4xl font-bold">{services.title}</h2>
          <p className="leading-relaxed md:text-lg text-justify">
            {services.text}
          </p>
          <ul className="ml-8">
            {services.list.map(({ key, text }) => {
              return (
                <li
                  key={key}
                  className="list-disc leading-relaxed md:text-lg text-justify"
                >
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid order-1 place-items-center">
          <Image
            alt="Mountains"
            src={services.image}
            width={300}
            height={300}
            sizes="100vw"
            className="w-full h-auto md:min-h-[600px] md:object-cover md:max-w-full"
            priority={true}
          />
        </div>
      </section>

      <section id="brands" className="grid gap-8 px-[4%] py-10 w-full">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          Nuestras Marcas
        </h2>
        <figure className="grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map(({ route, alt }) => {
            return (
              <Image
                key="brand"
                src={route}
                alt={alt}
                width={300}
                height={300}
                quality={100}
                className="w-full h-auto"
              />
            );
          })}
        </figure>
      </section>
    </>
  );
}

const banner = {
  title: "Quienes Somos",
  text: [
    "Somos una empresa familiar fundada en Guayaquil - Ecuador el 13 de Noviembre del año 2000, dedicada a la importación y distribución de herramientas para la construcción, agricultura, jardinería e industria con cobertura en todo el territorio nacional.",
    "A partir del 2007 contamos con una línea de negocios relacionada con importación de Aluminio y Vidrio. Nuestra bodega Matriz está ubicada en Guayaquil y además tenemos un punto de venta en la ciudad de Manta. Realizamos instalaciones de vidrio crudo, templado y laminado en villas, departamentos, oficinas, centros comerciales, entre otros. Contamos con personal calificado para ello.",
  ],
  cta: {
    label: "Contactar",
    route: "/contacto",
  },
  image: "/assets/logoHerracolRounded.png",
};

const services = {
  title: "Servicios",
  text: "Realizamos obras de instalación en: oficinas, residencias, edificios y centros comerciales:",
  image: "/assets/serviceBackground.jpg",
  list: [
    { key: "item-1", text: "Vidrio Crudo" },
    { key: "item-2", text: "Vidrio Templado" },
    { key: "item-1", text: "Vidrio Laminado" },
    {
      key: "item-3",
      text: "Puertas de baño en Acero Inoxidable y vidrio Templado",
    },
    { key: "item-4", text: "Vidrios de Control Solar y baja emisividad" },
    {
      key: "item-5",
      text: "Trabajos de Alucubond en Aluminio Compuesto y Policarbonato.",
    },
    { key: "item-6", text: "Pérgolas" },
    {
      key: "item-7",
      text: "Instalación con Acero Inoxidable en pasamanos, mamparas, entre otras aplicaciones",
    },
  ],
};

const brands = [
  {
    route: "/assets/brands/logoBolt.png",
    alt: "Logo Bolt",
  },
  {
    route: "/assets/brands/logoGermany.png",
    alt: "Logo Germany",
  },
  {
    route: "/assets/brands/logoGavilan.png",
    alt: "Logo Gavilan",
  },
  {
    route: "/assets/brands/logoIncolma.png",
    alt: "Logo Incolma",
  },
  {
    route: "/assets/brands/logoColima.png",
    alt: "Logo Colima",
  },
  {
    route: "/assets/brands/logoAbro.png",
    alt: "Logo Abro",
  },
  {
    route: "/assets/brands/logoNorton.png",
    alt: "Logo Norton",
  },
  {
    route: "/assets/brands/logoSaintGobain.png",
    alt: "Logo Saint Gobain",
  },
  {
    route: "/assets/brands/logoCaribe.png",
    alt: "Logo Caribe",
  },
  {
    route: "/assets/brands/logoTEKBOND.png",
    alt: "Logo TEKBOND",
  },
  {
    route: "/assets/brands/logoPractiagro.png",
    alt: "Logo Practiagro",
  },
  {
    route: "/assets/brands/logoAgrimix.png",
    alt: "Logo Agrimix",
  },
];
