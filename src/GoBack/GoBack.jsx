import React from "react";

export default class GoBack extends React.Component {
  render() {
    return (
      <>
          <button onClick={() => this.props.props.history.goBack()}>Go Back</button>
      </>
    );
  }
}
