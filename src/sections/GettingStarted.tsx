import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import CodeHighlighter from '../components/CodeHighlighter';


const GettingStarted: React.FC = () => {
    // Implement your component logic here

    return (
        <Box>
            <Heading as="h1">Getting Started</Heading>
            <br />
            <Text>
                Reactive Charts is a approach to build beatiful reactive visualization charts using D3, React and Framer Motion.
                It contains wide variety of charts that are used in visualizations.
            </Text>
            <br />
            <Heading fontSize="24px" as="h2">Installation</Heading>
            <br />
            <CodeHighlighter code={`npm install d3 @types/d3 framer-motion`} />
            <br />
            <br />  
            {/* <Heading fontSize="24px" as="h2">Usage</Heading>
            <br />
            <Text>
                All the charts are exported from the package and can be used as shown below.
            </Text> */}
        </Box>
    );
};

export default GettingStarted;
