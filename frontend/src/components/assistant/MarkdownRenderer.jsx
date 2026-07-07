import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ text }) => {

  return (

    <div className="prose prose-invert max-w-none">

      <ReactMarkdown remarkPlugins={[remarkGfm]}>

        {text}

      </ReactMarkdown>

    </div>

  );

};

export default MarkdownRenderer;
