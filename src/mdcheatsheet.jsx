import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import remarkGfm from 'remark-gfm'
import { useParams } from "react-router";
import { parse } from "html-parser";
import "./cheatsheetsStyles/markdown.css";


function MdCheatSheet({section}) {
  // Get the Cheatsheet path
  const { path } = useParams();

  const pathToFetch = "https://maferncosta.github.io/mycheatsheets";
  

  const [markdownContent, setMarkdownContent] = useState("");

  const [data, setData] = useState(null);
  const completePath = `${pathToFetch}${atob(path)}`;
  console.log(completePath, path);

  console.log(`Path: ${section}`);
  useEffect(() => {
    fetch(completePath)
      .then(response => response.text())
      .then(text => setData(text))
      .catch(error => console.error('Error fetching data:', error));
  }, [path]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="markdown mb-5">
        <Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>
      </section>
    </>
  )
}

export default MdCheatSheet;
