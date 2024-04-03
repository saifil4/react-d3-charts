import React from 'react';
import { Heading, Box } from '@chakra-ui/react';


const About: React.FC = () => {
    // Implement your component logic here

    return (
        <Box>
            <Heading as="h1">Why</Heading>
            <br />
            <p>
                To create a approach that is easy to use, works well with existing React codebases and is highly customizable and flexible.
            </p>
        </Box>
    );
};

export default About;
