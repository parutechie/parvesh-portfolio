
import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const coords = { x: 0, y: 0 };
  const circlesRef = useRef([]);

  const colors = [
    "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979",
    "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979",
    "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979", "#7c7979"
  ];

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colors]);

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </div>
  );
};

export default Cursor;