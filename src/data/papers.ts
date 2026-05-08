export type Paper = {
  title: string;
  authors: string;
  note?: string;
  url?: string;
  slidesUrl?: string;
};

export const workingPapers: Paper[] = [
  {
    title: "Trade Restrictiveness Indices with Discriminatory Tariffs",
    authors: "with James Lake",
  },
  {
    title:
      "A Mean-Field Game of Mayoral Endorsements: Theory and Evidence from Brazil and France",
    authors: "with Matt Van Essen and Luiz Lima",
    note: "2024 J. Fred and Wilma Holly Award (best 2nd-year paper)",
    url: "/files/Mayoral_Endorsements_Presidential.pdf",
  },
  {
    title:
      "Sustainable Aviation Fuel Production from Forest Residues with Ash Content: A Case Study of Nashville Airport",
    authors: "with T. Yu et al.",
  },
  {
    title:
      "Welfare Analysis of a Forest-Residue Sustainable Aviation Fuel Supply Chain under Endogenous Demand and Price Uncertainty",
    authors: "with T. Edward Yu",
    url: "/files/Welfare_Forest_Residue_SAF.pdf",
    slidesUrl: "/files/Welfare_Forest_Residue_SAF_slides.pdf",
  },
];

export const workInProgress: Paper[] = [
  {
    title:
      "Cooperative Multilateral Tariff Negotiations: A Quantitative Analysis Using Shapley Value",
    authors: "with Georg Schaur",
  },
];
