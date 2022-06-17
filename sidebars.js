// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      items: ['technical-leadership-guide'],
    },
    {
      type: 'category',
      label: 'Roles',
      collapsible: false,
      items: ['tech-lead-roles'],
    },
    {
      type: 'category',
      label: 'Managing Projects',
      collapsible: false,
      items: ['step-by-step', 'kick-off-meetings', 'risk-management', 'decision-papers', 'roll-out-planning', 'scope-management'],
    }
  ],
};

module.exports = sidebars;
