"use client";

import { useRef, type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer?: ReactNode;
  answerHtml?: string;
};

/**
 * Native <details> accordion with exclusive-open behavior,
 * matching the original script.js FAQ logic.
 */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const refs = useRef<(HTMLDetailsElement | null)[]>([]);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <details
          key={i}
          className="faq-item"
          ref={(el) => {
            refs.current[i] = el;
          }}
          onToggle={(e) => {
            const el = e.currentTarget;
            if (el.open) {
              refs.current.forEach((other, j) => {
                if (other && j !== i && other.open) other.open = false;
              });
            }
          }}
        >
          <summary>{item.question}</summary>
          <div className="faq-answer">
            {item.answerHtml ? (
              <span dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
            ) : (
              item.answer
            )}
          </div>
        </details>
      ))}
    </div>
  );
}