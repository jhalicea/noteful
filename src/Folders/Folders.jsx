import React from "react";

import './Folders.css';
import Folder from '../Folder/Folder'
import AddNewFolder from '../AddNewFolder/AddNewFolder';

export default class Folders extends React.Component {
  render() {
    return (
      <aside >
        <div id="folders">
          <Folder />
        </div>
        <AddNewFolder />

      </aside>
    );
  }
}
