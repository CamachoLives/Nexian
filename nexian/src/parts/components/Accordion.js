"use client";
import { useId, useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const baseId = useId();

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordions">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div className={`accordion-item ${isActive ? "accordion-active" : ""}`} key={item.id ?? index}>
            <button
              type="button"
              id={buttonId}
              className="accordion-title"
              aria-expanded={isActive}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
            >
              {item.title}
            </button>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-content">
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
