"use client";

import { useEffect, useState } from "react";

export function CursorOrb() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      return;
    }

    function handleMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
      setActive(true);
    }

    function handleLeave() {
      setActive(false);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
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
  );
}
