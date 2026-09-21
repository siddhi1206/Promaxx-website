export type ProductGroup = 'Wheels' | 'Castors';

export type ProductTag =
'Wheels' |
'Fixed' |
'Swivel' |
'Braked' |
'Heavy Duty' |
'Twin';

/**
 * Only populate fields that are VERIFIED. Empty strings are treated by the UI
 * as "Detailed specifications available on request." — nothing is invented.
 * When the full catalogue arrives, extend `specifications` freely.
 */
export interface Product {
  id: string;
  name: string;
  group: ProductGroup;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  material: string;
  diameter: string;
  loadCapacity: string;
  bracketType: string;
  applications: string[];
  specifications: Record<string, string>;
  tags: ProductTag[];
}