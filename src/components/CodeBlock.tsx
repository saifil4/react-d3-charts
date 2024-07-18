import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


type CodeBlockProps = {
    code: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    return (
        <div style={{ width: "100%" }}>
            <SyntaxHighlighter
                customStyle={{ borderRadius: "10px", fontSize: "14px"}}
                showLineNumbers={true} language="typescript" style={dracula}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;