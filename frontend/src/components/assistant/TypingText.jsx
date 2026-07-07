import { useEffect, useState } from "react";

import MarkdownRenderer from "./MarkdownRenderer";

const TypingText = ({
  text = "",
  speed = 15,
}) => {

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {

    setDisplayed("");

    let index = 0;

    const timer = setInterval(() => {

      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {

        clearInterval(timer);

      }

    }, speed);

    return () => clearInterval(timer);

  }, [text, speed]);

  return (

    <MarkdownRenderer text={displayed} />

  );

};

export default TypingText;