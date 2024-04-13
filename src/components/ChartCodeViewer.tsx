import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import CodeHighlighter from './CodeHighlighter';

interface Props {
    heading: string;
    code: string;
    chart: React.FC<any>;
}

const ChartCodeViewer: React.FC<Props> = ({ chart: Chart, code, heading }) => {
    return (
        <Box>
            <Heading as="h1">{heading}</Heading>
            <Chart />
            <br />
            <CodeHighlighter code={code} />
        </Box>
    );
};

export default ChartCodeViewer;
