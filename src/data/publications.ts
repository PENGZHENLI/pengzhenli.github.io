export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  year: number;
  pages?: string;
  url?: string;
  doi?: string;
  code?: string;    // public replication repository
  metrics?: string; // shown only on variants with showMetrics
};

export const publicationsById: Record<string, Publication> = {
  bb: {
    id: "bb",
    title:
      "Spatial optimization of the sustainable aviation fuel supply chains from forest residues via fast pyrolysis/hydrotreatment considering feedstock ash content variability",
    authors: "T. Yu, P. Li, et al.",
    journal: "Biomass and Bioenergy",
    volume: "208",
    year: 2026,
    pages: "108793",
  },
  trr: {
    id: "trr",
    title:
      "Assessing the impact of preprocessing and conversion technologies on the sustainable aviation fuel supply from forest residues in the Southeast USA",
    authors: "T. Yu, P. Li, et al.",
    journal: "Transportation Research Record",
    volume: "2678(9)",
    year: 2024,
    pages: "639–654",
  },
  jaaea: {
    id: "jaaea",
    title: "Beef price spread relationship with processing capacity utilization",
    authors: "C. Martinez, P. Li, et al.",
    journal: "Journal of the Agricultural and Applied Economics Association",
    volume: "2(1)",
    year: 2023,
    pages: "133–145",
  },
  tfsc: {
    id: "tfsc",
    title:
      "Do green technology innovations contribute to carbon dioxide emission reduction? Empirical evidence from patent data",
    authors: "K. Du, P. Li, Z. Yan",
    journal: "Technological Forecasting and Social Change",
    volume: "146",
    year: 2019,
    pages: "297–303",
    doi: "https://doi.org/10.1016/j.techfore.2019.06.010",
    code: "https://github.com/PENGZHENLI/tfsc2019-replication",
    metrics: "950+ citations (Google Scholar)",
  },
};

export const orderedPublications = (order: string[]) => order.map((id) => publicationsById[id]);
export const publications = orderedPublications(["bb", "trr", "jaaea", "tfsc"]);
