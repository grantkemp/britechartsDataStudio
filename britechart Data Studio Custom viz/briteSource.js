
// build the element to inject the chart into 
var chartElement = document.createElement('div');
chartElement.id = 'containerViz';
document.body.appendChild(chartElement);


function drawViz(vizData) {
// This is the actual drawing code 
  console.log("vizData " + JSON.stringify(vizData))
 console.log("getting height")

 //get height and width from helper library
  var height = dscc.getHeight();
  var width = dscc.getWidth();
  document.getElementById('containerViz').style.width = width;
  document.getElementById('containerViz').style.height = height;

  console.log(`height is ${height} and width is ${width}`);
  const barChart = britecharts.bar();
  const container = d3.select('.containerViz');

  // Configure chart
  barChart
      .isHorizontal(true)
      .height(width)
      .width(height);


 console.log("barChart")
  console.log("here2")
      // Use sample data to make it easier to test
      const barData = [
        { name: 'Luminous', value: 2 },
        { name: 'Glittering', value: 5 },
        { name: 'Intense', value: 4 },
        { name: 'Radiant', value: 3 }
    ];
    console.log("here3");

      container.datum(barData).call(barChart);

}
// subscribe to data and style changes.
dscc.subscribeToData(drawViz, {
  transform: dscc.objectTransform
});