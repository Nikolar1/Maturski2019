var korisnik;
var stanica;
var hranilica;
var prochra;
function sqlToJsDate(sqlDate){
    var sMonth = Number(sqlDate.substr(5, 2));
    return sMonth;
}


var Tajmer = setInterval(getData, 60000);


function getData() {
    var url = 'https://maturski2019-backend.herokuapp.com/';
    var token = JSON.parse(sessionStorage.getItem("token"));
    fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token.token
    }
    })
    .then(res => res.json())
    .then(res => sve = res)
    .then(res => IspuniListe());
  }

  function IspuniListe() {
    hranilica = sve.hranilica;
    korisnik = sve.korisnik;
    stanica = sve.stanica;
    hranilica = hranilica[hranilica.length-1];
    stanica = stanica[stanica.length-1];
    console.log(hranilica);
    console.log(stanica);
    prochra = hranilica.HRANILICA * 100;
    prochra = Math.floor(prochra/1024)
  //  Cartovi();
    document.getElementById("temp").innerHTML = Math.round( stanica.TEMPERATURA * 10 ) / 10 + " °C";
    document.getElementById("vap").innerHTML = Math.round( stanica.PRITISAK * 10 ) / 10 + " mb";
    document.getElementById("vla").innerHTML = Math.round( stanica.VLAZNOST * 10 ) / 10 + " g/m³";
    chart.updateOptions({
          series: [prochra]
        })
    Padavine();
}

function Padavine(){
  var padavine={
    JAN : 0,
    FEB : 0,
    MAR : 0,
    APR : 0,
    MAJ : 0,
    JUN : 0,
    JUL : 0,
    AVG : 0,
    SEP : 0,
    OKT : 0,
    NOV : 0,
    DEC : 0
  };
  stanica = sve.stanica;
  stanica.forEach(function(item){
    switch (sqlToJsDate(item.DATUM)) {
      case 01:
        padavine.JAN = padavine.JAN + Number(item.PADAVINE)
        break;
      case 02:
        padavine.FEB = padavine.FEB + Number(item.PADAVINE)
        break;
      case 03:
        padavine.MAR = padavine.MAR + Number(item.PADAVINE)
        break;
      case 04:
        padavine.APR = padavine.APR + Number(item.PADAVINE)
        break;
      case 05:
        padavine.MAJ = padavine.MAJ + Number(item.PADAVINE)
        break;
      case 06:
        padavine.JUN = padavine.JUN + Number(item.PADAVINE)
        break;
      case 07:
        padavine.JUL = padavine.JUL + Number(item.PADAVINE)
        break;
      case 08:
        padavine.AVG = padavine.AVG + Number(item.PADAVINE)
        break;
      case 09:
        padavine.SEP = padavine.SEP + Number(item.PADAVINE)
        break;
      case 10:
        padavine.OKT = padavine.OKT + Number(item.PADAVINE)
        break;
      case 11:
        padavine.NOV = padavine.NOV + Number(item.PADAVINE)
        break;
      case 12:
        padavine.DEC = padavine.DEC + Number(item.PADAVINE)
        break;

    }
  });
  console.log(padavine.JAN, padavine.FEB, padavine.MAR, padavine.APR, padavine.MAJ, padavine.JUN, padavine.JUL, padavine.AVG, padavine.SEP, padavine.OKT, padavine.NOV, padavine.DEC);
  chart1.updateOptions({
    series: [

      {
        name: "",
        type: 'column',
        data: [padavine.JAN, padavine.FEB, padavine.MAR, padavine.APR, padavine.MAJ, padavine.JUN, padavine.JUL, padavine.AVG, padavine.SEP, padavine.OKT, padavine.NOV, padavine.DEC]

      },
    ]
    })
}

//function Cartovi(){

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
      name: "",
      type: 'column',
      data: [5, 19, 27, 26, 34, 35, 40, 38, 33, 12, 22, 33]
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
    categories: ['Jan','Feb','Mar','Apr','Maj','Jun','Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec']
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
//}
