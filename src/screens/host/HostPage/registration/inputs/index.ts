import { InputSize } from "components/Input/Input";

export interface IInputHost{
  size: InputSize;
  title: string;
}

export const inputs: IInputHost[] = [
  {
    size: InputSize.L,
    title: "LIBRARY NAME",
  },
  {
    size: InputSize.M,
    title: "COUNTRY",
  },
  {
    size: InputSize.M,
    title: "CITY",
  },
  {
    size: InputSize.L,
    title: "ADDRESS",
  },
  {
    size: InputSize.L,
    title: "CONTACT",
  },
  {
    size: InputSize.L,
    title: "SPECIALITY",
  },
  {
    size: InputSize.M,
    title: "HOSTING FEE",
  },
  {
    size: InputSize.M,
    title: "OWNER FEE",
  },
];
