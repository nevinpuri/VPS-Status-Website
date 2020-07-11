import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import VPSData from "./VPSData.js";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vpsData: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: false });
  };

  render() {
    return (
      !this.state.loading && (
        <div>
          <h1 className="text-center jumbotron">Nevin.CC VPS Status</h1>
          <VPSData vpsStatus={this.state.vpsData} className="text-center" />
        </div>
      )
    );
  }
}

export default App;
