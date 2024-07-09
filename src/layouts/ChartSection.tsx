import React from 'react';
import { Heading, Box, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import CodeBlock from 'components/CodeBlock';

type Props = {
    heading: string;
    chart: React.FC<any>;
    files: { code: string, name: string }[];
    isInProgress: boolean;
}

const InProgressIndication: React.FC = () =>
    <Box>
        <br />
        <div style={{ background: "#F7F8F9", textAlign: 'center', borderRadius: '10px' }}>
            <Heading as="h1">In Progress</Heading>
        </div>
        <br />
    </Box>

const ChartSection: React.FC<Props> = ({ chart: Chart, heading, files, isInProgress = true }) => {

    if (isInProgress) return <InProgressIndication />

    return (
        <Box>
            <Heading as="h1">{heading}</Heading>
            <br />
            <div style={{ background: "#f5f6fa", textAlign: 'center', borderRadius: '10px' }}>
                <Chart />
            </div>
            <br />
            <Tabs borderRadius="10px" overflow="hidden" backgroundColor="#282a36">
                <TabList backgroundColor="#2c3e50" borderBottom="none">
                    {files.map((file) => (
                        <Tab
                            py="15px"
                            color="white"
                            _selected={{ borderBottom: "2px solid #85B8FF", color: "#85B8FF", fontWeight: "bold" }}
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
    )
}


export default ChartSection;
