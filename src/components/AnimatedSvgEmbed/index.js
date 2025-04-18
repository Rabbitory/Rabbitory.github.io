import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AnimatedSvgEmbed({ svgName, altText }) {
  // Construct the correct URL path to the SVG in the static/img directory
  const svgUrl = useBaseUrl(`/img/${svgName}`);

  // Using <object> tag instead of <img>
  return (
    <object
      type="image/svg+xml"
      data={svgUrl}
      aria-label={altText} // Use aria-label for accessibility with <object>
    >
      {altText}
    </object>
  );
}