import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <strong>Antonyms: </strong>
        {props.antonyms}
      </div>
    );
  } else {
    return null;
  }
}
