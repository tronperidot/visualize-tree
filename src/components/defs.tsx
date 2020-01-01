import React from 'react';

const Defs: React.FC = () => {
  return (
    <defs>
      <marker
        id="arrow"
        markerUnits="strokeWidth"
        markerWidth="3"
        markerHeight="3"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
      >
        <polygon points="0,0 5,5 0,10 10,5" fill="black" />
      </marker>
    </defs>
  );
};

export default Defs;
