//https://www.d3-graph-gallery.com/graph/scatter_tooltip.html

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 660 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


//*****GRAPH FOR EMPLOYMENT RATE*****//

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("./data/employmentrate_alcohol.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width ]);
  svg.append("g")
    .attr("class", "axisYellow")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 24])
    .range([ height, 0]);
  svg.append("g")
    .attr("class", "axisYellow")
    .call(d3.axisLeft(y));
    

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("padding", "10px")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html(d.country)
      .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (d3.mouse(this)[1]) + "px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data.filter(function(d,i){return i<200})) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.emp); } )
      .attr("cy", function (d) { return y(d.alc); } )
      .attr("r", 7)
      .style("fill", function(d){
        //https://stackoverflow.com/questions/31788706/d3-if-else-to-set-color
        if(d.country == "United States"){
          return "#1993B9";
        } else{
          return "#D33C1D";
        }
      })
      .style("opacity", function(d){
        if(d.country == "United States"){
          return .8;
        } else{
          return .5;
        }
      })
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

    //x label
    //https://stackoverflow.com/questions/11189284/d3-axis-labeling
    svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("employment rate")
    .style('fill', '#FED235');

    //y label
    svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("alcohol consumption")
    .style('fill', '#FED235');

    //regression line equation is y=-0.0652x + 10.516
    //coordinates are (0, 10.516) and (100, 3.996)
    //https://webdva.github.io/how-to-draw-a-line-in-d3js/
    //http://www.d3noob.org/2013/01/making-dashed-line-in-d3js.html for dashed line
    svg.append('line')
    .style("stroke", "#FED235")
    .style("stroke-width", 1)
    .style("stroke-dasharray", ("5, 8"))
    .attr("x1", 0)
    .attr("y1", 249)
    .attr("x2", 520)
    .attr("y2", 390);

})

//******GRAPH FOR SUICIDE RATE ******//

// append the svg object to the body of the page
var svg2 = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("./data/suiciderate_alcohol.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 35])
    .range([ 0, width ]);
  svg2.append("g")
    .attr("class", "axisYellow")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 24])
    .range([ height, 0]);
  svg2.append("g")
    .attr("class", "axisYellow")
    .call(d3.axisLeft(y));
    

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select("#my_dataviz2")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("padding", "10px")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html(d.country)
      .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (d3.mouse(this)[1]) + "px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  // Add dots
  svg2.append('g')
    .selectAll("dot")
    .data(data.filter(function(d,i){return i<200})) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.sui); } )
      .attr("cy", function (d) { return y(d.alc); } )
      .attr("r", 7)
      .style("fill", function(d){
        if(d.country == "United States"){
          return "#1993B9";
        } else{
          return "#D33C1D";
        }
      })
      .style("opacity", function(d){
        if(d.country == "United States"){
          return .8;
        } else{
          return .5;
        }
      })
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

    //x label
    //https://stackoverflow.com/questions/11189284/d3-axis-labeling
    svg2.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("suicide rate")
    .style('fill', '#FED235');

    //y label
    svg2.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("alcohol consumption")
    .style('fill', '#FED235');

    //regression line equation is y=0.2762x + 4.0394
    //coordinates are (0, 4.0394) and (35, 13.7064)
    svg2.append('line')
    .style("stroke", "#FED235")
    .style("stroke-width", 1)
    .style("stroke-dasharray", ("5, 8"))
    .attr("x1", 2)
    .attr("y1", 380)
    .attr("x2", 550)
    .attr("y2", 210);

})

//******GRAPH FOR INCOME RATE ******//

// append the svg object to the body of the page
var svg3 = d3.select("#my_dataviz3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("./data/income_alcohol.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 55000])
    .range([ 0, width ]);
  svg3.append("g")
    .attr("class", "axisYellow")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 24])
    .range([ height, 0]);
  svg3.append("g")
    .attr("class", "axisYellow")
    .call(d3.axisLeft(y));
    

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select("#my_dataviz3")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("padding", "10px")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html(d.country)
      .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (d3.mouse(this)[1]) + "px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  // Add dots
  svg3.append('g')
    .selectAll("dot")
    .data(data.filter(function(d,i){return i<200})) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.inc); } )
      .attr("cy", function (d) { return y(d.alc); } )
      .attr("r", 7)
      .style("fill", function(d){
        if(d.country == "United States"){
          return "#1993B9";
        } else{
          return "#D33C1D";
        }
      })
      .style("opacity", function(d){
        if(d.country == "United States"){
          return .8;
        } else{
          return .5;
        }
      })
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

    //x label
    //https://stackoverflow.com/questions/11189284/d3-axis-labeling
    svg3.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("average annual income")
    .style('fill', '#FED235');

    //y label
    svg3.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("alcohol consumption")
    .style('fill', '#FED235');

    //regression line equation is y=0.0001x + 5.8305
    //coordinates are (0, 5.8305) and (55,000, 11.3305)
    svg3.append('line')
    .style("stroke", "#FED235")
    .style("stroke-width", 1)
    .style("stroke-dasharray", ("5, 8"))
    .attr("x1", 2)
    .attr("y1", 355)
    .attr("x2", 560)
    .attr("y2", 245);

})