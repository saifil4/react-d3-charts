export type TCarSpecParameters = {
  speed: number;
  fuel_efficiency: number;
  safety: number;
  comfort: number;
  price: number;
};

export type TCarSpecs = TCarSpecParameters & {
  name: string;
  speed: number;
  fuel_efficiency: number;
  safety: number;
  comfort: number;
  price: number;
};

export const carData: TCarSpecs[] = [
  {
    name: "Car A",
    speed: 40,
    fuel_efficiency: 80,
    safety: 90,
    comfort: 90,
    price: 40,
  },
  {
    name: "Car B",
    speed: 95,
    fuel_efficiency: 20,
    safety: 40,
    comfort: 50,
    price: 80,
  },
  {
    name: "Car C",
    speed: 70,
    fuel_efficiency: 60,
    safety: 70,
    comfort: 75,
    price: 70,
  },
];
