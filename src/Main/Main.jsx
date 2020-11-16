import React from "react";

import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Folders />
        <Notes />
      </main>
    );
  }
}
