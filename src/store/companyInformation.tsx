import { create } from "zustand";

interface CompanyInfo {
  companyName: string;
  setCompanyName: (name: string) => void;
  companyLogo: string;
  setCompanyLog: (logo: string) => void;
  companyImage: string;
  setCompanyImage: (image: string) => void;
}

interface CompanyInfoObject {
  containedInfo: CompanyInfo;
}
export const useCompanyInfo = create<CompanyInfoObject>((set) => ({
  containedInfo: {
    companyName: "",
    setCompanyName: (name) =>
      set((state) => ({
        containedInfo: {
          ...state.containedInfo,
          companyName: name,
        },
      })),
    companyLogo: "",
    setCompanyLog: (logo) =>
      set((state) => ({
        containedInfo: {
          ...state.containedInfo,
          companyLogo: logo,
        },
      })),
    companyImage: "",
    setCompanyImage: (image) =>
      set((state) => ({
        containedInfo: {
          ...state.containedInfo,
          companyImage: image,
        },
      })),
  },
}));
