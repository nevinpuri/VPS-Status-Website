import React, { Component } from "react";
import VPSGraph from "./VPSGraph";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./style.css";
class VPSData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vpsData: [],
      cpuUsage: [],
      memoryUsage: [],
      storageUsage: [],
      graphColor: "#84b2d8",
    };
  }

  componentDidMount = async () => {
    await this.getVPSData();
    await this.getStateData();
    console.log(this.state.memoryUsage);
  };

  getVPSData = async () => {
    const { data } = await axios.get("https://nevin.cc/statusAPI");
    data.map((hour) => {
      this.setState({ vpsData: [...this.state.vpsData, hour] });
    });
  };

  getStateData = async () => {
    this.state.vpsData.map((vpsInfo) => {
      this.setState({
        cpuUsage: [
          ...this.state.cpuUsage,
          { hour: vpsInfo.hour, Usage: vpsInfo.cpuUsage, key: uuidv4() },
        ],
      });
      this.setState({
        memoryUsage: [
          ...this.state.memoryUsage,
          { hour: vpsInfo.hour, Usage: vpsInfo.memoryUsage, key: uuidv4() },
        ],
      });
      this.setState({
        storageUsage: [
          ...this.state.storageUsage,
          { hour: vpsInfo.hour, Usage: vpsInfo.storageUsage, key: uuidv4() },
        ],
      });
    });
  };

  render() {
    return (
      <div className="vps-data-graph">
        <VPSGraph
          componentName={"CPU Usage"}
          componentData={this.state.cpuUsage}
          graphColor={this.state.graphColor}
        />
        <VPSGraph
          componentName={"Memory Usage"}
          componentData={this.state.memoryUsage}
          graphColor={this.state.graphColor}
        />
        <VPSGraph
          componentName={"Storage Usage"}
          componentData={this.state.storageUsage}
          graphColor={this.state.graphColor}
        />
      </div>
    );
  }
}

export default VPSData;
