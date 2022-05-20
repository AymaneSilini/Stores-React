import React from 'react';
import Html5QrcodePlugin from '../plugins/Html5QrcodePlugin.jsx'
import ResultContainerPlugin from '../plugins/ResultContainerPlugin.jsx'
import '../ressources/css/Home.css'
import Sidebar from '../components/Sidebar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: []
    }

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <>
        <div id="Home" className="Home">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"app"} />

          <section className="Home-section">
            <br />
            <br />
            <br />
            <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={this.onNewScanResult} />
            <ResultContainerPlugin results={this.state.decodedResults} />
          </section>
        </div>
      </>
    );

  }

  onNewScanResult(decodedText, decodedResult) {
    console.log(
      "Home [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default Home;
