
const chartConfig1 = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  fillShadowGradient: "gray",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
      borderRadius: 16
  },
  propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
  }
};
const chartConfig2 = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  fillShadowGradient: "gray",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,   //top bar style
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
      borderRadius: 16
  },
  propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
  }
};


const data1 = [
  {
      name: "Toronto",
      population: 2800000,
      color: "#84A7D0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      fillShadowGradient: "gray",
  },
  {
      name: "Beijing",
      population: 5276125,
      color: "#D38583",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "New York",
      population: 8538000,
      color: "#B9D08A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "Moscow",
      population: 11920000,
      color: "#00C0EF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  }
];

const data2 = [
  {
      name: "Toronto",
      population: 45232,
      color: "#84A7D0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      fillShadowGradient: "gray",
  },
  {
      name: "Beijing",
      population: 64323,
      color: "#D38583",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "New York",
      population: 34562,
      color: "#B9D08A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "Moscow",
      population: 34634,
      color: "#00C0EF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  }
];

const data3 = [
  {
      name: "Toronto",
      population: 321121,
      color: "#84A7D0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      fillShadowGradient: "gray",
  },
  {
      name: "Beijing",
      population: 634322,
      color: "#D38583",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "New York",
      population: 435622,
      color: "#B9D08A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "Moscow",
      population: 119200,
      color: "#00C0EF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  }
];

const data4 = [
  {
      name: "Toronto",
      population: 46532,
      color: "#84A7D0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      fillShadowGradient: "gray",
  },
  {
      name: "Beijing",
      population: 54677,
      color: "#D38583",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "New York",
      population: 22355,
      color: "#B9D08A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  },
  {
      name: "Moscow",
      population: 15643,
      color: "#00C0EF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
  }
];

  export { data1,data2,data3,data4, chartConfig1, chartConfig2 }