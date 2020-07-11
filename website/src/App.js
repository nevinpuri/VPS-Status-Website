import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import VPSData from "./VPSData.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vpsData: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    await this.getVPSData();
    this.setState({ loading: false });
  };

  getVPSData = async () => {
    const { data } = await axios.get("https://nevin.cc/statusAPI");
    data.map((hour) => {
      this.setState({ vpsData: [...this.state.vpsData, hour] });
    });
    console.log(this.state.vpsData);
  };

  render() {
    return (
      !this.state.loading && (
        <div>
          <h1>oifjaois[djf</h1>
          <VPSData vpsStatus={this.state.vpsData} />
        </div>
      )
    );
  }
}

export default App;
