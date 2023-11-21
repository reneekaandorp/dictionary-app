import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    //let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    let apiKey = "79t19ca06b3618febf143dc04f0o86be";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="SearchForm">
        <div className="SearchFormText">
          <p>What word do you want to look up?</p>
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <small>I.e. sunset, books, forest</small>
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
