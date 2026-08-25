export type Slide = { chapter: number; title: string; url: string };
export type Course = {
  code: string;
  title: string;
  term: string;
  syllabus?: string;
  textbook?: string;
  description?: string;
  slides?: Slide[];
};

// Slide decks are my own Beamer lectures (built from the course beamer/ sources); publisher slides are not posted.
export const primaryInstructor: Course[] = [
  {
    code: "ECON 351",
    title: "Monetary Economics",
    term: "Spring 2025, Spring 2026",
    syllabus: "/files/teaching/econ351/Econ_351_Syllabus_Spring2026.pdf",
    textbook: "Mishkin, The Economics of Money, Banking, and Financial Markets (13e)",
    description: "Upper-division course on money, banking, interest rates, the Federal Reserve, monetary transmission, and financial crises. Redesigned in 2026 around policy episodes (2008 crisis, post-2020 inflation, Fed balance-sheet operations) with a step-by-step walkthrough after every assessment.",
    slides: [
      { chapter: 1, title: "Why Study Money, Banking, and Financial Markets", url: "/files/teaching/econ351/ch01-why-study-money-banking-and-financial-markets.pdf" },
      { chapter: 2, title: "An Overview of the Financial System", url: "/files/teaching/econ351/ch02-an-overview-of-the-financial-system.pdf" },
      { chapter: 3, title: "What Is Money", url: "/files/teaching/econ351/ch03-what-is-money.pdf" },
      { chapter: 4, title: "The Meaning of Interest Rates", url: "/files/teaching/econ351/ch04-the-meaning-of-interest-rates.pdf" },
      { chapter: 5, title: "The Behavior of Interest Rates", url: "/files/teaching/econ351/ch05-the-behavior-of-interest-rates.pdf" },
      { chapter: 6, title: "The Risk and Term Structure of Interest Rates", url: "/files/teaching/econ351/ch06-the-risk-and-term-structure-of-interest-rates.pdf" },
      { chapter: 7, title: "The Stock Market, the Theory of Rational Expectations, and the Efficient Market Hypothesis", url: "/files/teaching/econ351/ch07-the-stock-market-the-theory-of-rational-expectations-and-the-efficient-market-hypothesis.pdf" },
      { chapter: 8, title: "An Economic Analysis of Financial Structure", url: "/files/teaching/econ351/ch08-an-economic-analysis-of-financial-structure.pdf" },
      { chapter: 9, title: "Banking and the Management of Financial Institutions", url: "/files/teaching/econ351/ch09-banking-and-the-management-of-financial-institutions.pdf" },
      { chapter: 10, title: "Economic Analysis of Financial Regulation", url: "/files/teaching/econ351/ch10-economic-analysis-of-financial-regulation.pdf" },
      { chapter: 11, title: "Banking Industry - Structure and Competition", url: "/files/teaching/econ351/ch11-banking-industry-structure-and-competition.pdf" },
      { chapter: 12, title: "Financial Crises", url: "/files/teaching/econ351/ch12-financial-crises.pdf" },
      { chapter: 13, title: "Central Banks and the Federal Reserve System", url: "/files/teaching/econ351/ch13-central-banks-and-the-federal-reserve-system.pdf" },
      { chapter: 14, title: "The Money Supply Process", url: "/files/teaching/econ351/ch14-the-money-supply-process.pdf" },
      { chapter: 15, title: "Tools of Monetary Policy", url: "/files/teaching/econ351/ch15-tools-of-monetary-policy.pdf" },
      { chapter: 16, title: "The Conduct of Monetary Policy - Strategy and Tactics", url: "/files/teaching/econ351/ch16-the-conduct-of-monetary-policy-strategy-and-tactics.pdf" },
      { chapter: 19, title: "Quantity Theory, Inflation, and the Demand for Money", url: "/files/teaching/econ351/ch19-quantity-theory-inflation-and-the-demand-for-money.pdf" },
      { chapter: 20, title: "The IS Curve", url: "/files/teaching/econ351/ch20-the-is-curve.pdf" },
      { chapter: 21, title: "The Monetary Policy and Aggregate Demand Curves", url: "/files/teaching/econ351/ch21-the-monetary-policy-and-aggregate-demand-curves.pdf" },
      { chapter: 22, title: "Aggregate Demand and Supply Analysis", url: "/files/teaching/econ351/ch22-aggregate-demand-and-supply-analysis.pdf" },
      { chapter: 23, title: "Monetary Policy Theory", url: "/files/teaching/econ351/ch23-monetary-policy-theory.pdf" },
      { chapter: 24, title: "The Role of Expectations in Monetary Policy", url: "/files/teaching/econ351/ch24-the-role-of-expectations-in-monetary-policy.pdf" },
      { chapter: 25, title: "Transmission Mechanisms of Monetary Policy", url: "/files/teaching/econ351/ch25-transmission-mechanisms-of-monetary-policy.pdf" }
    ],
  },
  {
    code: "ECON 322",
    title: "The Global Economy: Trade and Development",
    term: "Summer 2025",
    syllabus: "/files/teaching/econ322/Econ_322_Syllabus_Summer2025.pdf",
    textbook: "Todaro & Smith, Economic Development (13e)",
    description: "Development economics with a trade focus: measuring development, classic and contemporary growth theory, poverty and inequality, population, human capital, environment, policymaking, and trade strategy. Online synchronous section.",
    slides: [
      { chapter: 1, title: "Introducing Economic Development - A Global Perspective", url: "/files/teaching/econ322/ch01-introducing-economic-development-a-global-perspective.pdf" },
      { chapter: 2, title: "Comparative Economic Development", url: "/files/teaching/econ322/ch02-comparative-economic-development.pdf" },
      { chapter: 3, title: "Classic Theories of Economic Growth and Development", url: "/files/teaching/econ322/ch03-classic-theories-of-economic-growth-and-development.pdf" },
      { chapter: 4, title: "Contemporary Models of Development and Underdevelopment", url: "/files/teaching/econ322/ch04-contemporary-models-of-development-and-underdevelopment.pdf" },
      { chapter: 5, title: "Poverty, Inequality, and Development", url: "/files/teaching/econ322/ch05-poverty-inequality-and-development.pdf" },
      { chapter: 6, title: "Population Growth and Economic Development", url: "/files/teaching/econ322/ch06-population-growth-and-economic-development.pdf" },
      { chapter: 8, title: "Human Capital - Education and Health in Economic Development", url: "/files/teaching/econ322/ch08-human-capital-education-and-health-in-economic-development.pdf" },
      { chapter: 10, title: "The Environment and Development", url: "/files/teaching/econ322/ch10-the-environment-and-development.pdf" },
      { chapter: 11, title: "Development Policymaking and the Roles of Market, State, and Civil Society", url: "/files/teaching/econ322/ch11-development-policymaking-and-the-roles-of-market-state-and-civil-society.pdf" },
      { chapter: 12, title: "International Trade Theory and Development Strategy", url: "/files/teaching/econ322/ch12-international-trade-theory-and-development-strategy.pdf" }
    ],
  },
  {
    code: "ECON 313",
    title: "Intermediate Macroeconomics",
    term: "Summer 2026",
    syllabus: "/files/teaching/econ313/Econ_313_Syllabus_Summer2026.pdf",
    textbook: "Mankiw, Macroeconomics (12e)",
    description: "Accelerated five-week online section: national income, money and inflation, the open economy, unemployment, growth, IS–LM and Mundell–Fleming, aggregate supply, stabilization policy, debt, and the financial system.",
    slides: [
      { chapter: 1, title: "The Science of Macroeconomics", url: "/files/teaching/econ313/ch01-the-science-of-macroeconomics.pdf" },
      { chapter: 2, title: "The Data of Macroeconomics", url: "/files/teaching/econ313/ch02-the-data-of-macroeconomics.pdf" },
      { chapter: 3, title: "National Income - How It Is Earned", url: "/files/teaching/econ313/ch03-national-income-how-it-is-earned.pdf" },
      { chapter: 4, title: "National Income - How It Is Spent", url: "/files/teaching/econ313/ch04-national-income-how-it-is-spent.pdf" },
      { chapter: 5, title: "A First Look At the Monetary System", url: "/files/teaching/econ313/ch05-a-first-look-at-the-monetary-system.pdf" },
      { chapter: 6, title: "Inflation - Its Causes, Effects, and Social Costs", url: "/files/teaching/econ313/ch06-inflation-its-causes-effects-and-social-costs.pdf" },
      { chapter: 7, title: "The Open Economy", url: "/files/teaching/econ313/ch07-the-open-economy.pdf" },
      { chapter: 8, title: "Unemployment and the Labor Market", url: "/files/teaching/econ313/ch08-unemployment-and-the-labor-market.pdf" },
      { chapter: 9, title: "Capital Accumulation as a Source of Growth", url: "/files/teaching/econ313/ch09-capital-accumulation-as-a-source-of-growth.pdf" },
      { chapter: 10, title: "Population Growth and Technological Progress", url: "/files/teaching/econ313/ch10-population-growth-and-technological-progress.pdf" },
      { chapter: 11, title: "Growth Empirics and Policy", url: "/files/teaching/econ313/ch11-growth-empirics-and-policy.pdf" },
      { chapter: 12, title: "Introduction to Economic Fluctuations", url: "/files/teaching/econ313/ch12-introduction-to-economic-fluctuations.pdf" },
      { chapter: 13, title: "Aggregate Demand I - Building the IS-LM Model", url: "/files/teaching/econ313/ch13-aggregate-demand-i-building-the-is-lm-model.pdf" },
      { chapter: 14, title: "Aggregate Demand II - Applying the IS-LM Model", url: "/files/teaching/econ313/ch14-aggregate-demand-ii-applying-the-is-lm-model.pdf" },
      { chapter: 15, title: "The Open Economy Revisited - The Mundell-Fleming Model and the Exchange-Rate Regime", url: "/files/teaching/econ313/ch15-the-open-economy-revisited-the-mundell-fleming-model-and-the-exchange-rate-regime.pdf" },
      { chapter: 16, title: "Aggregate Supply and the Short-Run Tradeoff Between Inflation and Unemployment", url: "/files/teaching/econ313/ch16-aggregate-supply-and-the-short-run-tradeoff-between-inflation-and-unemployment.pdf" },
      { chapter: 17, title: "A Dynamic Model of Economic Fluctuations", url: "/files/teaching/econ313/ch17-a-dynamic-model-of-economic-fluctuations.pdf" },
      { chapter: 18, title: "Alternative Perspectives on Stabilization Policy", url: "/files/teaching/econ313/ch18-alternative-perspectives-on-stabilization-policy.pdf" },
      { chapter: 19, title: "Government Debt and Budget Deficits", url: "/files/teaching/econ313/ch19-government-debt-and-budget-deficits.pdf" },
      { chapter: 20, title: "Banking and Monetary Policy", url: "/files/teaching/econ313/ch20-banking-and-monetary-policy.pdf" },
      { chapter: 21, title: "The Financial System - Opportunities and Dangers", url: "/files/teaching/econ313/ch21-the-financial-system-opportunities-and-dangers.pdf" },
      { chapter: 22, title: "The Microfoundations of Consumption and Investment", url: "/files/teaching/econ313/ch22-the-microfoundations-of-consumption-and-investment.pdf" }
    ],
  },
];

export const teachingAssistant: Course[] = [
  { code: "ECON 511", title: "Microeconomic Theory (Ph.D.)", term: "Fall 2023, 2024, 2025" },
  { code: "ECON 512", title: "Advanced Microeconomics (Ph.D.)", term: "Spring 2024" },
  { code: "ECON 581", title: "Mathematical Methods in Economics", term: "Summer 2024" },
  { code: "AREC 525", title: "Agribusiness Operations Research Methods", term: "Spring 2022, 2023" },
];
