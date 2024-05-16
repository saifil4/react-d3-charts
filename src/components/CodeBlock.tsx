import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


type CodeBlockProps = {
    code: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const codeString = code;
    return (
        <div style={{ width: "100%" }}>
            <SyntaxHighlighter
                customStyle={{ borderRadius: "10px" }}
                showLineNumbers={true} language="typescript" style={dracula}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;