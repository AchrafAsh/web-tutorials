import React, { useEffect, useRef } from "react";
import { select, hierarchy, tree, linkHorizontal } from "d3";
import useResizeObserver from "./useResizeObserver";

export default ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const root = hierarchy(data);

    const treeLayout = tree().size([dimensions.height, dimensions.width]);
    treeLayout(root);
    console.log(root.descendants());

    const linkGenerator = linkHorizontal()
      //   .source(link => link.source)
      //   .target(link => link.target)
      .x(node => node.y)
      .y(node => node.x);

    // rendering nodes
    svg
      .selectAll(".node")
      .data(root.descendants())
      .join("circle")
      .attr("class", "node")
      .attr("r", 4)
      .attr("fill", "black")
      .attr("cx", node => node.y)
      .attr("cy", node => node.x)
      .attr("opacity", 0)
      .transition()
      .delay(node => node.depth * 500)
      .attr("opacity", 1);

    // rendering links
    svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("d", linkGenerator)
      .attr("stroke-dasharray", function() {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke-dashoffset", function() {
        return this.getTotalLength();
      })
      .transition()
      .duration(500)
      .delay(linkObj => linkObj.source.depth * 500)
      .attr("stroke-dashoffset", 0);

    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join("text")
      .attr("class", "label")
      .text(node => node.data.name)
      .attr("x", node => node.y)
      .attr("y", node => node.x - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "24px")
      .attr("opacity", 0)
      .transition()
      .delay(node => node.depth * 500)
      .attr("opacity", 1);
  }, [data, dimensions]);
  return (
    <div className="wrapper" ref={wrapperRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
};
