import React from "react";
import { Link, Route } from 'react-router-dom'

import './Folders.css';
import Folder2 from '../Folder/Folder2'
import AddNewFolder from '../AddNewFolder/AddNewFolder';

export default class Folders extends React.Component {
  render() {
    console.log(this.props);

    return (
      <aside >
        <div id="folders">
          {/* <Route path='/folder' render={(props) => (<Folder2 {...props} store={this.props.store} />)}/> */}
          {/* <Route path='/folder/:id' render={(routerProps) => <Folder2 folder={this.props.store.folders.find(folder => folder.id === routerProps.match.params.folderId)}
    />
  }
/> */}
        </div>
        <AddNewFolder />

      </aside>
    );
  }
}
