import React from "react";
import { Route } from 'react-router-dom';

import Folders3 from '../Folders/Folders3';
import Notes from '../Notes/Notes';
// import ViewNote from '../ViewNote/ViewNote';
import GoBack from '../GoBack/GoBack';
import STORE from '../STORE/STORE';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Route exact path='/' render={(props) => (<Folders3 {...props} store={STORE} />)} />
        <Route exact path='/folder/:id' render={(props) => (<Folders3 {...props} store={STORE} />)} />
        <Route exact path='/' render={(props) => (<Notes {...props} store={STORE} />)} />
        <Route exact path='/folder/:id' render={(props) => (<Notes {...props} store={STORE} />)} />
        {/* <Route path='/note/:id' render={(props) => (<GoBack {...props} store={STORE} />)} /> */}
        <Route exact path='/note/:id' render={(props) => (<Folders3 {...props} store={STORE} />)} />
        <Route exact path='/note/:id' render={(props) => (<Notes {...props} store={STORE} />)} />
      </main>
    );
  }
}
