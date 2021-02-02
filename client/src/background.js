/* global chrome */
"use strict";

import getResults from "./utils/API";
const tabIdsArr = [];

// Listening for a tab to be activated (aka clicked on)
chrome.tabs.onActivated.addListener((info) => {
  // Check to see if localStorage has a tabIdsArr
  if (localStorage.getItem("tabIdsArr") != null) {
    // Look through tabIdsArr to see if info.tabId (the current tab) is one of them
    if (tabIdsArr.indexOf(info.tabId) !== -1) {
      // Pull from localStorage the results related to info.tabId
      info.tabId = info.tabId.toString();
      const results = localStorage.getItem(info.tabId).toString();
      // Split the results into an array so that we can count them
      const resultsArr = results.split(",");

      // Show badge and blue icon
      if (resultsArr.length > 0) {
        chrome.browserAction.setBadgeText({
          text: resultsArr.length.toString(),
        });
        chrome.browserAction.setIcon({
          path: {
            16: "/icon_16x16.png",
            48: "/icon_48x48.png",
            128: "/icon_128x128.png",
          },
        });
      }

      // Send to App.js
      chrome.extension.onMessage.addListener(
        (message, sender, sendResponse) => {
          console.log(message.data);
          setTimeout(function () {
            chrome.extension.sendMessage({ data: resultsArr }, (response) =>
              console.log(response)
            );
          }, 100);
        }
      );
    }
    // if tabIdsArr does not have the current tab id stored, run processUrl because we will have never seen this tab before
    else {
      resetAppearance();
      processUrl(info.tabId);
    }
  } // If there is no tabIdsArr, run processUrl for the first time (we should only ever hit this else statement once per active browser session)
  else {
    processUrl(info.tabId);
  }
});

// Listening for a tab refresh or change in url or a new tab
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  resetAppearance();
  await processUrl(tabId);
});

//Clear local storage when browser window is closed
chrome.windows.onRemoved.addListener((windowId) => {
  localStorage.clear();
});

// Reset appearance of the extension icon and badge
const resetAppearance = () => {
  // Set the badge back to empty
  chrome.browserAction.setBadgeText({
    text: "",
  });
  // Set the icon back to gray
  chrome.browserAction.setIcon({
    path: {
      16: "/default_16x16.png",
      48: "/default_48x48.png",
      128: "/default_128x128.png",
    },
  });
};

// This function processes the current tab's url, sends it to the backend to be scraped and processed, returns results from backend, stores the tabID in local storage with the results, and sends a message to the app.js to be displayed on the overlay.
const processUrl = (tabId) => {
  // Gets the href of the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const href = tabs[0].url;
    console.log(href);

    // Validation to make sure something like chrome://extensions and chrome://newtab don't run through the scraper
    if (!href.startsWith("chrome") && href !== "") {
      // Sends the url to the backend to be scraped and processed
      await getResults(href)
        // The res is the array of entities that have been found on the page
        .then((res) => {
          console.log(res);

          // Change appearance
          if (res.length > 0) {
            // Show badge
            chrome.browserAction.setBadgeText({
              text: res.length.toString(),
            });
            // Change icon to blue
            chrome.browserAction.setIcon({
              path: {
                16: "/icon_16x16.png",
                48: "/icon_48x48.png",
                128: "/icon_128x128.png",
              },
            });
          }

          // Store the current tab's id
          tabIdsArr.push(tabId);
          // Store the tabIdsArr
          localStorage.setItem("tabIdsArr", JSON.stringify(tabIdsArr));
          // And store the results using the key of the current tab's id
          localStorage.setItem(tabId, res);

          // Listen for the handshake from app.js
          chrome.extension.onMessage.addListener(
            (message, sender, sendResponse) => {
              // Below should console.log "Handshake"
              console.log(message.data);
              // Once the handshake arrives, then you can send the results over to app.js
              setTimeout(function () {
                chrome.extension.sendMessage({ data: res }, (response) =>
                  console.log(response)
                );
              }, 500);
            }
          );
        })
        .catch((err) => console.log(err));
    }
  });
};
