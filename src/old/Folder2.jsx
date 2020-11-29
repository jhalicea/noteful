import React from "react";

import { Link } from "react-router-dom";

import "./Folder.css";

export default class Folder extends React.Component {
  render(props) {
    console.log(this.props);
    const folders = this.props.store.folders.map((folder) => {
      return (
        <div id={folder.id} key={folder.id} className="folder">
          <Link to={folder.id}>{folder.name}</Link>
        </div>
      );
    });

    return <>{folders}</>;
  }
}
