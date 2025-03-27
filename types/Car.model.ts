export type CarModelResponse = {
  id: number;
  name: string;
  price: number;
  image: string;
  seats: number;
  brand: string;
  miles: string;
  features: string;
  description: string;
}

export type CarModel = {
  id: number;
  name: string;
  price: number;
  image: string;
  seats: number;
  brand: string;
  miles: string;
  features: string[];
  description: string;
}