import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


type CodeHighlighterProps = {
    code: string
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ code }) => {
    const codeString = code;
    return (
        <div style={{width: "100%"}}>
            <SyntaxHighlighter language="javascript"  style={dracula}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeHighlighter;