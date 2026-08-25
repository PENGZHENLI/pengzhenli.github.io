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
  researchIntro: string;       // paragraph at top of Research page
  futureAgenda: string[];      // bullets on Research page
  navLabels?: Partial<Record<"cv" | "research", string>>;
};

const trade: Variant = {
  key: "trade",
  basePath: "",
  displayName: "Pengzhen Li",
  title: "Ph.D. Candidate in Economics",
  fields: "International Trade · Trade Policy · Applied Econometrics · Political Economy",
  bio:
    "I am a Ph.D. candidate in Economics at the University of Tennessee, Knoxville, on the 2026–27 job market. I study international trade policy in a world where tariffs are no longer applied on a most-favored-nation basis. My job market paper, with James Lake, extends trade-restrictiveness indices to discriminatory tariffs and decomposes the welfare cost of a tariff regime into a level and a discrimination component. A second trade paper, with Georg Schaur, models multilateral tariff negotiations as a cooperative game. I also work on political economy with mean-field-game tools, and I have four peer-reviewed publications in applied energy, agricultural, and environmental economics.",
  cvFile: "/files/Pengzhen_Li_CV.pdf",
  cvLabel: "CV",
  paperOrder: ["jmp", "shapley", "endorse", "safwelfare", "safstoch", "safnash", "pork"],
  pubOrder: ["bb", "trr", "jaaea", "tfsc"],
  presentationOrder: "tradeFirst",
  showJmpAbstract: true,
  showMetrics: false,
  showChineseName: false,
  researchIntro:
    "My research asks how trade policy works when the multilateral, most-favored-nation world that most of our tools were built for no longer describes the trading system. Two threads organize the work: new measurement tools — trade-restrictiveness indices that remain welfare-interpretable under discriminatory tariffs — and cooperative-game models of multilateral tariff bargaining. A third, methodologically related thread applies mean-field-game tools to political economy.",
  futureAgenda: [
    "A quantitative theory of discriminatory trade policy: firm-level and GVC extensions of the indices; equilibrium formation of preferential agreements; carbon border adjustments as discriminatory tariffs.",
    "Cooperative bargaining over trade and related policy: the Shapley framework as a scenario tool for RCEP/CPTPP-type agreements, extended to climate agreements and regional blocs.",
    "Mean-field-game political economy: campaign contributions, lobbying, and primary-election timing.",
  ],
};

const environment: Variant = {
  key: "environment",
  basePath: "/environment",
  displayName: "Pengzhen Li",
  title: "Ph.D. Candidate in Economics",
  fields: "Environmental & Energy Economics · Agricultural & Resource Economics · Applied Econometrics · International Trade",
  bio:
    "I am a Ph.D. candidate in Economics at the University of Tennessee, Knoxville, on the 2026–27 job market. I am an applied economist working on environmental, energy, and resource questions. My published work asks whether green-technology innovation actually lowers CO₂ emissions (Technological Forecasting and Social Change, 2019; 950+ citations), how sustainable-aviation-fuel supply chains should be sited and financed (Biomass and Bioenergy, 2026; Transportation Research Record, 2024), and how market power shapes agricultural prices (JAAEA, 2023). My job market paper builds trade-restrictiveness indices for discriminatory tariffs — a tool I am now applying to carbon border adjustments and green-goods tariffs.",
  cvFile: "/files/Pengzhen_Li_CV_Environment.pdf",
  cvLabel: "CV",
  paperOrder: ["jmp", "safwelfare", "safstoch", "safnash", "pork", "endorse", "shapley"],
  pubOrder: ["tfsc", "bb", "trr", "jaaea"],
  presentationOrder: "agFirst",
  showJmpAbstract: true,
  showMetrics: true,
  showChineseName: false,
  researchIntro:
    "I work on environmental, energy, and resource questions with applied econometric and optimization methods. Three years as a research assistant on USDA NIFA and FAA ASCENT projects produced the economic models for a forest-residue-to-SAF supply chain in the Southeast US; my most cited paper studies green innovation and CO₂ emissions with panel-threshold models. My dissertation builds trade-restrictiveness indices for a world of discriminatory tariffs — a measurement problem that has become an environmental one now that carbon border adjustments and tariffs on solar panels, EVs, and batteries are among the largest discriminatory trade policies in force.",
  futureAgenda: [
    "Trade policy as environmental policy: apply the discriminatory-tariff indices to carbon border adjustments and green-goods tariffs; quantify restrictiveness, incidence, and effects on decarbonization.",
    "Decarbonizing hard-to-abate transport: SAF policy design — blending mandates, tax credits, feedstock competition — with the Yu group and FAA ASCENT.",
    "Innovation and emissions: firm-level patent and emissions data with credible identification; diffusion of green technology through trade.",
    "Coalitions in climate and trade agreements via the cooperative-game framework.",
  ],
};

