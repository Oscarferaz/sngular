// ResultDisplay.tsx
import React from 'react';

type ResultDisplayProps = {
  result: string | null;
};

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => (    
  <p>{result}</p>

);
