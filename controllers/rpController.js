const controller = require("./scraperController.js");
const puppeteer = require("puppeteer");
const _ = require("lodash");

const getResults = (href) => {
  // Puppeteer scrapes the href and returns the html code
  return puppeteer
    .launch()
    .then((browser) => browser.newPage())
    .then((page) => {
      return page.goto(href).then(function () {
        return page.content();
      });
    })
    .then((html) => {
      const results = [];

      // Stores anything that looks like a phone number or email in the html
      const phoneResults = controller.scraperPhoneNumber(html);
      const emailResults = controller.scraperEmail(html);

      if (phoneResults != null) {
        // Removes all phone numbers that are not formatted so that we don't get random strings of 10 digit numbers
        const formattedPhone = _.remove(phoneResults, function (e) {
          return e.length !== 10;
        });

        // Pushes all formatted phone numbers to the results array
        formattedPhone.forEach((phoneNumber) => results.push(phoneNumber));
      }

      // Pushes all emails to the results array
      if (emailResults != null) {
        emailResults.forEach((email) => results.push(email));
      }

      // Remove duplicates from our array
      const uniqueSet = new Set(results);
      const newResults = [...uniqueSet];
      console.log(newResults);

      return newResults;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getResults };
