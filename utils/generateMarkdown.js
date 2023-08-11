//const data = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const mitBadge = ('https://img.shields.io/badge/License-MIT-yellow.svg');
const apacheBadge = ('https://img.shields.io/badge/License-Apache_2.0-blue.svg');
const gplLicense = ('https://img.shields.io/badge/License-GPLv3-blue.svg');
const iscLicense = ('https://img.shields.io/badge/License-ISC-blue.svg');
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const mitLink = ('https://opensource.org/licenses/MIT');
const apacheLink = ('https://opensource.org/licenses/Apache-2.0');
const gplLink = ('https://www.gnu.org/licenses/gpl-3.0');
const iscLink = ('https://opensource.org/licenses/ISC');
function renderLicenseLink(license) {
  
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = '';
  if(license) {

  }
  return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}
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
