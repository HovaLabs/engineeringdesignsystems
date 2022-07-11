export type TChapter = { title: string; description?: string[] };
type TTableOfContents = TChapter[];

export const tableOfContentsCopy: TTableOfContents = [
  {
    title: "Foreward",
  },
  {
    title: "Introduction",
  },
  {
    title: "01. The Theoretical Parts",
    description: ["What is a Design System?", "Principles"],
  },
  {
    title: "02.The Building Blocks: Tokens",
    description: ["Color", "Typography", "Spacing", "Motion"],
  },
  {
    title: "03.The People Parts",
    description: [
      "Getting and keeping people on board",
      "Onboarding",
      "Support systems",
      " Building Trust",
      "Team Dynamics",
      "Interviewing Customers",
      "Taking and giving Feedback",
    ],
  },
  {
    title: "04.Management",
    description: [
      "Measuring, planning, and finding Impact opportunities",
      "Announcing updates strategies",
      "Keeping distance between design/engineering small",
      " Maintenance",
      "Adding to your system",
    ],
  },
  {
    title: "05.System Basics",
    description: [
      "Nomenclature",
      "Testing",
      "Documentation",
      "Accessibility",
      "Setting up design and engineering for success",
    ],
  },
  {
    title: "06.The Building Blocks: Tokens",
    description: [
      "3rd party or custom set up?",
      "Setting up your own system",
      " Crossing contexts",
      "Tips and tricks",
    ],
  },
  {
    title: "Conclusion",
  },
  {
    title: "Resources",
  },
];
