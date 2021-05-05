import React, { useRef, useEffect } from "react";
import { select, arc, pie, interpolate } from "d3";
import useResizeObserver from "./useResizeObserver";

export default ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const arcGenerator = arc()
      .innerRadius(75)
      .outerRadius(150);

    const pieGenerator = pie()
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI)
      .sort(null);

    const instructions = pieGenerator(data);

    svg
      .selectAll(".slice")
      .data(instructions)
      .join("path")
      .attr("class", "slice")
      .attr("fill", (instruction, index) => (index == 0 ? "#eee" : "#ffcc00"))
      .style(
        "transform",
        `translate(${dimensions.width * 0.5}px, ${dimensions.height}px)`
      )
      .transition()
      .attrTween("d", function(nextInstruction) {
        const interpolator = interpolate(this.lastInstruction, nextInstruction);
        this.lastInstruction = interpolator(1);
        return t => {
          return arcGenerator(interpolator(t));
        };
      });
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} className="wrapper">
      <svg ref={svgRef}></svg>
    </div>
  );
};
