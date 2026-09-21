import type { Product, ProductTag } from '../types/product';
import { images } from './site';

/**
 * PRODUCT CATALOGUE
 * Add or edit products here only — no other file needs to change.
 * Leave a field as '' when the specification has not been verified yet.
 */
export const products: Product[] = [
{
  id: 'uhmw-pe-wheel',
  name: 'UHMW-PE Wheel',
  group: 'Wheels',
  category: 'Wheel',
  image: images.wheelUhmw,
  imageAlt: 'Promaxx UHMW-PE industrial wheel',
  description:
  'Ultra high molecular weight polyethylene wheel for smooth rolling on industrial floors.',
  material: 'UHMW-PE',
  diameter: '',
  loadCapacity: '',
  bracketType: '',
  applications: ['Factories', 'Warehouses', 'Industrial trolleys'],
  specifications: {},
  tags: ['Wheels']
},
{
  id: 'ci-wheel',
  name: 'CI Wheel',
  group: 'Wheels',
  category: 'Wheel',
  image: images.wheelCi,
  imageAlt: 'Promaxx cast iron industrial wheel',
  description:
  'Cast iron wheel built for high load applications and demanding operating conditions.',
  material: 'Cast Iron',
  diameter: '',
  loadCapacity: '',
  bracketType: '',
  applications: ['Factories', 'Material handling equipment'],
  specifications: {},
  tags: ['Wheels']
},
{
  id: 'pu-ci-wheel',
  name: 'PU-CI Wheel',
  group: 'Wheels',
  category: 'Wheel',
  image: images.wheelPuCi,
  imageAlt: 'Promaxx polyurethane on cast iron industrial wheel',
  description:
  'Polyurethane tread bonded to a cast iron core, combining load capacity with quieter movement.',
  material: 'Polyurethane on Cast Iron',
  diameter: '',
  loadCapacity: '',
  bracketType: '',
  applications: ['Warehouses', 'Storage facilities', 'Industrial trolleys'],
  specifications: {},
  tags: ['Wheels']
},
{
  id: 'fixed-castor',
  name: 'Fixed Castor',
  group: 'Castors',
  category: 'Castor',
  image: images.castorFixed,
  imageAlt: 'Promaxx fixed industrial castor with bolt-on top plate',
  description:
  'Fixed bracket castor for straight-line travel and stable directional control.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: 'Fixed',
  applications: ['Industrial trolleys', 'Material handling equipment'],
  specifications: {},
  tags: ['Fixed']
},
{
  id: 'swivel-castor',
  name: 'Swivel Castor',
  group: 'Castors',
  category: 'Castor',
  image: images.castorSwivel,
  imageAlt: 'Promaxx swivel industrial castor with ball race bracket',
  description:
  'Swivel bracket castor for manoeuvrability in confined working areas.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: 'Swivel',
  applications: ['Warehouses', 'Industrial trolleys', 'Factories'],
  specifications: {},
  tags: ['Swivel']
},
{
  id: 'wheel-brake-castor',
  name: 'Wheel Brake Castor',
  group: 'Castors',
  category: 'Castor',
  image: images.castorBrake,
  imageAlt: 'Promaxx industrial castor with wheel brake mechanism',
  description:
  'Castor with a wheel brake for holding equipment securely in position.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: 'Swivel',
  applications: ['Storage facilities', 'Material handling equipment'],
  specifications: {},
  tags: ['Braked', 'Swivel']
},
{
  id: 'heavy-duty-fixed-castor',
  name: 'Heavy-Duty Fixed Castor',
  group: 'Castors',
  category: 'Heavy-Duty Castor',
  image: images.castorFixed,
  imageAlt: 'Promaxx heavy-duty fixed industrial castor',
  description:
  'Reinforced fixed castor for higher load requirements in industrial environments.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: 'Fixed',
  applications: ['Factories', 'Material handling systems'],
  specifications: {},
  tags: ['Heavy Duty', 'Fixed']
},
{
  id: 'heavy-duty-swivel-castor',
  name: 'Heavy-Duty Swivel Castor',
  group: 'Castors',
  category: 'Heavy-Duty Castor',
  image: images.castorSwivel,
  imageAlt: 'Promaxx heavy-duty swivel industrial castor',
  description:
  'Reinforced swivel castor for higher loads where manoeuvrability is required.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: 'Swivel',
  applications: ['Factories', 'Warehouses', 'Industrial equipment'],
  specifications: {},
  tags: ['Heavy Duty', 'Swivel']
},
{
  id: 'hd-rivet-castor',
  name: 'HD Rivet Castor',
  group: 'Castors',
  category: 'Heavy-Duty Castor',
  image: images.castorFixed,
  imageAlt: 'Promaxx heavy-duty rivet industrial castor',
  description:
  'Riveted heavy-duty construction for compact, robust castor assemblies.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: '',
  applications: ['Industrial trolleys', 'Material handling equipment'],
  specifications: {},
  tags: ['Heavy Duty']
},
{
  id: 'twin-castor',
  name: 'Twin Castor',
  group: 'Castors',
  category: 'Castor',
  image: images.castorTwin,
  imageAlt: 'Promaxx twin wheel industrial castor',
  description:
  'Twin wheel configuration that distributes load across two wheels.',
  material: '',
  diameter: '',
  loadCapacity: '',
  bracketType: 'Swivel',
  applications: ['Storage facilities', 'Industrial equipment'],
  specifications: {},
  tags: ['Twin', 'Swivel']
}];


export const productFilters: Array<ProductTag | 'All'> = [
'All',
'Wheels',
'Fixed',
'Swivel',
'Braked',
'Heavy Duty',
'Twin'];


export function filterProducts(tag: ProductTag | 'All'): Product[] {
  if (tag === 'All') return products;
  return products.filter((product) => product.tags.includes(tag));
}

export function findProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}