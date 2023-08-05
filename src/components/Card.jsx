import React from "react";

export default function Card(props) {
  return (
    <div className="ui card">
      <a className="image" href="#">
        <img src={props.poster} />
      </a>
      <div className="content">
        <a className="header" href="#">
          {props.title}
        </a>
        <div className="meta">
          <a>{props.year}</a>
        </div>
      </div>
    </div>
  );
}
