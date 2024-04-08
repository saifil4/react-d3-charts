import React from 'react';
import { Heading, Box, Text, VStack, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react';
import ExampleLineChart from './examples/OldApproach';
import CodeHighlighter from '../../components/CodeHighlighter';
import { ExampleLineChartNew } from './examples/ReactApproach';
import * as OldApproachCode from './examples/OldApproach.tsx?raw';
import * as ReactApproachCode from './examples/ReactApproach.tsx?raw';


const About: React.FC = () => {
    // Implement your component logic here

    return (
        <Box>
            <Heading as="h1">About</Heading>
            <br />
            <p>
                Reactive Charts is set of example charts created using D3 and React. The aim of this project is to create a declarative approach to create D3 charts.
            </p>
            <br />
            <Heading fontSize="24px" marginBottom="0.5rem" as="h1">Why</Heading>
            <Text>
                Below is a basic example of a line chart and how normally people try to write the D3 code
            </Text>
            <br />
            <Text>
                The code is less declarative and more imperative. It doesnt look like React code.
                Also direct dom manupulation is done which is not recommended in React.
                It is also difficult to create reusable components.
                That is why we should try and create a declarative approach to create D3 charts.
            </Text> 
            <Tabs>
                <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ExampleLineChart />
                        Source: <a href="https://d3-graph-gallery.com/graph/line_basic.html">D3 Graph Gallery</a>
                    </TabPanel>
                    <TabPanel>
                        <VStack>
                            <CodeHighlighter code={OldApproachCode.default} />
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Text>
                That is why we should try and create a declarative approach to create D3 charts.
                Below is an example of how we can create a declarative approach to create D3 charts.

                We are using svg elements and d3 to create the chart. D3 functions are used to create the scales and axis.
                The chart is created using the data passed to the component.
                It is declarative and easy to understand and we can easily create reusable components.
            </Text>
            <Tabs>
                <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ExampleLineChartNew />
                        Source: <a href="https://d3-graph-gallery.com/graph/line_basic.html">D3 Graph Gallery</a>
                    </TabPanel>
                    <TabPanel>
                        <VStack>
                            <CodeHighlighter code={ReactApproachCode.default} />
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    );
};

export default About;

