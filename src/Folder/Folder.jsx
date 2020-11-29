import React from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

export default class Folder extends React.Component {
  render(props) {

    const folders = this.props.STORE.folders.map((folder) => {
      let selectedFolder = "";
      if (this.props.theId === folder.id) {
        selectedFolder = "selected";
      }
      return (
        <Link
          to={`/folder/${folder.id}`}
          id={folder.id}
          key={folder.id}
          className={`folder ${selectedFolder}`}
        >
          {folder.name}
        </Link>
      );
    });

    return <>{folders}</>;
  }
}
