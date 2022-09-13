export interface IIconsText {
  href: string;
  icon: JSX.Element;
}
export interface ILinks {
  label: string;
  href: string;
}

export interface ICompetence {
  category: "Web" | "API & Database" | "Tools & other";
  label: string;
  logo: string;
  width: number;
  height: number;
}
