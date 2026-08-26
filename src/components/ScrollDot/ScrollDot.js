import { useEffect, useState } from "react";
import "./ScrollDot.scss";

function ScrollDot() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setPosition(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-dot__track">
      <div className="scroll-dot__dot" style={{ top: `${position}%` }} />
    </div>
  );
}
export default ScrollDot;
