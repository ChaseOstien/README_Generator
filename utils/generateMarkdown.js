//const data = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const mitBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
const apacheBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
const gplBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
const iscBadge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';

function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'MIT License':
      badge = mitBadge;
      break;
    case 'Apache License 2.0':
      badge =  apacheBadge;
      break;
    case 'GNU General Public License':
      badge = gplBadge;
      break;
    case 'ISC License':
      badge = iscBadge;
      break;
    case 'N/A':
      badge = '';
      break;
    default:
      badge = '';
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const mitLink = 'https://opensource.org/licenses/MIT';
const apacheLink = 'https://opensource.org/licenses/Apache-2.0';
const gplLink = 'https://www.gnu.org/licenses/gpl-3.0';
const iscLink = 'https://opensource.org/licenses/ISC';

function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case 'MIT License':
      link = mitLink;
      break;
    case 'Apache License 2.0':
      link =  apacheLink;
      break;
    case 'GNU General Public License':
      link = gplLink;
      break;
    case 'ISC License':
      link = iscLink;
      break;
    case 'N/A':
      link = '';
      break;
    default:
      link = '';
  }
  return link;
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

const gitHub = 'https://github.com/ChaseOstien';

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  #### Example of command line prompts for this application.
  ![Screenshot of command line prompts.](./utils/img/Screenshot1.png)
  ## License
  ${data.license}\n
  ${renderLicenseLink(data.license)}
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}

  ## Questions
  ### If you have any questions about this application, please send all correspondence to the contact info listed below. 
  * GitHub: ${data.git} - ${gitHub}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
