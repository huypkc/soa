import { useState, useEffect } from "react";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } =
    typeof window !== "undefined" ? window : ({} as Window);
  return {
    width,
    height,
    breakpoint: getBreakpoint(width),
  };
}

export enum Breakpoint {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

function getBreakpoint(width: number) {
  if (typeof window === "undefined") return Breakpoint.xl;
  if (width >= 1536) return Breakpoint["2xl"];
  if (width >= 1280) return Breakpoint.xl;
  if (width >= 1024) return Breakpoint.lg;
  if (width >= 768) return Breakpoint.md;
  return Breakpoint.sm;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [setWindowDimensions]);

  return windowDimensions;
}
