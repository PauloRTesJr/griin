const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/griin-backoffice',
    '<rootDir>/libs/ui',
    '<rootDir>/libs/features/user',
  ],
};
