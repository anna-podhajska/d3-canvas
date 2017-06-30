//hello!

$(document).ready(color);
var currenColorScheme = colorSchemeGreen;

var mouseDown = false;

var grid = d3.select("#grid")
	.append("svg")
	.attr("width","1410px")
	.attr("height","620px");

var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");

var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("circle") //can be 'square'
	.attr("class","square")
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; })
	// .attr("width", function(d) { return d.width; })
	// .attr("height", function(d) { return d.height; })
  .attr("r", "5") //only for circle
	.style("fill", "#fff")
	.style("stroke", "lightgray")
  .style("stroke", "50%")

  .on('mouseover', function(d) {
		if (mouseDown === true) {
			currenColorScheme(this, d);
		}
  })

	.on('click', function(d) {
		d3.select(this).style('fill', '#ce5a57');
	});


// function that reacts to the color change button click on html:
	function color() {
		$("#paintRed").click(function(){
			currenColorScheme = colorSchemeRed;
		});
		$("#paintGreen").click(function(){
			currenColorScheme = colorSchemeGreen;
		});
		$("#paintYellow").click(function(){
			currenColorScheme = colorSchemeYellow;
		});
		//this part makes sure that we paint when the mouse is down
		$("#grid").mousedown(function(){
			mouseDown = true;
		});
		$("#grid").mouseup(function(){
			mouseDown = false;
		});
	};

//turning off right-mouse click:
	$('#grid').on('contextmenu', function(d) {
		return false;
	});

// color schemes for painting each color, the colors darken if you hover more than one time:
	function colorSchemeGreen(domElement, dataCell) {
		if ((dataCell.click)%12 == 0 ) { d3.select(domElement).style("fill","#caf7f7"); }
		if ((dataCell.click)%12 == 1 ) { d3.select(domElement).style("fill","#b8d3d3"); }
		if ((dataCell.click)%12 == 2 ) { d3.select(domElement).style("fill","#99afaf"); }
		if ((dataCell.click)%12 == 3 ) { d3.select(domElement).style("fill","#758787"); }
		if ((dataCell.click)%12 == 4 ) { d3.select(domElement).style("fill","#576666"); }
		if ((dataCell.click)%12 == 5 ) { d3.select(domElement).style("fill","#384242"); }
		if ((dataCell.click)%12 == 6 ) { d3.select(domElement).style("fill","#1c2121"); }
		if ((dataCell.click)%12 == 7 ) { d3.select(domElement).style("fill","#060707"); }
		if ((dataCell.click)%12 == 8 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 9 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 10 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 11 ) { d3.select(domElement).style("fill","black"); }

		if ((dataCell.click) < 11) {
		dataCell.click ++;   };
	}

	function colorSchemeRed(domElement, dataCell) {
		if ((dataCell.click)%12 == 0 ) { d3.select(domElement).style("fill","#ffb4b2"); }
		if ((dataCell.click)%12 == 1 ) { d3.select(domElement).style("fill","#e29c9a"); }
		if ((dataCell.click)%12 == 2 ) { d3.select(domElement).style("fill","#bf8180"); }
		if ((dataCell.click)%12 == 3 ) { d3.select(domElement).style("fill","#9b6766"); }
		if ((dataCell.click)%12 == 4 ) { d3.select(domElement).style("fill","#7c4e4d"); }
		if ((dataCell.click)%12 == 5 ) { d3.select(domElement).style("fill","#5e3b3a"); }
		if ((dataCell.click)%12 == 6 ) { d3.select(domElement).style("fill","5e3b3a"); }
		if ((dataCell.click)%12 == 7 ) { d3.select(domElement).style("fill","#3f2121"); }
		if ((dataCell.click)%12 == 8 ) { d3.select(domElement).style("fill","#231212"); }
		if ((dataCell.click)%12 == 9 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 10 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 11 ) { d3.select(domElement).style("fill","black"); }

		if ((dataCell.click) < 11) {
		dataCell.click ++;   };
	}

	function colorSchemeYellow(domElement, dataCell) {
		if ((dataCell.click)%12 == 0 ) { d3.select(domElement).style("fill","#ffdc93"); }
		if ((dataCell.click)%12 == 1 ) { d3.select(domElement).style("fill","#f4d084"); }
		if ((dataCell.click)%12 == 2 ) { d3.select(domElement).style("fill","#d8b66e"); }
		if ((dataCell.click)%12 == 3 ) { d3.select(domElement).style("fill","#bf9f5b"); }
		if ((dataCell.click)%12 == 4 ) { d3.select(domElement).style("fill","#a88a4a"); }
		if ((dataCell.click)%12 == 5 ) { d3.select(domElement).style("fill","#91753b"); }
		if ((dataCell.click)%12 == 6 ) { d3.select(domElement).style("fill","7a612d"); }
		if ((dataCell.click)%12 == 7 ) { d3.select(domElement).style("fill","#664f21"); }
		if ((dataCell.click)%12 == 8 ) { d3.select(domElement).style("fill","#473613"); }
		if ((dataCell.click)%12 == 9 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 10 ) { d3.select(domElement).style("fill","black"); }
		if ((dataCell.click)%12 == 11 ) { d3.select(domElement).style("fill","black"); }

		if ((dataCell.click) < 11) {
		dataCell.click ++;   };
	}

	// function colorSchemeClear(domElement, dataCell) {
	// 	if ((dataCell.click)%12 == 0 ) { d3.select(domElement).style("fill","white"); }
	// }

//INITIALIZING THE BOARD according to the turtorial by Chuck Grimmett:

  function gridData() {
  	var data = new Array();
  	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  	var ypos = 1;
  	var width = 10;
  	var height = 10;
    var click= 0;

  	// iterate for rows
  	for (var row = 0; row < 60; row++) {
  		data.push( new Array() );

  		// iterate for cells/columns inside rows
  		for (var column = 0; column < 160; column++) {
  			data[row].push({
  				x: xpos,
  				y: ypos,
  				width: width,
  				height: height,
          click: click
  			})
  			// increment the x position. I.e. move it over by 50 (width variable)
  			xpos += width;
  		}
  		// reset the x position after a row is complete
  		xpos = 1;
  		// increment the y position for the next row. Move it down 50 (height variable)
  		ypos += height;
  	}
  	return data;

  }

//RESOURCES:
	// https://d3js.org
	// http://www.cagrimmett.com/til/2016/08/17/d3-lets-make-a-grid.html
