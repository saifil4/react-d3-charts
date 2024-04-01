import React from 'react';
import { Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { LineChart } from '../charts/linechart';
import { CopyBlock, dracula } from 'react-code-blocks';
import * as CodeLineChart from '../charts/linechart/index.tsx?raw';

interface Props {
    // Define your component's props here
}

const LineChartPanel: React.FC<Props> = (props) => {


    return (
        <Box>
            <Heading as="h1">Simple Line Chart</Heading>
            <br />
            <Tabs>
                <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <br />
                        <LineChart />
                    </TabPanel>
                    <TabPanel w="100%">
                        <CopyBlock
                            text={CodeLineChart.default}
                            language="javascript"
                            showLineNumbers={true}
                            wrapLongLines={true}
                            codeContainerStyle={{ overflow: 'auto' }}
                            theme={dracula}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default LineChartPanel;
