import React, { useRef, useEffect, useState } from 'react';
import {
  select,
  geoPath,
  geoOrthographic,
  geoMercator,
  min,
  max,
  scaleLinear,
} from 'd3';
import useResizeObserver from './useResizeObserver';

export default ({ data, property }) => {
  const wrapperRef = useRef();
  const svgRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const minProp = min(
      data.features,
      (feature) => feature.properties[property]
    );
    const maxProp = max(
      data.features,
      (feature) => feature.properties[property]
    );
    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range(['#ccc', 'red']);

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoOrthographic()
      .fitSize([width, height], selectedCountry || data)
      .precision(100);
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll('.country')
      .data(data.features)
      .join('path')
      .on('click', (feature) =>
        setSelectedCountry(selectedCountry === feature ? null : feature)
      )
      .attr('class', 'country')
      .transition()
      .attr('fill', (feature) => colorScale(feature.properties[property]))
      .attr('d', (feature) => pathGenerator(feature));

    svg
      .selectAll('.label')
      .data([selectedCountry])
      .join('text')
      .attr('class', 'label')
      .transition()
      .text(
        (feature) =>
          feature &&
          feature.properties.name +
            ' : ' +
            feature.properties[property].toLocaleString()
      )
      .attr('x', 10)
      .attr('y', 25);
  }, [data, property, dimensions, selectedCountry]);

  return (
    <div className='wrapper' ref={wrapperRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
};
