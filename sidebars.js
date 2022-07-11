// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      items: ["handbook/technical-leadership-guide"],
    },
    {
      type: "category",
      label: "Roles",
      collapsible: false,
      items: ["handbook/tech-lead-roles"],
    },
    {
      type: "category",
      label: "Managing Projects",
      collapsible: false,
      items: [
        "handbook/step-by-step",
        "handbook/kick-off-meetings",
        "handbook/risk-management",
        "handbook/decision-papers",
        "handbook/roll-out-planning",
        "handbook/scope-management",
        "handbook/stakeholder-management",
        "handbook/communication-strategy",
        "handbook/agile-methodologies",
        "handbook/retrospectives",
        "handbook/problem-statements"
      ],
    },
    {
      type: "category",
      label: "People Leadership",
      collapsible: false,
      items: [
        "handbook/one-on-ones",
        "handbook/meeting-culture",
        "handbook/roles-and-responsibilities",
      ],
    },
    {
      type: "category",
      label: "Technical Leadership",
      collapsible: false,
      items: [
        "handbook/solution-design",
        "handbook/code-review",
        "handbook/debt-management",
        "handbook/architecture-fundamentals"
      ],
    },
    {
      type: "category",
      label: "Process Leadership",
      collapsible: false,
      items: [
        "handbook/operational-reviews",
        "handbook/guiding-principles",
        "handbook/investment-buckets",
        "handbook/intake",
        "handbook/analytics",
      ],
    },
    {
      type: "category",
      label: "Managing Self",
      collapsible: false,
      items: [
        "handbook/note-taking",
        "handbook/physical-and-mental-health",
        "handbook/active-listening",
        "handbook/art-of-delegation",
        "handbook/art-of-saying-no",
        "handbook/onboarding-yourself",
        "handbook/mindset"
      ],
    },
    {
      type: "category",
      label: "Commercial Leadership",
      collapsible: false,
      items: [
        "handbook/key-performance-indicators",
        "handbook/project-management-fundamentals",
        "handbook/business-fundamentals",
      ],
    },
    {
      type: "category",
      label: "Hiring",
      collapsible: false,
      items: [
        "handbook/technical-screening",
        "handbook/coding-interviews",
        "handbook/culture-fit",
        "handbook/system-design"
      ],
    },
  ],
  'first-90-days-of-being-tech-lead': [
    'first-90-days-of-being-tech-lead/getting-started',
    {
      type: "category",
      label: "First Week",
      collapsible: false,
      items: ["first-90-days-of-being-tech-lead/day-one", "first-90-days-of-being-tech-lead/day-two", "first-90-days-of-being-tech-lead/days-three-to-five"],
    },
  ]
};

module.exports = sidebars;