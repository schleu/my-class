import Logo from "../assets/logo.webp";

export function useCompany() {
  const companyName = import.meta.env.VITE_APP_COMPANY;

  return {
    name: companyName,
    logoUrl: Logo,
  };
}