const china: Variant = {
  key: "china",
  basePath: "/china",
  displayName: "Pengzhen Li 李鹏振",
  title: "Ph.D. Candidate in Economics",
  fields: "International Trade · Environmental & Energy Economics · Applied Econometrics · Political Economy",
  bio:
    "I am a Ph.D. candidate in Economics at the University of Tennessee, Knoxville (B.A. Tongji University; M.A. Shandong University), on the 2026–27 job market. My research lies at the intersection of international trade and environmental economics, with a focus on China. My job market paper, with James Lake, builds trade-restrictiveness indices for discriminatory tariffs and applies them to the US–China tariff war of 2018–2024. My paper on green-technology innovation and CO₂ emissions (Technological Forecasting and Social Change, 2019) has been cited more than 950 times. I have four SSCI/SCI publications and a research agenda on the trade–environment nexus: carbon border adjustments, green-goods tariffs, and how tariff shocks affect green innovation at the firm level.",
  cvFile: "/files/Pengzhen_Li_CV_China.pdf",
  cvLabel: "CV",
  paperOrder: ["jmp", "shapley", "endorse", "safwelfare", "safstoch", "safnash", "pork"],
  pubOrder: ["tfsc", "bb", "trr", "jaaea"],
  presentationOrder: "tradeFirst",
  showJmpAbstract: true,
  showMetrics: true,
  showChineseName: true,
  researchIntro:
    "On the trade side, my job market paper develops trade-restrictiveness indices for a world of discriminatory tariffs and applies them to the US–China tariff war, the largest such episode on record. On the environmental side, my most cited work asks whether green-technology innovation actually reduces CO₂ emissions. The two sides meet in my research agenda: carbon border adjustments and tariffs on solar panels, batteries, and EVs are discriminatory trade policies aimed squarely at Chinese exports, and the tools I have built measure exactly how restrictive they are and who bears their cost.",
  futureAgenda: [
    "Measuring environmental trade policy: the EU CBAM and US/EU tariffs on Chinese solar, battery, and EV exports — restrictiveness, discrimination, incidence on Chinese exporters.",
    "Trade, green innovation, and emissions: Chinese firm-level customs, patent, and emissions data.",
    "Coalitions in trade and climate agreements: RCEP/CPTPP configurations and climate clubs via the Shapley framework.",
    "Decarbonizing transport: extending the SAF work to aviation-fuel policy in Asia.",
  ],
};

const industry: Variant = {
  key: "industry",
  basePath: "/industry",
  displayName: "Pengzhen Li",
  title: "Economics Ph.D. Candidate · Applied Econometrics & Causal Inference",
  fields: "Causal inference · Panel & time-series econometrics · Optimization · Machine learning · Stata / R / Python / SQL / GAMS",
  bio:
    "Final-year Economics Ph.D. candidate at the University of Tennessee (expected May 2027) specializing in applied econometrics, causal inference, and optimization. Four peer-reviewed publications (one with 950+ citations), six working papers including a job market paper on trade restrictiveness under discriminatory tariffs, and a 2024 Holly Award. I build reproducible analytics in Stata, R, Python, SQL, and GAMS and turn large administrative, trade, and production datasets into decisions — from siting a sustainable-aviation-fuel supply chain across the Southeast US to measuring how much of a trade war's cost comes from discrimination. Authorized to work in the U.S. without sponsorship.",
  cvFile: "/files/Pengzhen_Li_Resume.pdf",
  cvLabel: "Resume",
  paperOrder: ["jmp", "shapley", "endorse", "safwelfare", "safstoch", "safnash", "pork"],
  pubOrder: ["bb", "trr", "jaaea", "tfsc"],
  presentationOrder: "tradeFirst",
  showJmpAbstract: false,
  showMetrics: true,
  showChineseName: false,
  researchIntro:
    "My work pairs identification with tools that scale: difference-in-differences, event studies, IV, synthetic control, and GMM on large panels; mixed-integer and stochastic programming for supply-chain design; regional impact analysis (IMPLAN) and efficiency analysis (DEA); supervised and unsupervised machine learning, including text-as-data. Every project below ended in a deliverable — a published paper, a calibrated model, or a decision tool for a federal sponsor.",
  futureAgenda: [
    "Trade-policy measurement: a WITS/Comtrade pipeline that computes welfare-based restrictiveness indices and a level/discrimination decomposition for any tariff regime.",
    "Scenario analysis: cooperative-game (Shapley) allocation of gains from coordinated policy, calibrated to WTO bilateral flows.",
    "Supply-chain optimization under uncertainty: GAMS/EMP models with feedstock-quality and price risk, delivered to USDA and FAA sponsors.",
  ],
  navLabels: { cv: "Resume", research: "Experience" },
};

export const variants: Record<VariantKey, Variant> = { trade, environment, china, industry };
export const subVariants: VariantKey[] = ["environment", "china", "industry"];
export const href = (v: Variant, path: string) => `${v.basePath}${path === "/" ? "/" : path}`;
