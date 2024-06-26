import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import CodeBlock from '../components/CodeBlock';


const GettingStarted: React.FC = () => {
    // Implement your component logic here

    return (
        <Box>
            <Heading as="h1">Getting Started</Heading>
            <br />
            <Text>
                React D3 Charts is a compilation of visualization examples built with React, D3, and Framer Motion. The project aims to provide a declarative method for creating D3 charts.
            </Text>
            <br />
            <Heading fontSize="24px" as="h2">Installation</Heading>
            <br />
            <CodeBlock code={`npm install d3 @types/d3 framer-motion`} />
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
