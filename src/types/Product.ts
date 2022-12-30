export interface Product {
  _id: string;
  name: string;
  description: string;
  type: string;
  uri: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
}
