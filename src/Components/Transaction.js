// import React from "react";
// import { Line } from "react-chartjs-2";
// import moment from "moment";

// const startDate = new Date(2020, 0, 1);
// const labels = [];
// for (let i = 0; i < 6; i++) {
//   const date = moment(startDate).add(i, "days").format("YYYY-MM-DD");
//   labels.push(date.toString());
// }

// const data = (canvas) => {
//   const ctx = canvas.getContext("2d");
//   const gradient = ctx.createLinearGradient(0, 0, 100, 0);
//   return {
//     backgroundColor: gradient,
//     labels,
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 3,
//         fill: false,
//         borderColor: "green",
//       },
//     ],
//   };
// };

// export default function Transaction() {
//   return (
//     <div className="Transaction">
//       <Line data={data} />
//     </div>
//   );
// }

import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate:
    '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
};

const styles = {
  graphContainer: {
    border: "1px solid black",
    padding: "15px",
  },
};

class LineChartExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chartData(),
    };
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart
          data={this.state.data}
          options={options}
          width="600"
          height="250"
        />
      </div>
    );
  }
}

export default LineChartExample;
