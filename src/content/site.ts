import type { SiteContent } from "./types";

// Contenido verificado en Instagram @potipa.blanes (textos, carteles con precios, fotos y vídeos)
// y en su ficha de Google Maps (dirección).
const WA = "https://wa.me/34664337999?text=" + encodeURIComponent("Hola PotiPa, me gustaría encargar una tarta.");
const URL = "https://durducco-source.github.io/potipa-blanes-web/";

export const site: SiteContent = {
  lang: "es",
  brand: { name: "PotiPá", top: "Pastelería artesanal", sub: "Enjoy sweet moments" },
  seo: {
    title: "PotiPa · Pastelería artesanal en Blanes | Tartas personalizadas para bodas y cumpleaños",
    description:
      "PotiPa, pastelería artesanal en Blanes (Rambla de Joaquim Ruyra, 3). Tartas personalizadas para bodas, cumpleaños, fiestas y bautizos con ingredientes naturales. Encarga por WhatsApp: 664 33 79 99.",
    url: URL,
    image: `${URL}media/og-potipa.jpg`,
    keywords: ["pastelería Blanes", "tartas personalizadas Blanes", "tartas de boda Costa Brava", "tarta cumpleaños Blanes", "PotiPa"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: "PotiPa · La pastelería",
      url: URL,
      telephone: "+34664337999",
      servesCuisine: "Pastelería",
      address: { "@type": "PostalAddress", streetAddress: "Rambla de Joaquim Ruyra, 3", addressLocality: "Blanes", postalCode: "17300", addressRegion: "Girona", addressCountry: "ES" },
      sameAs: ["https://www.instagram.com/potipa.blanes/", "https://www.facebook.com/potipablanes/"],
    },
  },
  nav: [
    { label: "La casa", href: "#casa" },
    { label: "Bodas", href: "#bodas" },
    { label: "Carta", href: "#carta" },
    { label: "Galería", href: "#galeria" },
    { label: "Encargar", href: "#encargar" },
  ],
  cta: { label: "Encargar tarta", href: WA, external: true },
  hero: {
    scrollHint: "Desliza",
    acts: [
      { label: "Primer acto", title: "Momentos *más dulces.*", text: "Tartas artesanales para bodas, cumpleaños, fiestas y bautizos, hechas con ingredientes naturales.", media: { type: "video", src: "/media/tarta-orquideas.mp4", poster: "/media/tarta-orquideas-sm.jpg", alt: "Tarta blanca con cascada de orquídeas naturales" } },
      { label: "Segundo acto", title: "El *obrador.*", text: "Cada bizcocho, cada crema y cada acabado se prepara a mano, en Blanes.", media: { type: "video", src: "/media/obrador.mp4", poster: "/media/obrador-sm.jpg", alt: "Tartas preparándose en el obrador de PotiPa" } },
      { label: "Tercer acto", title: "La *firma.*", text: "Diseños personalizados que cuentan la historia de cada celebración.", media: { type: "video", src: "/media/potipa-tartas.mp4", poster: "/media/potipa-tartas-sm.jpg", alt: "La pastelera de PotiPa junto a una tarta de boda" } },
      { label: "Cuarto acto", title: "El *gran día.*", text: "Vivimos la temporada de bodas con el corazón: tartas que forman parte de vuestra historia.", media: { type: "video", src: "/media/temporada-bodas.mp4", poster: "/media/temporada-bodas-sm.jpg", alt: "Banquete de boda al aire libre" } },
    ],
  },
  intro: {
    id: "casa",
    eyebrow: "La casa",
    title: "No hacemos solo pasteles. *Creamos emociones.*",
    paragraphs: [
      "PotiPa es una pastelería artesanal en Blanes especializada en tartas personalizadas para bodas, cumpleaños, fiestas y bautizos, elaboradas con ingredientes naturales.",
      "Combinamos la elegancia de la buttercream, texturas hechas a mano, flores, fruta fresca y detalles personalizados para que cada tarta sea única.",
    ],
    stats: [
      { value: "100%", label: "Artesanal" },
      { value: "2–100", label: "Personas por tarta" },
      { value: "Bodas", label: "Y celebraciones" },
      { value: "Blanes", label: "Costa Brava" },
    ],
  },
  chapters: {
    id: "bodas",
    eyebrow: "Para cada ocasión",
    title: "Tartas que *cuentan historias.*",
    items: [
      {
        label: "Bodas",
        title: "Un detalle *único* para un día inolvidable.",
        text: "Pasteles de boda pensados con vosotros: buttercream, flores naturales y acabados elegantes que acompañan los momentos más especiales de la vida.",
        bullets: ["Tarta de boda para 50 personas: 325 €", "Tarta de boda de tres pisos para 100 personas: 580 €", "Flores naturales, iniciales y detalles a medida"],
        media: { type: "image", src: "/media/tarta-boda-blanca.jpg", alt: "Tarta de boda blanca con texturas hechas a mano" },
        link: { label: "Consultar fecha", href: WA, external: true },
      },
      {
        label: "Celebraciones",
        title: "Un pastel que *no pasa desapercibido.*",
        text: "Cumpleaños, fiestas y bautizos con diseños personalizados: nombres, colores, temáticas y hasta una imagen comestible.",
        bullets: ["Tarta con decoración (15 personas): 120 €", "Tarta Bomba (15 personas): 150 €", "Tarta con imagen (10–12 personas): 80 €"],
        media: { type: "image", src: "/media/buttercream-1.webp", alt: "Tarta de buttercream con flores, higos y lima" },
      },
      {
        label: "Novedades",
        title: "Nuevo: sabor a *fresa y naranja.*",
        text: "Creaciones de temporada que sorprenden por fuera y por dentro.",
        media: { type: "video", src: "/media/fresa-naranja.mp4", poster: "/media/fresa-naranja-sm.jpg", alt: "Postres con forma de fresa y naranja" },
        link: { label: "Preguntar disponibilidad", href: WA, external: true },
      },
    ],
  },
  menu: {
    id: "carta",
    eyebrow: "La carta",
    title: "Tartas *de la casa.*",
    intro: "Precios publicados por PotiPa. Personalizamos sabor, mensaje y decoración: pregúntanos por WhatsApp.",
    groups: [
      { name: "Clásicas", items: [
        { name: "Red Velvet", detail: "6–8 personas · frambuesa, fresa o cereza", price: "60 €" },
        { name: "Red Velvet mini", detail: "2–4 personas · frambuesa, fresa o cereza", price: "25 €" },
        { name: "Medovik", detail: "6–8 personas", price: "60 €" },
        { name: "Carrot Cake", detail: "5–6 personas", price: "50 €" },
      ] },
      { name: "Especiales", items: [
        { name: "Pistacho y frambuesa", detail: "10–12 personas", price: "80 €" },
        { name: "Ferrero Rocher", detail: "10–12 personas · avellana", price: "80 €" },
        { name: "Tiramisú", detail: "5–6 personas", price: "50–60 €" },
        { name: "Tiramisú grande", detail: "10–12 personas", price: "80 €" },
      ] },
      { name: "Personalizadas", items: [
        { name: "Tarta con imagen", detail: "10–12 personas", price: "80 €" },
        { name: "Tarta con decoración", detail: "15 personas", price: "120 €" },
        { name: "Tarta Bomba", detail: "15 personas", price: "150 €" },
      ] },
      { name: "Bodas", items: [
        { name: "Tarta de boda", detail: "50 personas", price: "325 €" },
        { name: "Tarta de boda de tres pisos", detail: "100 personas", price: "580 €" },
      ] },
    ],
    note: "Encargos por WhatsApp o teléfono: 664 33 79 99.",
  },
  gallery: {
    id: "galeria",
    eyebrow: "Galería",
    title: "Enjoy *sweet moments.*",
    items: [
      { type: "image", src: "/media/carta-fresas.jpg", alt: "Tarta de nata con fresas y cupcakes" },
      { type: "image", src: "/media/carta-boda-100.jpg", alt: "Tarta de boda de tres pisos" },
      { type: "image", src: "/media/buttercream-2.webp", alt: "Detalle de tarta de buttercream con flores" },
      { type: "image", src: "/media/carta-olivia.jpg", alt: "Tarta personalizada de primer cumpleaños" },
      { type: "image", src: "/media/carta-pistacho.jpg", alt: "Tarta de pistacho y frambuesa" },
      { type: "image", src: "/media/tarta-verde.jpg", alt: "Tarta verde con decoración de buttercream" },
      { type: "image", src: "/media/carta-corona.jpg", alt: "Tarta de cumpleaños con corona" },
      { type: "image", src: "/media/buttercream-3.webp", alt: "Tarta con fruta fresca y flores" },
      { type: "image", src: "/media/carta-ferrero.jpg", alt: "Tarta Ferrero Rocher" },
      { type: "image", src: "/media/carta-tiramisu-grande.jpg", alt: "Tiramisú grande" },
    ],
  },
  reels: {
    eyebrow: "Entre bastidores",
    title: "El obrador *en movimiento.*",
    items: [
      { type: "video", src: "/media/tarta-orquideas.mp4", poster: "/media/tarta-orquideas-sm.jpg", alt: "Cascada de orquídeas" },
      { type: "video", src: "/media/mesa-dulce.mp4", poster: "/media/mesa-dulce-sm.jpg", alt: "Mesa dulce de celebración" },
      { type: "video", src: "/media/tartas-color.mp4", poster: "/media/tartas-color-sm.jpg", alt: "Tartas de colores" },
      { type: "video", src: "/media/obrador.mp4", poster: "/media/obrador-sm.jpg", alt: "Un día en el obrador" },
    ],
  },
  faq: {
    eyebrow: "Encargos",
    title: "Cómo *encargar.*",
    items: [
      { q: "¿Cómo hago un encargo?", a: "Escríbenos por WhatsApp o llámanos al 664 33 79 99. Cuéntanos la fecha, el número de personas, el sabor y la idea de decoración." },
      { q: "¿Para cuántas personas hacéis tartas?", a: "Desde tartas pequeñas para 2–4 personas hasta tartas de boda de tres pisos para 100 personas." },
      { q: "¿Se pueden personalizar?", a: "Sí: mensajes, nombres, colores, temáticas, flores naturales o una imagen comestible." },
      { q: "¿Con qué ingredientes trabajáis?", a: "Elaboramos nuestras tartas de forma artesanal y con ingredientes naturales." },
    ],
  },
  contact: {
    id: "encargar",
    eyebrow: "Encargar",
    title: "Te esperamos *en Blanes.*",
    address: ["Rambla de Joaquim Ruyra, 3", "17300 Blanes (Girona)"],
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rambla+de+Joaquim+Ruyra+3+17300+Blanes",
    mapEmbed: "https://www.google.com/maps?q=Rambla+de+Joaquim+Ruyra+3,+17300+Blanes&z=17&output=embed",
    phone: { label: "664 33 79 99", href: "tel:+34664337999" },
    whatsapp: { label: "WhatsApp 664 33 79 99", href: WA },
    socials: [
      { label: "Instagram de PotiPa", href: "https://www.instagram.com/potipa.blanes/", icon: "instagram" },
      { label: "Facebook de PotiPa", href: "https://www.facebook.com/potipablanes/", icon: "facebook" },
    ],
  },
  finale: {
    title: "¿Celebramos *juntos?*",
    text: "Cuéntanos tu idea y la convertimos en una tarta que se recordará.",
    cta: { label: "Encargar por WhatsApp", href: WA, external: true },
    media: { type: "image", src: "/media/buttercream-4.webp", alt: "" },
  },
  floating: { label: "Encargar", href: WA, external: true, icon: "whatsapp" },
  footer: { line: "© 2026 PotiPa · La pastelería · Blanes", credit: "Diseño web por DURDUC" },
};
