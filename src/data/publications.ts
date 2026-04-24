export type Publication = {
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  year: number;
  pages?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Spatial optimization of the sustainable aviation fuel supply chains from forest residues via fast pyrolysis/hydrotreatment considering feedstock ash content variability",
    authors: "T. Yu, P. Li, et al.",
    journal: "Biomass and Bioenergy",
    volume: "208",
    year: 2026,
    pages: "108793",
  },
  {
    title:
      "Assessing the impact of preprocessing and conversion technologies on the sustainable aviation fuel supply from forest residues in the Southeast USA",
    authors: "T. Yu, P. Li, et al.",
    journal: "Transportation Research Record",
    volume: "2678(9)",
    year: 2024,
    pages: "639–654",
  },
  {
    title:
      "Beef price spread relationship with processing capacity utilization",
    authors: "C. Martinez, P. Li, et al.",
    journal: "Journal of the Agricultural and Applied Economics Association",
    volume: "2(1)",
    year: 2023,
    pages: "133–145",
  },
  {
    title:
      "Do green technology innovations contribute to carbon dioxide emission reduction? Empirical evidence from patent data",
    authors: "K. Du, P. Li, Z. Yan",
    journal: "Technological Forecasting and Social Change",
    volume: "146",
    year: 2019,
    pages: "297–303",
  },
];
