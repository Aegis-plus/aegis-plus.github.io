import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="aurora-background" aria-hidden="true">
      <div className="aurora-background__layer aurora-background__layer--one" />
      <div className="aurora-background__layer aurora-background__layer--two" />
      <div className="aurora-background__layer aurora-background__layer--three" />
    </div>
  );
};

export default AuroraBackground;
