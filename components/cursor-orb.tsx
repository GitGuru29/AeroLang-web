"use client";

import { useEffect, useState } from "react";

const trailCount = 7;

export function CursorOrb() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [showTrail, setShowTrail] = useState(false);
  const [trail, setTrail] = useState(() =>
    Array.from({ length: trailCount }, () => ({ x: -100, y: -100 })),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      return;
    }

    let frameId = 0;
    let isPointerActive = false;
    let pointer = { x: -100, y: -100 };
    let dots = Array.from({ length: trailCount }, () => ({ x: -100, y: -100 }));

    function isExcludedArea(x: number, y: number) {
      const element = document.elementFromPoint(x, y);
      return Boolean(element?.closest('[data-cursor-exclude="true"]'));
    }

    function handleMove(event: MouseEvent) {
      pointer = { x: event.clientX, y: event.clientY };
      isPointerActive = true;
      setPosition(pointer);
      setActive(true);
      setShowTrail(!isExcludedArea(event.clientX, event.clientY));
    }

    function handleLeave() {
      isPointerActive = false;
      setActive(false);
      setShowTrail(false);
    }

    function animate() {
      if (isPointerActive) {
        dots = dots.map((dot, index) => {
          const leader = index === 0 ? pointer : dots[index - 1];
          const ease = 0.22 - index * 0.02;

          return {
            x: dot.x + (leader.x - dot.x) * ease,
            y: dot.y + (leader.y - dot.y) * ease,
          };
        });

        setTrail(dots);
      }

      frameId = window.requestAnimationFrame(animate);
    }

    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      {showTrail &&
        trail.map((dot, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="cursor-trail-dot"
            style={{
              transform: `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${1 - index * 0.09})`,
              opacity: 0.3 + (trailCount - index) * 0.08,
            }}
          />
        ))}
      <div
        aria-hidden="true"
        className={`cursor-orb ${active ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <span className="cursor-orb-ring" />
        <span className="cursor-orb-core" />
      </div>
    </>
  );
}
