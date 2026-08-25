export type Presentation = {
  title: string;
  venue: string;
  location: string;
  year: string;
};

const trade: Presentation = {
  title: "Trade Restrictiveness Indices with Discriminatory Tariffs",
  venue: "Midwest Economic Theory and International Trade Meetings",
  location: "Virginia Tech, Blacksburg, Virginia",
  year: "Spring 2025",
};
const wrsa: Presentation = {
  title: "Assessing the Impact of Preprocessing and Conversion Technologies on SAF Supply Chains",
  venue: "Western Regional Science Association (WRSA) Annual Meeting",
  location: "Hawaii",
  year: "2023",
};
const waea: Presentation = {
  title: "Economics of Sustainable Aviation Fuel from Forest Residues",
  venue: "Western Agricultural Economics Association (WAEA) Annual Meeting",
  location: "Santa Fe, New Mexico",
  year: "2022",
};
const saea: Presentation = {
  title: "Impact of Harvesting Schemes on Woody Biomass Supply Chains",
  venue: "Southern Agricultural Economics Association (SAEA) Annual Meeting",
  location: "New Orleans, Louisiana",
  year: "2022",
};

export const presentations: Presentation[] = [trade, wrsa, waea, saea];
export const presentationsFor = (order: "tradeFirst" | "agFirst") =>
  order === "agFirst" ? [wrsa, waea, saea, trade] : [trade, wrsa, waea, saea];
