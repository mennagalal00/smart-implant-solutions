export interface Product {
  id: string;
  origin: "german" | "korean" | "egyptian";
  originLabel: string;
  originCode: string;
  design: "standard" | "aggressive";
  name: string;
  subtitle: string;
  description: string;
  image: string; 
}


export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}


