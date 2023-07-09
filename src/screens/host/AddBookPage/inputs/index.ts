import { InputSize } from "components/Input/Input";

export interface IInputBook {
  size: InputSize;
  title: string;
}

export const inputs: IInputBook[] = [
  {
    size: InputSize.L,
    title: "TITLE",
  },
  {
    size: InputSize.L,
    title: "AUTHER'S SURNAME",
  },
  {
    size: InputSize.L,
    title: "AUTHER'S NAME",
  },
  {
    size: InputSize.M,
    title: "PUBLISHING YEAR",
  },
  {
    size: InputSize.M,
    title: "ISBN",
  },
  {
    size: InputSize.L,
    title: "WALLET ADDRESS",
  },
  {
    size: InputSize.M,
    title: "TERM",
  },
  {
    size: InputSize.M,
    title: "PRICE",
  },
];
