import React, { Component } from "react";
class VPSData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpuUsage: [],
      memoryUsage: [],
      storageUsage: [],
    };
  }

  componentDidMount = async () => {
    await this.getVPSData();
    console.log(this.state.memoryUsage);
  };

  getVPSData = async () => {
    this.props.vpsStatus.map((vpsInfo) => {
      console.log(vpsInfo);
      this.setState({
        cpuUsage: [
          ...this.state.cpuUsage,
          { name: vpsInfo.hour, uv: vpsInfo.cpuUsage },
        ],
      });
      this.setState({
        memoryUsage: [
          ...this.state.memoryUsage,
          { name: vpsInfo.hour, uv: vpsInfo.memoryUsage },
        ],
      });
      this.setState({
        storageUsage: [
          ...this.state.storageUsage,
          { name: vpsInfo.hour, uv: vpsInfo.storageUsage },
        ],
      });
    });
  };

  render() {
    return (
      <div>
        <h1>iouhafsdoif</h1>
      </div>
    );
  }
}

export default VPSData;
