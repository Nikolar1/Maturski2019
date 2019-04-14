var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [67],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Hranilica"]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

//------------------------------------------------------------------------------padavine
var options1 = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
  series: [

    {
      name: "Column B",
      type: 'column',
      data: [10, 19, 27, 26, 34, 35, 40, 38]
    },
  ],
  stroke: {
    width: [4, 4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: ['Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec', 'Jan', 'Feb']
  },
  yaxis: [
    {
      seriesName: 'Column A',
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
      },
      title: {
        text: "Padavine"
      }
    },
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);

chart1.render();
