var width = 740;
var height = 635;
makeSVG(data40, ".wrapper-40", "4bd1f6");
makeSVG(data41, ".wrapper-41", "4bd6fb");
makeSVG(data42, ".wrapper-42", "04a08c");

function makeSVG(dataNum, wrapper, linkColor) {
	var linkColor = linkColor;
	var svg = d3.select(wrapper).append("svg").attr("width", width).attr("height", height);
	var links = svg.selectAll("line").data(dataNum.Links).enter().append("line").attr("class", "link").attr("x1", function(d, i) {
		return dataNum.Powers[dataNum.Links[i][0]].X
	}).attr("y1", function(d, i) {
		return dataNum.Powers[dataNum.Links[i][0]].Y
	}).attr("x2", function(d, i) {
		return dataNum.Powers[dataNum.Links[i][1]].X
	}).attr("y2", function(d, i) {
		return dataNum.Powers[dataNum.Links[i][1]].Y
	}).attr("data-from", function(d, i) {
		return d[0]
	}).attr("data-to", function(d, i) {
		return d[1]
	});
	var arr = Object.keys(dataNum.Powers);
	var borders = svg.selectAll(".border").data(arr).enter().append("image").attr("width", function(d) {
		if (dataNum.Powers[d].Border == 1) {
			return 88
		} else {
			if (dataNum.Powers[d].Border == 2) {
				return 92
			} else {
				return 60
			}
		}
	}).attr("class", function(d) {
		if (dataNum.Powers[d].Border == 2) {
			return "active";
		} else {
			return "border";
		}
	}).attr("id", function(d, i) {
		return "border" + d;
	}).attr("height", function(d) {
		if (dataNum.Powers[d].Border == 1) {
			return 88
		} else {
			if (dataNum.Powers[d].Border == 2) {
				return 92
			} else {
				return 60
			}
		}
	}).attr("x", function(d) {
		if (dataNum.Powers[d].Border == 1) {
			return dataNum.Powers[d].X - 44
		} else {
			if (dataNum.Powers[d].Border == 2) {
				return dataNum.Powers[d].X - 46
			} else {
				return dataNum.Powers[d].X - 30
			}
		}
	}).attr("y", function(d) {
		if (dataNum.Powers[d].Border == 1) {
			return dataNum.Powers[d].Y - 44
		} else {
			if (dataNum.Powers[d].Border == 2) {
				return dataNum.Powers[d].Y - 46
			} else {
				return dataNum.Powers[d].Y - 30
			}
		}
	}).attr("xlink:href", function(d) {
		if (dataNum.Powers[d].Border == 1) {
			return "http://www.myriptide.com/artifact-simulator/img/dragon_border.png"
		} else if (dataNum.Powers[d].Border == 2) {
			return "http://www.myriptide.com/artifact-simulator/img/start_border.png"
		} else {
			return "http://www.myriptide.com/artifact-simulator/img/normal_border.png"
		}
	});
	var $E = function() {
		var c = $E.caller;
		while (c.caller) {
			c = c.caller
		}
		return c.arguments[0]
	};
	__defineGetter__("event", $E);
	var powers = svg.selectAll("circle").data(arr).enter().append("circle").attr("r", 20).attr("cx", function(d) {
		return dataNum.Powers[d].X
	}).attr("class", function(d) {
		if (dataNum.Powers[d].Border == 2) {
			return "active";
		} else {
			return "power";
		}
	}).attr("id", function(d, i) {
		return "power" + d;
	}).attr("cy", function(d) {
		return dataNum.Powers[d].Y
	}).attr("fill", function(d) {
		return "url(#pattern" + d + ")"
	}).style("cursor", "pointer").on("mousedown", function(d, i) {
		if (d3.select(this).attr("class") == "active" || d3.select(this).attr("data-role") == "unlocked") {
			clickFunctions(event, d, i);
		}
	}).on("mouseover", function(d, i) {
		var desc = dataNum.Powers[d].Desc[currentRank[i]];
		if (currentRank[i] >= dataNum.Powers[d].MaxRank) {
			desc = dataNum.Powers[d].Desc[dataNum.Powers[d].MaxRank]
		}
		tooltip.html("<h3>" + dataNum.Powers[d].Title + "</h3><br/>" + desc).style("left", (d3.event.pageX) - 100 + "px").style("top", (d3.event.pageY + 50) + "px").style("display", "block")
	}).on("mousemove", function(d) {
		tooltip.style("left", (d3.event.pageX) - 100 + "px").style("top", (d3.event.pageY + 50) + "px")
	}).on("mouseout", function(d) {
		tooltip.style("display", "none")
	});
	var imgWidth = 40;
	var imgHeight = 40;
	var patterns = svg.selectAll("defs").data(arr).enter().append("defs").append("pattern").attr("id", function(d) {
		return "pattern" + d
	}).attr("patternUnits", "userSpaceOnUse").attr("width", 40).attr("height", 40).attr("x", function(d) {
		return dataNum.Powers[d].X - 20
	}).attr("y", function(d) {
		return dataNum.Powers[d].Y - 20
	}).append("image").attr("width", imgWidth).attr("height", imgHeight).attr("xlink:href", function(d) {
		return "http://www.myriptide.com/artifact-simulator/img/" + spells[dataNum.Powers[d].Spell] + ".jpg"
	});
	var rankHolders = svg.selectAll(".rankHolders").data(arr).enter().append("rect").attr("x", function(d) {
		return dataNum.Powers[d].X - 20
	}).attr("y", function(d) {
		return dataNum.Powers[d].Y + 20
	}).attr("width", 40).attr("height", 20).attr("fill", "#212121");
	var currentRank = new Array(arr.length);
	for (var i = 0; i < currentRank.length; i++) {
		currentRank[i] = 0
	}
	var check = new Array(arr.length);
	var node = new Array(arr.length);
	var ranks = svg.selectAll(".rankText").data(arr).enter().append("text").attr("class", "rankText").attr("x", function(d) {
		return dataNum.Powers[d].X
	}).attr("y", function(d) {
		return dataNum.Powers[d].Y
	}).attr("dx", -10).attr("dy", 35).text(function(d, i) {
		return currentRank[i] + "/" + dataNum.Powers[d].MaxRank
	}).attr("id", function(d, i) {
		return "rank" + d
	}).style("font-weight", "bold").style("fill", "#fff").style("font-size", "14px");
	var tooltip = d3.select(".page-container").append("div").attr("class", "tooltip").style("display", "none");
	document.oncontextmenu = stop;

	function clickFunctions(event, d, i) {
		e = event;
		var mouseEvent = event.button;
		var desc;
		var isMax;
		/*left click*/
		if (currentRank[i] < dataNum.Powers[d].MaxRank && mouseEvent == 0) {
			d3.select(wrapper).select("#power" + d).attr("class", "active");
			d3.select(wrapper).select("#border" + d).attr("class", "active");
			if (currentRank[i] > dataNum.Powers[d].MaxRank - 2) {
				desc = dataNum.Powers[d].Desc[dataNum.Powers[d].MaxRank];
				isMax = true;
				node[i] = d;
			} else {
				desc = dataNum.Powers[d].Desc[currentRank[i] + 1];
				isMax = false;
			}
			tooltip.html("<h3>" + dataNum.Powers[d].Title + "</h3><br/>" + desc);
			currentRank[i] += 1;
			check[i] = d;
			links.attr("", function(d, i) {
				for (var j = 0; j < arr.length; j++) {
					if (d[0] == check[j]) {
						if (isMax) {
							d3.select(wrapper).select("#power" + d[1]).attr("class", "active").attr("data-role", "unlocked");
							d3.select(wrapper).select("#border" + d[1]).attr("class", "active").attr("data-role", "unlocked");
						}
					} else if (d[1] == check[j]) {
						d3.select(wrapper).select("#power" + d[0]).attr("class", "active");
						d3.select(wrapper).select("#border" + d[0]).attr("class", "active");
					}
				}
			})
			renderLinks(node);
		}
		/*right click*/
		if (currentRank[i] > 0 && mouseEvent == 2) {
			if (d == arr[0]) {
				resetAll(dataNum, wrapper, linkColor);
			}else{
				node[i] = "";
				if (currentRank[i] > 2 + dataNum.Powers[d].MaxRank) {
					desc = dataNum.Powers[d].Desc[dataNum.Powers[d].MaxRank]
				} else {
					desc = dataNum.Powers[d].Desc[currentRank[i] - 1]
				}
				tooltip.html("<h3>" + dataNum.Powers[d].Title + "</h3><br/>" + desc);
				currentRank[i] -= 1;
				var currentPower = d;
				if (currentRank[i] == 0) {
					if (dataNum.Powers[d].Border != 2 && d3.select(wrapper).select("#power" + d).attr("data-role") != "unlocked") {
						d3.select(wrapper).select("#power" + d).attr("class", "power");
						d3.select(wrapper).select("#border" + d).attr("class", "border");
					}
					if (currentPower!=check[0]) {check[i] = "";}
					renderPowers(node, check, d, i);
					renderLinks(node);
				}
			}
		}
		/*******/

		ranks.text(function(d, i) {
			return currentRank[i] + "/" + dataNum.Powers[d].MaxRank
		});
		ranks.style("fill", function(d, i) {
			if (currentRank[i] > 0) {
				return "#2fc989"
			} else {
				return "#fff"
			}
		})
	};

	function renderPowers(node, check, d, i) {
		powers.attr("", function(d, i) {
			var _power = d;
			var _num = i;
			var init = true;
			var checkZero;
			var checkOne;
			links.attr("data-init", function(d, i) {
				if (_power == d[0]) {
					if (checkPower(d[1])) {
						init = false;
						checkZero = true;
					}
				} else if (_power == d[1] && init) {
					if (checkPower(d[0])) {
						checkOne = true;
					}
				}
			})

			if (!checkZero && !checkOne) {
				for (var j = 1; j < node.length; j++) {
					if (j == _num) {
						node[j] = "";
						currentRank[j] = 0;
						check[j] = "";
					}
				}
			}

		})

		for (var i = 0; i < check.length; i++) {
			if (!check[i]) {
				var _id = i + parseInt(arr[0]);
				d3.select(wrapper).select("#power" + _id).attr("class", "power").attr("data-role", "");
				d3.select(wrapper).select("#border" + _id).attr("class", "border").attr("data-role", "");
				if (currentRank[0]) {
					links.attr("", function(d, i) {
						if (d[0] == check[0]) {
							d3.select(wrapper).select("#power" + d[1]).attr("class", "active").attr("data-role", "unlocked");
							d3.select(wrapper).select("#border" + d[1]).attr("class", "active").attr("data-role", "unlocked");
						}
					})
				}
			};
		};
	}

	/*check whether the power is in the node array*/
	function checkPower(power) {
		for (var i = 0; i < node.length; i++) {
			if (power == node[i]) {
				return true
			}
		}
	}

	function renderLinks(node) {
		links.style("stroke", function(d, i) {
			for (var j = 0; j < node.length; j++) {
				if (d[0] == node[j] || d[1] == node[j]) {
					return linkColor
				}
			}
		}).style("opacity", function(d, i) {
			for (var j = 0; j < node.length; j++) {
				if (d[0] == node[j] || d[1] == node[j]) {
					return 1
				}
			}
		})
	}

	function resetAll(dataNum, wrapper, linkColor){
		document.querySelector(wrapper).innerHTML = '';
		var tooltips = document.querySelectorAll('.tooltip');
		for (var i = 0; i < tooltips.length; i++) {
			tooltips[i].style.display="none";
		}
		makeSVG(dataNum,wrapper, linkColor);
	}
}

function stop() {
	return false
}