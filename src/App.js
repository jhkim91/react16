import React, { Component, Fragment } from 'react';

class ReturnTypes extends Component {
  render() {
    return (
      // 기존 return은 Component or null , string같은 타입은 리턴안됨
      // 기존방식 1
      [<header key={1}></header>,
      <div key={2}></div>,
      <footer key={3}></footer>]

      // 기존방식 2
      <span>
        <header />
        <div />
        <footer />
      </span>

      // Fragment
      // <Fragment>를 사용하면 웹 소스에 남지않는다. 문구제거해도 사용가능 <></> 아직은 create react app 엔 지원안함
      <Fragment>
        <header />,
        <div />,
        <footer />
      </Fragment>
    )
    // string return 가능
    /*return 'hello';*/
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
        <div className="App" />
      </Fragment>
    );
  }
}

export default App;
