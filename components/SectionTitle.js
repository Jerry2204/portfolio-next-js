import React from "react";

export default function SectionTitle({ children, paragraf }) {
  return (
    <div data-aos="fade-down" data-aos-delay="200">
      <h2 className="text-2xl font-semibold font-mono text-center">
        {children}
      </h2>
      <p className="text-center text-gray-500">{paragraf}</p>
    </div>
  );
}
