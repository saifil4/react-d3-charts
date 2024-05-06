import React from 'react';
import { Heading, Box, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import CodeHighlighter from './CodeHighlighter';

interface Props {
    heading: string;
    chart: React.FC<any>;
    files: { code: string, name: string }[]
}

const ChartCodeViewer: React.FC<Props> = ({ chart: Chart, heading, files }) => {


    return (
        <Box>
            <Heading as="h1">{heading}</Heading>
            <Chart />
            <br />
            <Tabs>
                <TabList>
                    {files.map((file) => (
                        <Tab key={file.name}>{file.name}</Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {files.map((file) => (
                        <TabPanel>
                            <CodeHighlighter code={file.code} />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>

        </Box>
    );
};

export default ChartCodeViewer;
