import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed }: { text: string; speed: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter(); // Start the typewriter effect on component mount
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
