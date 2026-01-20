"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import type { PointerEvent } from "react";

type Partner = {
  name: string;
  href: string;
  logo: string;
};

const PARTNERS: Partner[] = [
  { name: "Orange Cyberdefense", href: "https://sensepost.com/", logo: "/orange.svg" },
  { name: "TAPTIC", href: "https://taptic.org", logo: "/taptic.svg" },
  { name: "SUN Computer Science", href: "https://cs.sun.ac.za/", logo: "/sun_cs.svg" },
  { name: "Subverted Academy", href: "https://academy.subverted.io/", logo: "/subverted.svg" },
];

const REPEAT_COUNT = 3;
const SCROLL_SPEED = 60; // pixels per second

export default function PartnersMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const partners = useMemo(
    () => Array.from({ length: REPEAT_COUNT }, () => PARTNERS).flat(),
    []
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let baseWidth = 0;

    const measure = () => {
      baseWidth = container.scrollWidth / REPEAT_COUNT;
    };

    const jumpToRandomStart = () => {
      measure();
      if (!baseWidth) return;
      const randomOffset = Math.random() * baseWidth;
      container.scrollLeft = baseWidth + randomOffset;
    };

    const handleResize = () => {
      const progress = baseWidth ? (container.scrollLeft % baseWidth) / baseWidth : 0;
      measure();
      if (!baseWidth) return;
      container.scrollLeft = baseWidth + progress * baseWidth;
    };

    const wrapScroll = () => {
      if (!baseWidth) return;
      const maxScroll = baseWidth * (REPEAT_COUNT - 1);

      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft -= baseWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += baseWidth;
      }
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("scroll", wrapScroll);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    requestAnimationFrame(jumpToRandomStart);

    let frameId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!pausedRef.current && baseWidth) {
        container.scrollLeft += (SCROLL_SPEED * delta) / 1000;

        const maxScroll = baseWidth * (REPEAT_COUNT - 1);
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft -= baseWidth;
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("scroll", wrapScroll);
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };

  const play = () => {
    pausedRef.current = false;
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    pausedRef.current = true;
    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    startScrollRef.current = container.scrollLeft;
    container.setPointerCapture(event.pointerId);
    container.classList.add("cursor-grabbing");
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || !isDraggingRef.current) return;
    const delta = startXRef.current - event.clientX;
    container.scrollLeft = startScrollRef.current + delta;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || !isDraggingRef.current) return;
    isDraggingRef.current = false;
    pausedRef.current = false;
    try {
      container.releasePointerCapture(event.pointerId);
    } catch {
      // ignore if capture was not set
    }
    container.classList.remove("cursor-grabbing");
  };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent"
      />

      <div
        ref={scrollRef}
        className="group flex gap-6 overflow-x-scroll px-1 py-6 scrollbar-none select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseEnter={pause}
        onMouseLeave={play}
        onTouchStart={pause}
        onTouchEnd={play}
      >
        {partners.map((partner, index) => (
          <a
            key={`${partner.name}-${index}`}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative isolate flex min-w-[180px] items-center justify-center border border-purple-900/50 bg-gradient-to-b from-purple-900/20 to-black/70 px-6 py-4 shadow-xl shadow-purple-900/20 transition-transform duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:shadow-purple-700/30"
            onFocus={pause}
            onBlur={play}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/5 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
            <Image
              src={partner.logo}
              alt={partner.name}
              width={180}
              height={72}
              className="h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(147,51,234,0.35)]"
              priority={false}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
