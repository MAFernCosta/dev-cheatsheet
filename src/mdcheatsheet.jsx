import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import remarkGfm from 'remark-gfm'
import { useParams } from "react-router";
import "./Markdown.css";


function MdCheatSheet() {
  // Get the Cheatsheet name
  const { name } = useParams();

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`/cheatsheets/${name}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);


  return (
    <>
    <section className="container markdown">
      <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
    </section>
    </>
  )
}

export default MdCheatSheet;
