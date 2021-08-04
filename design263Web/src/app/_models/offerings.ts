export interface Offer {
  id: number;
  name: string;
  details: object;
}

export interface InPackageOffering {
  offeringId: number;
  offering: string;
  rate: string;
}

export interface PackageInfo {
  packageId: number;
  title: string;
  description: string;
  imgUrl: string;
  refIcon: string;
  inPackageOfferings: [];
}

export interface Package {
  id: number;
  name: string;
  packageInfo: [];
  rate: number;
}

export interface Composition {
  title: string;
  metatags: any[];
  description: string;
  heading: string;
  subheading: string;
  synopsis: string;
}

export interface TestimonialDetails {
  title: string;
  description: string;
  rating: number;
}

export interface TestimonialClientReference {
  clientId: number;
  clientName: string;
  sector: string;
  jobs: any[];
  testimonialDetails: any[];
}

export interface Testimonial {
  testimonialId: number;
  testimonialClientReference: any[];
}

export interface Offering {
  id: number;
  name: string;
  classRef: string;
  index: number;
  url: string;
  avatar: string;
  imageRef: string;
  summary: string;
  offer: string;
  packages: any[];
  composition: string;
  testimonials: any[];
  tags: any[];
}

export interface Details {
}
