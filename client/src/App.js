/* global chrome */
import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LinkCard from "./components/LinkCard";

import "./App.css";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("hi")
    // Send a handshake over to the background
    chrome.extension.sendMessage({ data: "Handshake" }, (response) => {
      console.log(response);
    });
    // Once the background has received handshake, it will send over the results
    chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
      // message.data are our results
      console.log(message.data);
      setResults(message.data);
    });
  }, []);

  return (
    <Wrapper>
      <Header>We found {results.length} results on Spokeo.</Header>
      <ol>
        {results.map((result) => (
          <LinkCard key={result} result={result} />
        ))}
      </ol>
    </Wrapper>
  );
};

export default App;
