window.onload = function() {
    chart1();
  };

function chart() {
  let mychart = document.getElementById("myChart").getContext("2d");

  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = "#777";

  let barchart = new Chart(mychart, {
    type: "doughnut", // pie, bar, horizontalbar
    data: {
      labels: [
        "Non Toxic",
        "Toxic",
        "Severe Toxic",
        "Obscene",
        "Threat",
        "Insult",
        "Identity Hate"
      ],
      datasets: [
        {
          label: "Toxicity",
          data: [124473, 15294, 1595, 8449, 478, 7877, 1405],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(150, 10, 200, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(200, 150, 150, 0.6)"
          ],
          borderWidth: 0.5,
          borderColor: "#777",
          hoverBorderWidth: 2,
          hoverBorderColor: "#000"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Toxicity Distribution",
        fontSize: 25
      },
      tooltips: {
        enabled: true
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#000"
        }
      },
      layout:{
          padding:{
              left:0,
              right:0,
              bottom:0,
              top:0
          }
      },
    }
  });
}

function chart1() {
    console.log("Called")

    let coloR = [];
    
    let data = [
    "90686",
    "71327",
    "55195",
    "34472",
    "30740",
    "29046",
    "28985",
    "28502",
    "28500",
    "27483",
    "25614",
    "20941",
    "20588",
    "20334",
    "19700",
    "19526",
    "19127",
    "18232",
    "18169",
    "17286",
    "15838",
    "15712",
    "15125",
    "14294",
    "13899",
    "13555",
    "13484",
    "13365",
    "12973",
    "12911",
    "12607",
    "12418",
    "12392",
    "11709",
    "11696",
    "11680",
    "11578",
    "11470",
    "11395",
    "11342",
    "11289",
    "11066",
    "11037",
    "10838",
    "10813",
    "10507",
    "10454",
    "10385",
    "10308",
    "10117"
    ];
    let label = [
        "not",
        "article",
        "page",
        "wikipedia",
        "talk",
        "one",
        "please",
        "would",
        "no",
        "like",
        "dont",
        "see",
        "source",
        "think",
        "also",
        "know",
        "im",
        "time",
        "people",
        "edit",
        "use",
        "make",
        "may",
        "get",
        "say",
        "need",
        "thanks",
        "user",
        "even",
        "name",
        "link",
        "want",
        "good",
        "way",
        "well",
        "information",
        "could",
        "image",
        "go",
        "comment",
        "editor",
        "section",
        "deletion",
        "help",
        "thing",
        "question",
        "first",
        "u",
        "fact",
        "look"
      ]
    
    let dynamicColors = function() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
    };

    for (let i in data) {
    coloR.push(dynamicColors());
    }

  let mychart = document.getElementById("myChart").getContext("2d");

  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = "#777";

  let barchart = new Chart(mychart, {
    type: "bar", // pie, bar, horizontalbar
    data: {
      labels: label,
      datasets: [
        {
          label: "Occurrence",
          data: data,
          backgroundColor: coloR,
          borderWidth: 0.5,
          borderColor: "#777",
          hoverBorderWidth: 2,
          hoverBorderColor: "#000"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Most Occured Words",
        fontSize: 25
      },
      tooltips: {
        enabled: true
      },
      legend: {
        display: false,
        position: "left",
        labels: {
          fontColor: "#000"
        }
      }
      // layout:{
      //     padding:{
      //         left:0,
      //         right:0,
      //         bottom:0,
      //         top:0
      //     }
      // },
    }
  });
}
