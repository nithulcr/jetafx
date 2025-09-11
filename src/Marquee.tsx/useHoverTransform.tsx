// useHoverTransform.ts
// navigation menu hover
import { useRef, useEffect } from "react";

export function useHoverTransform() {
  const textRef = useRef<HTMLSpanElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const text = textRef.current;
    if (!parent || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = Math.min(Math.max(e.clientX - centerX, -7), 7);
      const offsetY = Math.min(Math.max(e.clientY - centerY, -7), 7);
      text.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    const handleMouseLeave = () => {
      text.style.transform = "translate(0, 0)";
    };

    parent.addEventListener("mousemove", handleMouseMove as EventListener);
    parent.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove as EventListener);
      parent.removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, []);

  return { textRef, parentRef };
}
