const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      link: { type: 'doc', id: 'contributing/index' },
      items: [
        'contributing/development',
        'contributing/semantic-commit-messages',
        'contributing/folder-structure',
        'contributing/content-style-guide',
        'contributing/using-components',
        'contributing/types-of-contrubution',
        'contributing/support',
      ],
    },
    'Code-Of-Conduct',
  ],
};

module.exports = sidebars;
