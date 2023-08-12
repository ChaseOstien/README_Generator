//const data = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
const apacheBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
const gplBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
const iscBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';

function renderLicenseBadge(license) {
  let badge = '';
  switch (renderLicenseBadge) {
    case license.answers = 'MIT License':
      badge = mitBadge;
      break;
    case license.answers = 'Apache License 2.0':
      badge =  apacheBadge;
      break;
    case license.answers = 'GNU General Public License':
      badge = gplBadge;
      break;
    case license.answers = 'ISC License':
      badge = iscBadge;
      break;
    case license.answers = 'N/A':
      badge = '';
      break;
    default:
      badge = '';
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const mitLink = '(https://opensource.org/licenses/MIT)';
const apacheLink = '(https://opensource.org/licenses/Apache-2.0)';
const gplLink = '(https://www.gnu.org/licenses/gpl-3.0)';
const iscLink = '(https://opensource.org/licenses/ISC)';

function renderLicenseLink(license) {
  license = '';
  switch (renderLicenseLink) {
    case license.answers = 'MIT License':
      license = mitLink;
      break;
    case license.answers = 'Apache License 2.0':
      license =  apacheLink;
      break;
    case license.answers = 'GNU General Public License':
      license = gplLink;
      break;
    case license.answers = 'ISC License':
      license = iscLink;
      break;
    case license.answers = 'N/A':
      license = '';
      break;
    default:
      license = '';
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = '';
  if(license) {
    result = license;
  }
  return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${(mitBadge)}

  ## Table of Contents
  * [description](#Description)
  * [installation](#Installation)
  * [usage](#Usage)
  * [license](#License)
  * [contributors](#Contributors)
  * [tests](#Tests)
  * [contact](#Contact)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${mitLink}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}

  # Contact
  * GitHub: ${data.git}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
