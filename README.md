# Spokeo Chrome Extension

### www.deflaw.com Example
[![Deflaw Example](images/deflawSpokeo.jpg)](images/deflawSpokeo.jpg)

### wwww.atighteru.com Example
[![A Tighter U Example](images/atighteruSpokeo.jpg)](images/atighteruSpokeo.jpg)

## Overview and Description:

This application was designed for Spokeo to assist its clients with a Chrome Extension platform. It combines Chrome's extension API, Spokeo's customer search engine along with a custom web scraper that uses Puppeteer to analyze the static or dynamic web content to find applicable phone numbers and emails to search. The front end is built with React.

## Installation

1. Fork and clone the repo
2. cd into the folder
3. In your terminal type "npm install" to install all dependencies
4. Next type "npm start"
5. To build the webpack type "npm run build"
6. After webpack is deployed navigate to Chrome Browser
   a. In the Chrome Menu, navigate to More Tools and then into Extensions
   b. Turn on Developer Mode
7. Click on the button "Load unpacked" and choose the build folder from your repo

## Features and Usage:

This application is client-specific and was created for Spokeo to publish on Google Chrome pending completion.

The extension performs a scrape of any dynamic or static web page and creates custom links of any available phone or email in the front end.

The extension uses local storage to save results of each web page for the client's convenience. It also alerts the client via extension badge to show the client how many results exist per page.

Currently usage for this extension is client-specific, where Client will maintain and further develop. Also, READ ## Licensing below.

## Application Requirements:

Third Party APIs:

    Chrome Extension API (https://developer.chrome.com/extensions/api_index) created by Google to provides extensions with many special-purpose APIs, like messaging and setting icons.

    Materialize (https://materializecss.com/) created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology.

Primary Node Packages:

    Puppeteer (https://www.npmjs.com/package/puppeteer) is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

    Lodash (https://lodash.com/) makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

## Project Management and Collaborators:

Project Manager: Project Pitch and Repository Initialized by: Becca Burke (@reburke286)

Collaborators: Hannah Folk (@hannahfolk), Eduardo Urbaez (@eurbaezjr), and Marie Gilbert (@marieegilbert)

## Resources:

gitlab: https://gitlab.com/

Google Fonts: https://fonts.google.com/

MDN web docs moz://a: https://developer.mozilla.org/en-US/

stack overflow: https://stackoverflow.com/

trello: https://trello.com/

Also see Third Party APIs listed under Application Requirements.

## Credits:

2019 Trilogy Education Services: https://www.trilogyed.com/ - Educational Instruction

UCLA Extension Full Stack Web Development Bootcamp: https://bootcamp.uclaextension.edu/coding/  Educational Instruction and Facility Usages

Omar Patel - UCLA Extension Lead Intructor and Student Support

Julio Valdez, Peter Park - UCLA Extension TAs and Student Support

## Licensing:

PERMISSION NOT GRANTED FOR USE OF THIS APPLICATION.

THIS APPLICATION IS SPECIFIC TO CLIENT USE ONLY.
