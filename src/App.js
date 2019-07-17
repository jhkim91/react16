import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("outsideTags"));
  }
}

const Message = () => "Access to external tags";

class ReturnTypes extends Component {
  render() {
    return 'hello';
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <Portals />
        <div className="App" />
      </Fragment>
    );
  }
}

export default App;
