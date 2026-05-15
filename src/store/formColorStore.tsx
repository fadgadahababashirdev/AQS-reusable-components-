import { create } from "zustand";
interface Colors {
  formBackgroundColor: string;
  primaryColor: string;

  textColor: string;
  cardBackground: string;
  gradientFrom: string;
  gradientTo: string;
  lockKeyHoleColor: string;
  h1: string;
  formParagraphColor: string;
  spanColor: string;
  formCardBorderColor: string;
  formLabelColor: string;
  inputIconsColor: string;
  inputBackgroundColor: string;
  shadowColor:string 
}

interface FormStoreColors {
  colors: Colors;
}

export const formColorStore = create<FormStoreColors>((set) => ({
  colors: {
    formBackgroundColor: "#f4f7fb",
    primaryColor: "#052884",

    textColor: "#ffffff",
    cardBackground: "#ffffff",
    gradientFrom: "#042379",
    gradientTo: "#0A4DCC",
    lockKeyHoleColor: "#fff",
    h1: "#071143",
    formParagraphColor: "#6a7282",
    spanColor: "#042379",
    formCardBorderColor: "#f3f4f6",
    formLabelColor: "#4a5565",
    inputIconsColor: "#99a1af",
    inputBackgroundColor: "#f5f7ff", 
    shadowColor: "rgba(191, 219, 254, 0.8)"
  },
}));
export const useFormColorStore = () => {
  return formColorStore((state) => state.colors);
};
