import React from 'react';
import { Heading, Box, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import CodeBlock from 'components/CodeBlock';

type Props = {
    heading: string;
    chart: React.FC<any>;
    files: { code: string, name: string }[]
}

const ChartSection: React.FC<Props> = ({ chart: Chart, heading, files }) =>
    <Box>
        <Heading as="h1">{heading}</Heading>
        <Chart />
        <br />
        <br />
        <Tabs borderRadius="10px" overflow="hidden" backgroundColor="#282a36">
            <TabList backgroundColor="#2c3e50" borderBottom="none">
                {files.map((file) => (
                    <Tab
                        py="15px" 
                        color="white" 
                        _selected={{ borderBottom: "2px solid #85B8FF", color: "#85B8FF", fontWeight: "bold"}} 
                        key={file.name}>{file.name}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {files.map((file) => (
                    <TabPanel>
                        <CodeBlock code={file.code} />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    </Box>

export default ChartSection;
