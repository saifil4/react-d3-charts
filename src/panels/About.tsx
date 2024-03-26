import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

interface Props {
    // Define your component's props here
}

const About: React.FC<Props> = (props) => {
    // Implement your component logic here

    return (
        <Box>
            <Heading as="h1">About</Heading>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat molestias assumenda delectus reiciendis excepturi iure doloribus, deserunt nam nostrum nobis eos in id at perferendis impedit aperiam eveniet pariatur!
        </Box>
    );
};

export default About;
