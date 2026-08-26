export type Paper = {
  id: string;
  title: string;
  authors: string;
  note?: string;
  url?: string;
  slidesUrl?: string;
  abstract?: string;
  wip?: boolean;
};

// Master list. Display order per site variant is set in variants.ts (paperOrder).
export const papersById: Record<string, Paper> = {
  jmp: {
    id: "jmp",
    title: "Trade Restrictiveness Indices with Discriminatory Tariffs",
    authors: "with James Lake",
    note: "Job market paper. Presented at the Midwest Economic Theory and International Trade Meetings, Virginia Tech, 2025.",
    abstract:
      "Trade-restrictiveness indices summarize a country's tariff schedule as a single welfare-equivalent uniform tariff, but the existing indices assume most-favored-nation tariffs. Since 2018 the largest tariff changes — the US–China tariff war, retaliatory tariffs, and proliferating preferential agreements — have been discriminatory by design. We extend the trade-restrictiveness index to partner-specific tariffs while preserving its welfare interpretation and derive a closed-form decomposition into a “level” component (how much a country restricts trade) and a “discrimination” component (how unevenly it does so). Computing the indices from WITS/Comtrade data for 2017–2024, we find that the MFN-only index systematically understates trade distortions when discrimination is high, and the decomposition separates, for the first time in this framework, the welfare cost of discrimination from the cost of protection.",
  },
  endorse: {
    id: "endorse",
    title: "The Impact of Mayoral Endorsements on Presidential Election Outcomes",
    authors: "with Matt Van Essen and Luiz Lima",
    note: "2024 J. Fred and Wilma Holly Award (best second-year paper)",
    url: "/files/Mayoral_Endorsements_Presidential.pdf",
  },
  safwelfare: {
    id: "safwelfare",
    title:
      "Welfare Analysis of a Forest-Residue Sustainable Aviation Fuel Supply Chain under Endogenous Demand and Price Uncertainty",
    authors: "with T. Edward Yu",
    url: "/files/Welfare_Forest_Residue_SAF.pdf",
    slidesUrl: "/files/Welfare_Forest_Residue_SAF_slides.pdf",
  },
  safstoch: {
    id: "safstoch",
    title:
      "Stochastic Optimisation of Logging Residue–based Biofuel Supply Chains Considering Feedstock Ash Content and Biofuel Price",
    authors: "with T. Yu et al.",
  },
  safnash: {
    id: "safnash",
    title:
      "Sustainable Aviation Fuel Production from Forest Residues with Ash Content: A Case Study of Nashville Airport",
    authors: "with T. Yu et al.",
  },
  pork: {
    id: "pork",
    title: "Estimating Pork Primal Price Relationships Using a Threshold Vector Autoregressive Analysis",
    authors: "Charles Martinez, Christopher N. Boyer, T. Edward Yu, Pengzhen Li, David Anderson",
    note: "SSRN working paper 4121953 (2022)",
    url: "https://papers.ssrn.com/abstract=4121953",
  },
  shapley: {
    id: "shapley",
    title:
      "Cooperative Multilateral Tariff Negotiations: A Quantitative Analysis Using Shapley Value",
    authors: "with Georg Schaur",
    wip: true,
  },
};

export const orderedPapers = (order: string[]) => order.map((id) => papersById[id]);
