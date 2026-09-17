// Product-type categories for the catalogue page card strip.
// These are distinct from the existing CATALOGUE_CATEGORIES (Process Systems,
// Automation, Fabrication, Utilities) — they represent a product-type axis
// that cross-cuts the main categories.

export type ProductCategory = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "pumps",
    title: "Pumps",
    subtitle:
      "Centrifugal, lobe, and dosing pumps for hygienic process lines",
    image: "/images/catalogue/pumps.jpg",
  },
  {
    slug: "vfd",
    title: "VFD",
    subtitle:
      "Variable frequency drives for precision motor control and energy savings",
    image: "/images/catalogue/vfd.jpg",
  },
  {
    slug: "valves",
    title: "Valves",
    subtitle:
      "Sanitary butterfly, mixproof, and diaphragm valves for process isolation",
    image: "/images/catalogue/valves.jpg",
  },
  {
    slug: "heat-exchangers",
    title: "Heat Exchangers",
    subtitle:
      "Plate and tubular heat exchangers for pasteurisation and thermal transfer",
    image: "/images/catalogue/heat-exchangers.jpg",
  },
  {
    slug: "siemens-plc",
    title: "Siemens PLC",
    subtitle:
      "S7-1200, S7-1500 controllers, HMI panels, and TIA Portal integration",
    image: "/images/catalogue/siemens-plc.jpg",
  },
  {
    slug: "ifm-sensors",
    title: "ifm Sensors",
    subtitle:
      "Temperature, pressure, flow, and conductivity sensors for industrial processes",
    image: "/images/catalogue/ifm-sensors.jpg",
  },
];

/** Look up a product category by its URL slug. */
export function getProductCategory(
  slug: string
): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug);
}
