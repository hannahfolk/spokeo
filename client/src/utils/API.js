import axios from "axios";

export default function getResults(href) {
  return axios({
    method: "POST",
    url: "http://localhost:3001/api",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: {
      href,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
