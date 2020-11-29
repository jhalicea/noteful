import React from 'react';
import {Link} from 'react-router-dom';

import './Note.css'

export default class Note extends React.Component {
  render(props) {
    
    const notes = this.props.STORE.notes.map(note => {
      return (
        <div id={note.id} key={note.id} className="note">
          <h2>
          <Link to="#">{note.name}</Link>
          </h2>
          <div className="description">
            <p>
              {note.content}
            </p>
          </div>
          <button>Delete</button>
        </div>
      )
    });
    return (
      <>
      {notes}
      </>
    );
  }
}
