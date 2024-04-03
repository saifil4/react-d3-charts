import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import { CopyBlock, dracula } from 'react-code-blocks';



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
            <CopyBlock
                language="bash"
                text="npm install @reactive-charts/core"
                theme={dracula} />
        </Box>
    );
};

export default GettingStarted;
