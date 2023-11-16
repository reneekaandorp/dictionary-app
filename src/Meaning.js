import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <strong>Definition: </strong>
      {props.meaning.definition}

      <Example example={props.meaning.example} />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
