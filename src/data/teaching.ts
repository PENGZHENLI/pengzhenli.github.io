export type Course = {
  code: string;
  title: string;
  term: string;
  syllabus?: string;
};

export const primaryInstructor: Course[] = [
  {
    code: "ECON 351",
    title: "Monetary Economics",
    term: "Spring 2025, Spring 2026",
    syllabus: "/files/Econ_351_Syllabus_Spring2026.pdf",
  },
  { code: "ECON 322", title: "The Global Economy: Trade and Development", term: "Summer 2025" },
  { code: "ECON 313", title: "Intermediate Macroeconomics", term: "Summer 2026" },
];

export const teachingAssistant: Course[] = [
  { code: "ECON 511", title: "Microeconomic Theory (Ph.D.)", term: "Fall 2023, 2024, 2025" },
  { code: "ECON 512", title: "Advanced Microeconomics (Ph.D.)", term: "Spring 2024" },
  { code: "ECON 581", title: "Mathematical Methods in Economics", term: "Summer 2024" },
  { code: "AREC 525", title: "Agribusiness Operations Research Methods", term: "Spring 2022, 2023" },
];
