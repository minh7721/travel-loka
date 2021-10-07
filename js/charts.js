new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Phú Quốc",
        backgroundColor: [
            "rgba(255, 0, 0, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(255, 0, 0, 1)",
            
          ],
        data: [955, 445, 634, 465],
      },
      {
        label: "Nha Trang",
        backgroundColor: [
            "rgba(0, 255, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 255, 0, 1)",
          ],
        data: [827, 536, 876, 765],
      },
      {
        label: "Đà Nẵng",
        backgroundColor: [
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 1)",
        ],
        data: [737, 876, 455, 899],
      },
      {
        label: "Đà Lạt",
        backgroundColor: [
            "rgba(255, 255, 0, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(255, 255, 0, 1)",
          ],
        data: [544, 965, 555, 454],
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "bottom"
    },
    title: {
      display: true,
      text: "MinhHN",
      position: "bottom",
      fontSize: 30,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
