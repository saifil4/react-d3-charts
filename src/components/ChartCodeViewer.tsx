import React from 'react';
import { Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
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
            <br />
            <Tabs>
                <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <br />
                        <Chart />
                    </TabPanel>
                    <TabPanel w="100%">
                        <CodeHighlighter code={code} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default ChartCodeViewer;
