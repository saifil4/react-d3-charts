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
            <Heading fontSize="24px" as="h2">Why</Heading><br />
            <Text>
                I came across d3 rougly 5 years ago and I used it to create some really amazing charts. However I made lot of mistakes of implementing it the wrong way in React. I read some articles and wacthed some videos on how to use d3 with react and I was able to create some amazing charts. However I felt that the code was not very declarative and it was very hard to understand. So
                I wanted to create a something that helps us create very amazing delcarative code for creating charts using d3
            </Text>
            <br />
            <Heading fontSize="24px" as="h2">How to use?</Heading><br />
            <Text>
                I wanted to keep this as unopinionated as possible and that is why I didnt create a library but just a collection of examples with minimal abstractions. You can simply install the dependencies and copy the code from the examples to create your own charts.
            </Text>
            {/* <Heading fontSize="24px" as="h2">Usage</Heading>
            <br />
            <Text>
                All the charts are exported from the package and can be used as shown below.
            </Text> */}
        </Box>
    );
};

export default GettingStarted;
