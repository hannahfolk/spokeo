import React from "react";
import "./style.css";

const LinkCard = (props) => {
  const { result } = props;
  return (
    <li>
      <a href={`https://www.spokeo.com/search?q=${result}`} target="_blank">
        {result}
      </a>
    </li>
  );
};

export default LinkCard;
