import React from "react";

import Note from "../Note/Note";
import AddNewNote from "../AddNewNote/AddNewNote";

import "./Notes.css";

export default class Notes extends React.Component {
  render(props) {
    let notes = {};

    const filteredNotes = this.props.store.notes.filter((note) => {
      return note.folderId === this.props.match.params.id;
    });

    const filteredNote = this.props.store.notes.filter((note) => {
      return note.id === this.props.match.params.id;
    });

    if (this.props.match.path === "/note/:id") {
      notes = filteredNote.map((note) => {
        return <Note key={note.id} note={note} />;
      });
    } else if (this.props.match.path === "/folder/:id") {
      notes = filteredNotes.map((note) => {
        return <Note key={note.id} note={note} />;
      });
    } else {
      notes = this.props.store.notes.map((note) => {
        return <Note key={note.id} note={note} />;
      });
    }

    return (
      <section id="notes">
        {notes}
        {this.props.match.path === "/note/:id" ? null : <AddNewNote />}
      </section>
    );
  }
}
