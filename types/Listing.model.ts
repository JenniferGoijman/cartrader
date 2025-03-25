export type Listing = {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  year: number,
  city: string;
  image: string;
  seats: number;
  miles: number;
  features: string[];
  description: string;
}

export type ListingPost = {
  name: string;
  brand: string;
  model: string;
  price: number;
  year: number,
  city: string;
  image: string;
  seats: number;
  miles: number;
  features: string[];
  description: string;
  listerId: string;
}

