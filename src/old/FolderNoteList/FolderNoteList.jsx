import React from "react";
import { Link } from "react-router-dom";

import STORE from "../STORE/STORE";
import GoBack from "../GoBack/GoBack";

export default class FolderNoteList extends React.Component {
  render() {
    const filteredNotes = STORE.notes.filter((note) => {
      return note.folderId === this.props.match.params.id;
    });

    const notes = filteredNotes.map((note) => {
      return (
        <div id={note.id} key={note.id} className="note">
          <h2>
            <Link to="#">{note.name}</Link>
          </h2>
          <div className="description">
            <p>{note.content}</p>
          </div>
          <button>Delete</button>
        </div>
      );
    });

    return (
      <>
        <aside>
          <div id="folders">
            <GoBack />
          </div>
        </aside>
        <section id="notes">{notes}</section>
      </>
    );
  }
}
