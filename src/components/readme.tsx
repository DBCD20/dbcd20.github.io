import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";

export default function ReadmePage({content}: {content: string}){
    return (
        <article className="markdown-body">
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeHighlight]}
            >
                {content}
            </ReactMarkdown>
        </article>
    )
}

export  async function getServerSideProps() {
    const response      = await fetch("");
    const fileContent   = await response.text();
    
    return { props: { content: fileContent}};
}