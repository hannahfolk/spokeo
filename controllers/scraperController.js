const scraperPhoneNumber = (str) => {
  const regex = /(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}/gim;
  const matches = str.match(regex);
  if (matches) {
    return matches;
  } else {
    console.log("No matches for phone numbers.");
    return;
  }
};

const scraperEmail = (str) => {
  const regex = /\b([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/g;
  const matches = str.match(regex);
  if (matches) {
    return matches;
  } else {
    console.log("No matches for emails.");
    return;
  }
};

module.exports = {
  scraperPhoneNumber,
  scraperEmail,
};
