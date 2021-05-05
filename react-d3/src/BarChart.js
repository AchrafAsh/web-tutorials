import React, { useRef, useEffect, useState } from "react";
import { select, axisRight, axisBottom, scaleLinear, scaleBand } from "d3";
import useResizeObserver from "./useResizeObserver";

export default ({ data }) => {
  const svgRef = useRef(); // contains svg DOM element
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // function called on mount and on every data update
  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, dimensions.width]) // needs to be dynamic
      .padding(0.5);

    // scales definition
    const yScale = scaleLinear()
      .domain([0, dimensions.height]) // todo: data is props we don't know max and min
      .range([150, 0]); // needs to be dynamic

    const colorScale = scaleLinear()
      .domain([0, 75, 150])
      .range(["red", "orange", "green"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${dimensions.width}px)`)
      .call(yAxis);

    // creating the barchart
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (value, index) => {
        svg
          .selectAll(".tooltip")
          .data([value])
          .join(enter => enter.append("text").attr("y", yScale(value)))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("opacity", 1)
          .attr("y",value => yScale(value) - 10);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => dimensions.height - yScale(value));
  }, [data, dimensions]); // called on data and dimensions change

  return (
    <div ref={wrapperRef} className="barchart">
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};
