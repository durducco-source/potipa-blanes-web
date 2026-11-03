import type { Media, SiteContent } from "./types";

// Contenido verificado en Instagram @potipa.blanes (textos, carteles con precios, fotos y vídeos)
// y en su ficha de Google Maps (dirección). No se ha inventado información.
const WA = "https://wa.me/34664337999?text=" + encodeURIComponent("Hola PotiPa, me gustaría encargar una tarta.");
const URL = "https://durducco-source.github.io/potipa-blanes-web/";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=Rambla+de+Joaquim+Ruyra+3+17300+Blanes";

const v = (name: string, alt: string): Media => ({ type: "video", src: `/media/${name}.mp4`, poster: `/media/${name}-sm.jpg`, alt });
const im = (name: string, alt: string): Media => ({ src: `/media/${name}.jpg`, sm: `/media/${name}-sm.jpg`, alt });
const wp = (name: string, alt: string): Media => ({ src: `/media/${name}.webp`, alt });

const encargo = { label: "Encargar por WhatsApp", href: WA, external: true };

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
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "PotiPa · La pastelería",
    url: URL,
    telephone: "+34664337999",
    address: { "@type": "PostalAddress", streetAddress: "Rambla de Joaquim Ruyra, 3", addressLocality: "Blanes", postalCode: "17300", addressRegion: "Girona", addressCountry: "ES" },
    sameAs: ["https://www.instagram.com/potipa.blanes/", "https://www.facebook.com/potipablanes/"],
  },
  primary: { label: "Encargar", href: WA, external: true, icon: "whatsapp" },
  phone: "+34664337999",

  scenes: [
    {
      kind: "arrival", id: "inicio", n: "00", label: "Inicio",
      a: v("tarta-orquideas", "Tarta blanca con cascada de orquídeas naturales"),
      b: v("obrador", "Tartas preparándose en el obrador de PotiPa"),
      kicker: "Pastelería artesanal · Blanes", title: "PotiPá", sub: "Enjoy sweet moments", enter: "Creamos emociones",
    },
    {
      kind: "reel", id: "obrador", n: "01", label: "Obrador",
      videos: [v("potipa-tartas", "La pastelera de PotiPa con una tarta de boda"), v("fresa-naranja", "Postres con forma de fresa y naranja"), v("tartas-color", "Tartas de colores")],
      title: "Hecho a mano, en Blanes", sub: "Tartas artesanales con ingredientes naturales, para bodas, cumpleaños, fiestas y bautizos.",
    },
    {
      kind: "pullback", id: "bodas", n: "02", label: "Bodas",
      a: im("tarta-boda-blanca", "Tarta de boda blanca con texturas hechas a mano"), origin: "50% 35%",
      b: v("temporada-bodas", "Banquete de boda al aire libre"),
      title: "Tartas de boda", sub: "50 personas, 325 € · tres pisos para 100 personas, 580 €.",
      cta: { label: "Consultar fecha", href: WA, external: true },
    },
    {
      kind: "door", id: "buttercream", n: "03", label: "Buttercream",
      door: im("tarta-verde", "Tarta verde con decoración de buttercream"),
      track: [wp("buttercream-1", "Flores, higos y lima"), wp("buttercream-2", "Detalle de buttercream con flores"), wp("buttercream-3", "Fruta fresca y flores"), wp("buttercream-4", "Acabados hechos a mano")],
      title: "Un pastel que no pasa desapercibido", sub: "Buttercream, flores naturales, fruta fresca y detalles personalizados.",
    },
    {
      kind: "list", id: "carta", n: "04", label: "Carta",
      back: v("mesa-dulce", "Mesa dulce de celebración"),
      title: "Tartas *de la casa*",
      groups: [
        { name: "Clásicas", items: [
          { name: "Red Velvet", detail: "6–8 personas · frambuesa, fresa o cereza", price: "60 €" },
          { name: "Red Velvet mini", detail: "2–4 personas", price: "25 €" },
          { name: "Medovik", detail: "6–8 personas", price: "60 €" },
          { name: "Carrot Cake", detail: "5–6 personas", price: "50 €" },
        ] },
        { name: "Especiales", items: [
          { name: "Pistacho y frambuesa", detail: "10–12 personas", price: "80 €" },
          { name: "Ferrero Rocher", detail: "10–12 personas", price: "80 €" },
          { name: "Tiramisú", detail: "5–6 personas", price: "50–60 €" },
          { name: "Tiramisú grande", detail: "10–12 personas", price: "80 €" },
        ] },
        { name: "Personalizadas", items: [
          { name: "Tarta con imagen", detail: "10–12 personas", price: "80 €" },
          { name: "Tarta con decoración", detail: "15 personas", price: "120 €" },
          { name: "Tarta Bomba", detail: "15 personas", price: "150 €" },
        ] },
      ],
      note: "Precios publicados por PotiPa. Personalizamos sabor, mensaje y decoración.",
      cta: encargo,
    },
    {
      kind: "depth", id: "celebraciones", n: "05", label: "Fiestas",
      back: im("carta-fresas", "Tarta de nata con fresas y cupcakes"),
      cards: [im("carta-olivia", "Tarta personalizada de primer cumpleaños"), im("carta-corona", "Tarta de cumpleaños con corona")],
      title: "Cumpleaños, fiestas y bautizos", sub: "Nombres, colores, temáticas o una imagen comestible.",
    },
    {
      kind: "strip", id: "galeria", n: "06", label: "Galería",
      items: [
        im("carta-red-velvet", "Red Velvet"), im("carta-pistacho", "Pistacho y frambuesa"), im("carta-ferrero", "Ferrero Rocher"),
        im("carta-medovik", "Medovik"), im("carta-tiramisu-grande", "Tiramisú grande"), im("carta-boda-100", "Tarta de boda de tres pisos"),
        im("carta-bomba", "Tarta Bomba"), im("carta-imagen", "Tarta con imagen"),
      ],
    },
    {
      kind: "finale", id: "encargar", n: "07", label: "Encargar",
      a: wp("buttercream-4", "Tarta de buttercream de PotiPa"),
      title: "¿Celebramos *juntos?*",
      ctas: [encargo, { label: "Llamar", href: "tel:+34664337999" }, { label: "Cómo llegar", href: MAPS, external: true }],
      info: [
        { label: "Dirección", value: "Rambla de Joaquim Ruyra, 3 · Blanes", href: MAPS },
        { label: "Encargos", value: "664 33 79 99", href: "tel:+34664337999" },
      ],
    },
  ],

  footer: {
    address: { label: "Rambla de Joaquim Ruyra, 3 · 17300 Blanes", href: MAPS },
    contacts: [{ label: "WhatsApp 664 33 79 99", href: WA }, { label: "Llamar 664 33 79 99", href: "tel:+34664337999" }],
    socials: [{ label: "Instagram", href: "https://www.instagram.com/potipa.blanes/" }, { label: "Facebook", href: "https://www.facebook.com/potipablanes/" }],
    sources: "Fotos, vídeos y precios: Instagram @potipa.blanes",
    line: "© 2026 PotiPa · La pastelería · Blanes",
  },
};
