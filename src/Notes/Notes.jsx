import React from "react";

import Note from "../Note/Note";
import AddNewNote from "../AddNewNote/AddNewNote";

import "./Notes.css";

export default class Notes extends React.Component {
  render() {
    return (
        <section id="notes">
          <Note />
          <AddNewNote />
        </section>
        
    );
  }
}
