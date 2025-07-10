import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-secondary text-sm tracking-wide mt-4">{subHeading}</p>
      <h2 className="text-4xl md:text-5xl font-instrument-serif tracking-wide">{heading}</h2>
    </div>
  );
}
