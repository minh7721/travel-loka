var xValues = ['Phở','Bánh Mỳ','Món ăn khác'];
var yValues = [30,10,60];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    },
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
  }
});