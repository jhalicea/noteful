import React from "react";

import './Note.css'

export default class Note extends React.Component {
  render() {
    return (
      <>
        <div className="note">
          <h2>
            <a href="#">Note 1</a>
          </h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              adipisci unde culpa? Eos perferendis perspiciatis placeat sit,
              provident, suscipit nobis dignissimos dolor, deserunt incidunt
              corrupti quod voluptatem! Unde, rerum deleniti!
            </p>
          </div>
          <button>Delete</button>
        </div>
        <div className="note">
          <h2>
            <a href="#">Note 2</a>
          </h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              adipisci unde culpa? Eos perferendis perspiciatis placeat sit,
              provident, suscipit nobis dignissimos dolor, deserunt incidunt
              corrupti quod voluptatem! Unde, rerum deleniti!
            </p>
          </div>
          <button>Delete</button>
        </div>
        <div className="note">
          <h2>
            <a href="#">Note 3</a>
          </h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              adipisci unde culpa? Eos perferendis perspiciatis placeat sit,
              provident, suscipit nobis dignissimos dolor, deserunt incidunt
              corrupti quod voluptatem! Unde, rerum deleniti!
            </p>
          </div>
          <button>Delete</button>
        </div>
      </>
    );
  }
}
