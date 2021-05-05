import React, { useRef, useEffect } from "react";
import { select, scaleBand, scaleLinear, max } from "d3";
import useResizeObserver from "./useResizeObserver";

export default ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    // sort data
    data.sort((a, b) => b.value - a.value);

    // define scales
    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((value, index) => index))
      .range([0, dimensions.height]);

    const xScale = scaleLinear()
      .domain([0, max(data, entry => entry.value)])
      .range([0, dimensions.width]);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data, (entry, index) => entry.name)
      .join(enter =>
        enter.append("rect").attr("y", (entry, index) => yScale(index))
      )
      .attr("fill", entry => entry.color)
      .attr("class", "bar")
      .attr("x", 0)
      .attr("height", yScale.bandwidth())
      .transition()
      .attr("width", entry => xScale(entry.value))
      .attr("y", (entry, index) => yScale(index));

    // draw labels
    svg
      .selectAll(".label")
      .data(data, (entry, index) => entry.name)
      .join(enter =>
        enter
          .append("text")
          .attr("y", (entry, index) => yScale(index) + yScale.bandwidth() * 0.7)
      )
      .text(entry => `🦄 ${entry.name} (${entry.value} meters)`)
      .attr("class", "label")
      .attr("x", 10)
      .transition()
      .attr("y", (entry, index) => yScale(index) + yScale.bandwidth() * 0.7)
      .attr("font-weight", "bold");
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} className="wrapper">
      <svg ref={svgRef}></svg>
    </div>
  );
};
