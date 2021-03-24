import React, { Component } from 'react';
import './App.css';

import MyComponent from './components/MyComponent';
import YourComponent from './components/YourComponent';
import TheirComponent from './components/TheirComponent';

class App extends Component {
  state = {
    infoMyComponentData: false,
    YourComponentListData: false,
    infoTheirComponetData: false
  }

  componentDidMount () {
    setTimeout(() => this.setState({ infoMyComponentData: true }), 1000);
    setTimeout(() => this.setState({ infoYourComponentData: true }), 3000);
    setTimeout(() => this.setState({ infoTheirComponentData: true }), 5000);
  }

  render() {
    const {
      infoMyComponentData,
      infoYourComponentData,
      infoTheirComponentData
    } = this.state;

    return (
      <div className="App">
        <MyComponent data={infoMyComponentData} />
        <YourComponent data={infoYourComponentData} />
        <TheirComponent data={infoTheirComponentData} />
      </div>
    );
  }
}

export default App;