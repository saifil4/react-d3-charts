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
                Reactive Charts is an collection of examples for visualizations, created using D3 and React. The aim of this project is to create a declarative approach to create D3 charts.
            </p>
            <br />
            <Heading fontSize="24px" marginBottom="0.5rem" as="h2">Why</Heading>
            <Text>
                To answer this lets take an example.
                Below is a basic example of a line chart and how normally people try to write the D3 code in react.
            </Text>
            <br />
            <Tabs>
                <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ExampleLineChart />
                        <Text textAlign="center">
                            Source: <a href="https://d3-graph-gallery.com/graph/line_basic.html">D3 Graph Gallery</a>
                        </Text>
                    </TabPanel>
                    <TabPanel>
                        <VStack>
                            <CodeHighlighter code={OldApproachCode.default} />
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Text>
                We often make this mistake of writing D3 code in React components. We directly use dom manupulation to create the chart.
                The code is less declarative and more imperative. It is also difficult to create reusable components.
                That is why we should try and create a declarative approach to create D3 charts.
            </Text>
            <br />
            <Heading fontSize="24px" marginBottom="0.5rem" as="h2">
                The Reactive Approach
            </Heading>
            <Text>
                Below is the same chart but instead of dom manupulation we are using a declarative approach to create the chart.
            </Text>
            <Tabs>
                <TabList>
                    <Tab>Preview</Tab>
                    <Tab>Code</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ExampleLineChartNew />
                    </TabPanel>
                    <TabPanel>
                        <VStack>
                            <CodeHighlighter code={ReactApproachCode.default} />
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Text>
                If you take a look at the code, It is much simpler to understand and easy to identify and create and create reusable components.
            </Text>
        </Box>
    );
};

export default About;

