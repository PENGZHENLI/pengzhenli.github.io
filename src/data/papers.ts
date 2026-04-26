export type Paper = {
  title: string;
  authors: string;
  note?: string;
  url?: string;
};

export const workingPapers: Paper[] = [
  {
    title: "Trade Restrictiveness Indices with Discriminatory Tariffs",
    authors: "with James Lake",
  },
  {
    title:
      "The Impact of Mayoral Endorsements on Presidential Election Outcomes",
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
      "Stochastic Optimisation of Logging Residue–based Biofuel Supply Chains Considering Feedstock Ash Content and Biofuel Price",
    authors: "with T. Yu et al.",
  },
];

export const workInProgress: Paper[] = [
  {
    title:
      "Cooperative Multilateral Tariff Negotiations: A Quantitative Analysis Using Shapley Value",
    authors: "with Georg Schaur",
  },
];
