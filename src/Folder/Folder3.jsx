import React from "react";
import { Link } from "react-router-dom";
import "./Folder.css";


export default class Folder extends React.Component {
  render(props) {
    console.log('hey')
      return (
        
        <Link
          to={`/folder/${this.props.folder.id}`}
          id={this.props.folder.id}
          key={this.props.folder.id}
          className={`folder ${this.props.selected}`}
        >
          {this.props.folder.name}
        </Link>)
}}
