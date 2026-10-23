// Four site variants sharing one data set. Each variant = one academic/industry profile
// (see job-search-os/academic/materials/README.md). The trade variant lives at "/";
// the others live under their basePath. Variants do NOT link to each other on purpose.

export type VariantKey = "trade" | "environment" | "china" | "industry";

export type Variant = {
  key: VariantKey;
  basePath: string;            // "" for root, "/environment" etc.
  displayName: string;         // header brand
  title: string;               // one-line title under the photo
  fields: string;              // research interests line
  bio: string;                 // home-page paragraph
  cvFile: string;              // PDF in /public/files
  cvLabel: string;             // "CV" or "Resume"
  paperOrder: string[];        // working-paper ids in display order
  pubOrder: string[];          // publication ids in display order
  presentationOrder: "tradeFirst" | "agFirst";
  showJmpAbstract: boolean;
  showMetrics: boolean;        // citation counts / journal tiers
  showChineseName: boolean;
  navLabels?: Partial<Record<"cv", string>>;
};

const trade: Variant = {
  key: "trade",
  basePath: "",
  displayName: "Pengzhen Li",
  title: "Ph.D. Candidate in Economics",
  fields: "International Trade · Trade Policy · Environmental & Energy Economics · Applied Econometrics",
  bio:
    "I am a Ph.D. candidate in Economics at the University of Tennessee, Knoxville, on the 2026–27 job market. I am an international trade economist studying how trade policy shapes what firms sell and how to measure the restrictiveness of trade policy. My job market paper, “Market Access and the Quality of Chinese Exports,” finds that after the United States granted China permanent normal trade relations in 2002, the quality of products that Chinese firms kept selling in the US fell, contrary to the expected upgrading; a model in which better access lets sellers reach buyers who value quality less explains the decline. My second dissertation chapter, with James Lake, builds a trade-restrictiveness index for tariffs that discriminate across exporters, and my third, with Matt Van Essen and Luiz Lima, estimates a large game of how candidates choose party lists in Brazilian elections. I have four peer-reviewed publications in energy, agricultural, and environmental economics. In 2026 I received the Department of Economics’ Charles B. Garrison Award for Excellence in Teaching, given for the best teaching by a Ph.D. student.",
  cvFile: "/files/Pengzhen_Li_CV.pdf",
  cvLabel: "CV",
  paperOrder: ["jmp", "tri", "endorse"],  // trade site: dissertation chapters only (2026-10-01)
  pubOrder: ["bb", "trr", "jaaea", "tfsc"],
  presentationOrder: "tradeFirst",
  showJmpAbstract: true,
  showMetrics: false,
  showChineseName: false,
};

const environment: Variant = {
  key: "environment",
  basePath: "/environment",
  displayName: "Pengzhen Li",
  title: "Ph.D. Candidate in Economics",
  fields: "Environmental & Energy Economics · Agricultural & Resource Economics · Applied Econometrics · International Trade",
  bio:
    "I am a Ph.D. candidate in Economics at the University of Tennessee, Knoxville, on the 2026–27 job market. I am an applied economist working on environmental, energy, and resource questions. My published work examines the relationship between green-technology innovation and CO₂ emissions (Technological Forecasting and Social Change, 2019; 1,000+ citations), how sustainable-aviation-fuel supply chains should be designed (Biomass and Bioenergy, 2026; Transportation Research Record, 2024), and how processing capacity affects beef price spreads (JAAEA, 2023). My job market paper, “Market Access and the Quality of Chinese Exports,” finds that the quality of products Chinese firms kept selling in the US fell after the United States removed tariff uncertainty in 2002, and a second dissertation chapter builds a trade-restrictiveness index for tariffs that discriminate across exporters. In 2026 I received the Department of Economics’ Charles B. Garrison Award for Excellence in Teaching, given for the best teaching by a Ph.D. student.",
  cvFile: "/files/Pengzhen_Li_CV_Environment.pdf",
  cvLabel: "CV",
  paperOrder: ["jmp", "tri", "safwelfare", "safrisk", "pork", "endorse", "shapley"],
  pubOrder: ["tfsc", "bb", "trr", "jaaea"],
  presentationOrder: "agFirst",
  showJmpAbstract: true,
  showMetrics: true,
  showChineseName: false,
};

const china: Variant = {
  key: "china",
  basePath: "/china",
  displayName: "Pengzhen Li 李鹏振",
  title: "Ph.D. Candidate in Economics",
  fields: "International Trade · Environmental & Energy Economics · Applied Econometrics",
  bio:
    "I am a Ph.D. candidate in Economics at the University of Tennessee, Knoxville (B.A. Tongji University; M.A. Shandong University), on the 2026–27 job market. My research lies at the intersection of international trade and environmental economics, with a focus on China. My job market paper, “Market Access and the Quality of Chinese Exports,” uses the universe of Chinese customs records (2000–2014) to show that after the United States removed tariff uncertainty for Chinese exporters in 2002, the quality of products that Chinese firms kept selling in the US fell. A second dissertation chapter builds a trade-restrictiveness index for tariffs that discriminate across exporters and computes it for 123 importers, China among them, over 2000–2020. My master’s thesis on green-technology innovation and CO₂ emissions (Technological Forecasting and Social Change, 2019) has been cited more than 1,000 times, and I have four SSCI/SCI publications. In 2026 I received the Department of Economics’ Charles B. Garrison Award for Excellence in Teaching, given for the best teaching by a Ph.D. student.",
  cvFile: "/files/Pengzhen_Li_CV_China.pdf",
  cvLabel: "CV",
  paperOrder: ["jmp", "tri", "endorse", "shapley", "safwelfare", "safrisk", "pork"],
  pubOrder: ["tfsc", "bb", "trr", "jaaea"],
  presentationOrder: "tradeFirst",
  showJmpAbstract: true,
  showMetrics: true,
  showChineseName: true,
};

const industry: Variant = {
  key: "industry",
  basePath: "/industry",
  displayName: "Pengzhen Li",
  title: "Economics Ph.D. Candidate · Applied Econometrics & Causal Inference",
  fields: "Causal inference · Panel & time-series econometrics · Optimization · Machine learning · Stata / R / Python / SQL / GAMS",
  bio:
    "Final-year Economics Ph.D. candidate at the University of Tennessee (expected May 2027) specializing in applied econometrics, causal inference, and optimization. Four peer-reviewed publications (one with 1,000+ citations), six working papers including a job market paper on export quality and market access built on the universe of Chinese customs records, and a 2024 Holly Award. I build reproducible analytics in Stata, R, Python, SQL, and GAMS and turn large administrative, trade, and production datasets into decisions — from siting a sustainable-aviation-fuel supply chain across the Southeast US to tracing how Chinese exporters responded to a US policy change, firm by firm and product by product. Authorized to work in the U.S. without sponsorship.",
  cvFile: "/files/Pengzhen_Li_Resume.pdf",
  cvLabel: "Resume",
  paperOrder: ["jmp", "tri", "endorse", "shapley", "safwelfare", "safrisk", "pork"],
  pubOrder: ["bb", "trr", "jaaea", "tfsc"],
  presentationOrder: "tradeFirst",
  showJmpAbstract: false,
  showMetrics: true,
  showChineseName: false,
  navLabels: { cv: "Resume" },
};

export const variants: Record<VariantKey, Variant> = { trade, environment, china, industry };
export const subVariants: VariantKey[] = ["environment", "china", "industry"];
export const href = (v: Variant, path: string) => `${v.basePath}${path === "/" ? "/" : path}`;
