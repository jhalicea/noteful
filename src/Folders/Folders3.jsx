import React from "react";
// import { Link } from "react-router-dom";

import "./Folders.css";
// import "../Folder/Folder.css";
import Folder3 from "../Folder/Folder3";
import AddNewFolder from "../AddNewFolder/AddNewFolder";
import GoBack from "../GoBack/GoBack";

export default class Folders extends React.Component {
  render() {
    let folders = undefined;


    if (this.props.match.path === "/note/:id") {
      const theFolder = this.props.store.folders.filter((folder) => {
        let note = this.props.store.notes.filter((note) => {
          return note.id === this.props.match.params.id;
        });
        return folder.id === note[0].folderId;
      });
      folders = <Folder3 key={theFolder[0].id} folder={theFolder[0]} selected={'selected'} />
    } else {
      folders = this.props.store.folders.map((folder) => {
        let selectedFolder = "";
        if (this.props.match.params.id === folder.id) {
          selectedFolder = "selected";
        }
        return (
          <Folder3 key={folder.id} folder={folder} selected={selectedFolder} />
        );
      });
    }

    return (
      <aside>
        <div id="folders">
          {this.props.match.path === "/note/:id" ? folders : folders}
          {this.props.match.path === "/note/:id" ? <GoBack props={this.props} /> : null}
          
        </div>
        {this.props.match.path === "/note/:id" ? null : <AddNewFolder />}
      </aside>
    );
  }
}
