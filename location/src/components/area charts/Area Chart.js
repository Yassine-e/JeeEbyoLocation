// import React, { Component , useEffect  } from 'react';
import React, { Component } from "react";

import CanvasJSReact from "../assets/canvasjs.react";
// import '../../css/pagePrincipale.css';
import jsonData from "./Covid19Coll.json";
// import Demo from '../demo';
// import Select from '../select';
// import axios from 'axios';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const option = {
  option1: {
    option2: "newComfirmed",
  },
};

//var TotalConfirmed = 2;

class AreaChart extends Component {
  state = {
    // famille,
    option,
    value1: 2,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
    value8: 8,
    value9: 9,
    value10: 10,
    value11: 11,
    value12: 12,
    value13: 13,
    loading: true,
    person: null,
    totalDeaths: 0,
    TotalConfirmed2: 0,
    TotalVaccinated1: 0,
    TotalVaccinated2: 0,
  };

  async componentDidMount() {
    //const loadData = () => JSON.parse(JSON.stringify(jsonData));
    var optionJson = JSON.parse(JSON.stringify(jsonData));

    const option = { ...this.state.option };
    option.option1.option2 = optionJson;
    this.setState(option);
    var vare = this.state.option.option1.option2;
    console.log(vare[0].Maroc.TotalConfirmed);
    console.log(option);

    // const TotalConfirmed = { ...this.state.TotalConfirmed}
    // TotalConfirmed=vare[0].Maroc.TotalConfirmed
    // this.setState(TotalConfirmed)
    // var varee=this.state.TotalConfirmed
    // console.log("TotalConfirmed "+varee)
    // // console.log(vare[0].Maroc.TotalConfirmed)

    this.setState({ TotalConfirmed2: vare[0].Maroc.TotalConfirmed });
    console.log("TotalConfirmed " + this.state.TotalConfirmed2);

    this.setState({ totalDeaths: vare[0].Maroc.TotalDeaths });
    console.log("totalDeaths " + this.state.totalDeaths);

    this.setState({ TotalVaccinated1: vare[0].Maroc.TotalVaccinated1 });
    console.log("TotalVaccinated1 " + this.state.TotalVaccinated1);

    this.setState({ TotalVaccinated2: vare[0].Maroc.TotalVaccinated2 });
    console.log("TotalVaccinated2 " + this.state.TotalVaccinated2);
  }

  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "",
      },
      axisY: {
        // title: this.state.option.option1.option2,
        includeZero: false,
      },
      data: [
        {
          type: "area",
          xValueFormatString: "YYYY-MM-DD",
          yValueFormatString: "#,##0.## ",
          dataPoints: [
            { x: new Date("2021-06-13"), y: this.state.value13 },
            { x: new Date("2021-06-12"), y: this.state.value12 },
            { x: new Date("2021-06-11"), y: this.state.value11 },
            { x: new Date("2021-06-10"), y: this.state.value10 },
            { x: new Date("2021-06-09"), y: this.state.value9 },
            { x: new Date("2021-06-08"), y: this.state.value8 },
            { x: new Date("2021-06-07"), y: this.state.value7 },
            { x: new Date("2021-06-06"), y: this.state.value6 },
            { x: new Date("2021-06-05"), y: this.state.value5 },
            { x: new Date("2021-06-04"), y: this.state.value4 },
            { x: new Date("2021-06-03"), y: this.state.value3 },
            { x: new Date("2021-06-02"), y: this.state.value2 },
            { x: new Date("2021-06-01"), y: this.state.value1 },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <div>{this.state.loading ?(<div>loading...</div>):(<div>person...</div>)}</div> */}
        {/*
			<Demo totalComfirmed={this.state.TotalConfirmed2} totalDeaths={this.state.totalDeaths} TotalVaccinated1={this.state.TotalVaccinated1} TotalVaccinated2={this.state.TotalVaccinated2}/>
      */}
        <div className="select">
          {/* <div className="graph"> */}
          <CanvasJSChart
            options={options}
            /* onRef={ref => this.chart = ref} */
          />
        </div>
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default AreaChart;
