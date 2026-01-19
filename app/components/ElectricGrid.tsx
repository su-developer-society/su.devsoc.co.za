"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

interface Snake {
  // Grid coordinates (integer)
  headX: number;
  headY: number;
  direction: Direction;
  // Progress to next cell (0 to 1)
  progress: number;
  // Trail stores grid coordinates
  trail: { x: number; y: number }[];
  // Length in grid cells
  length: number;
  // Tail shrink progress (0 to 1)
  tailProgress: number;
}

interface ElectricGridProps {
  showLines?: boolean;
  color?: "purple" | "blue" | "green";
}

const GRID_SIZE = 50;
const SNAKE_COUNT = 12;

const getColorValues = (color: string) => {
  switch (color) {
    case "blue":
      return { hex: "#3b82f6", rgb: "59, 130, 246" };
    case "green":
      return { hex: "#22c55e", rgb: "34, 197, 94" };
    case "purple":
    default:
      return { hex: "#9333ea", rgb: "147, 51, 234" };
  }
};

export default function ElectricGrid({ showLines = true, color = "purple" }: ElectricGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakesRef = useRef<Snake[]>([]);
  const animationRef = useRef<number>(0);

  const colorValues = getColorValues(color);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const getCols = () => Math.floor(window.innerWidth / GRID_SIZE);
    const getRows = () => Math.floor(window.innerHeight / GRID_SIZE);

    // Turn perpendicular only
    const turn = (dir: Direction): Direction => {
      if (dir === "up" || dir === "down") {
        return Math.random() > 0.5 ? "left" : "right";
      }
      return Math.random() > 0.5 ? "up" : "down";
    };

    // Next grid cell in direction
    const nextCell = (x: number, y: number, dir: Direction) => {
      switch (dir) {
        case "up": return { x, y: y - 1 };
        case "down": return { x, y: y + 1 };
        case "left": return { x: x - 1, y };
        case "right": return { x: x + 1, y };
      }
    };

    // Check if in bounds
    const inBounds = (x: number, y: number) => {
      const cols = getCols();
      const rows = getRows();
      return x >= 0 && x <= cols && y >= 0 && y <= rows;
    };

    // Convert grid coords to pixel coords (on the grid lines!)
    const toPixel = (gridX: number, gridY: number) => ({
      x: gridX * GRID_SIZE,
      y: gridY * GRID_SIZE,
    });

    // Create a snake with pre-built trail
    const createSnake = (): Snake => {
      const cols = getCols();
      const rows = getRows();
      const dirs: Direction[] = ["up", "down", "left", "right"];
      const length = 3 + Math.floor(Math.random() * 4);
      
      // Start at random position
      let headX = 1 + Math.floor(Math.random() * (cols - 2));
      let headY = 1 + Math.floor(Math.random() * (rows - 2));
      let direction = dirs[Math.floor(Math.random() * 4)];
      
      // Pre-build the trail by simulating backwards
      const trail: { x: number; y: number }[] = [];
      
      // Add head position first
      trail.push({ x: headX, y: headY });
      
      // Build trail backwards from head
      let prevX = headX;
      let prevY = headY;
      
      for (let i = 0; i < length - 1; i++) {
        // Go opposite direction to build trail behind
        let backX = prevX;
        let backY = prevY;
        
        switch (direction) {
          case "up": backY = prevY + 1; break;
          case "down": backY = prevY - 1; break;
          case "left": backX = prevX + 1; break;
          case "right": backX = prevX - 1; break;
        }
        
        // Make sure it's in bounds
        if (inBounds(backX, backY)) {
          trail.unshift({ x: backX, y: backY });
          prevX = backX;
          prevY = backY;
        }
        
        // Randomly change direction for variety in trail shape
        if (Math.random() > 0.5) {
          direction = turn(direction);
        }
      }
      
      // Reset direction based on last two trail points
      if (trail.length >= 2) {
        const last = trail[trail.length - 1];
        const prev = trail[trail.length - 2];
        if (last.x > prev.x) direction = "right";
        else if (last.x < prev.x) direction = "left";
        else if (last.y > prev.y) direction = "down";
        else direction = "up";
      } else {
        direction = dirs[Math.floor(Math.random() * 4)];
      }

      return {
        headX: trail[trail.length - 1].x,
        headY: trail[trail.length - 1].y,
        direction,
        progress: Math.random(), // Start at random progress for variation
        trail,
        length,
        tailProgress: 0,
      };
    };

    // Initialize snakes only if showing lines
    if (showLines) {
      snakesRef.current = [];
      for (let i = 0; i < SNAKE_COUNT; i++) {
        snakesRef.current.push(createSnake());
      }
    }

    let lastTime = performance.now();
    const PROGRESS_PER_MS = 1 / 1000; // Progress per millisecond (1 cell per second)

    const animate = (currentTime: number) => {
      if (!showLines) {
        // No animation needed if not showing lines
        return;
      }
      
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Calculate progress increment based on time (constant speed)
      const progressIncrement = deltaTime * PROGRESS_PER_MS;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snakesRef.current.forEach((snake) => {
        // Move head forward at constant speed
        snake.progress += progressIncrement;
        
        // Also move tail forward at same speed (once we have enough length)
        if (snake.trail.length > snake.length) {
          snake.tailProgress += progressIncrement;
        }

        // Head reached next cell
        if (snake.progress >= 1) {
          snake.progress = 0;
          const next = nextCell(snake.headX, snake.headY, snake.direction);

          if (!inBounds(next.x, next.y)) {
            // Hit boundary - turn
            snake.direction = turn(snake.direction);
          } else {
            // Move to next cell
            snake.headX = next.x;
            snake.headY = next.y;
            snake.trail.push({ x: snake.headX, y: snake.headY });

            // Random turn (40% chance)
            if (Math.random() > 0.6) {
              snake.direction = turn(snake.direction);
            }
          }
        }

        // Tail reached next cell - remove from trail
        if (snake.tailProgress >= 1 && snake.trail.length > 2) {
          snake.tailProgress = 0;
          snake.trail.shift();
        }

        // Draw the snake
        if (snake.trail.length < 2) return;

        ctx.beginPath();
        ctx.strokeStyle = colorValues.hex;
        ctx.lineWidth = 2;
        ctx.lineCap = "square";
        ctx.lineJoin = "miter";

        // Calculate interpolated tail position
        let startIdx = 0;
        let tailOffset = snake.tailProgress;
        
        if (snake.trail.length > snake.length && snake.trail.length >= 2) {
          const tail0 = toPixel(snake.trail[0].x, snake.trail[0].y);
          const tail1 = toPixel(snake.trail[1].x, snake.trail[1].y);
          const tailX = tail0.x + (tail1.x - tail0.x) * tailOffset;
          const tailY = tail0.y + (tail1.y - tail0.y) * tailOffset;
          ctx.moveTo(tailX, tailY);
          startIdx = 1;
        } else {
          const first = toPixel(snake.trail[0].x, snake.trail[0].y);
          ctx.moveTo(first.x, first.y);
          startIdx = 1;
        }

        // Draw middle segments
        for (let i = startIdx; i < snake.trail.length; i++) {
          const pt = toPixel(snake.trail[i].x, snake.trail[i].y);
          ctx.lineTo(pt.x, pt.y);
        }

        // Draw interpolated head position
        const lastTrail = snake.trail[snake.trail.length - 1];
        const nextHead = nextCell(snake.headX, snake.headY, snake.direction);
        const from = toPixel(lastTrail.x, lastTrail.y);
        const to = toPixel(nextHead.x, nextHead.y);
        const headX = from.x + (to.x - from.x) * snake.progress;
        const headY = from.y + (to.y - from.y) * snake.progress;
        ctx.lineTo(headX, headY);

        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      snakesRef.current = [];
    };
  }, [showLines, colorValues.hex]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: color === "purple" 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)"
          : color === "blue"
          ? "linear-gradient(135deg, #0a0a0a 0%, #0a1a2e 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #0a0a0a 0%, #0a2e1a 50%, #0a0a0a 100%)",
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(${colorValues.rgb}, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${colorValues.rgb}, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      {showLines && (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
