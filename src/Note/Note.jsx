import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import "./Note.css";

export default class Note extends React.Component {
  render(props) {
    return (
      <div id={this.props.note.id} className="note">
        <h2>
          <Link to={`/note/${this.props.note.id}`}>{this.props.note.name}</Link>
        </h2>
        <div className="date">
          Modified {format(this.props.note.modified, "Do MMM YYYY")}
        </div>
        <div className="description">
          <p>{this.props.note.content}</p>
        </div>
        <button>Delete</button>
      </div>
    );
  }
}
