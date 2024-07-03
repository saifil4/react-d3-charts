import { useState } from 'react';
import { Tabs, TabPanels, TabPanel, Hide, Box } from '@chakra-ui/react';
import sectionList from 'sections/section-list';
import ChartSection from 'layouts/ChartSection';
import GettingStarted from 'sections/GettingStarted';
import SideBar from 'layouts/SideBar';
import NavBar from 'layouts/NavBar';

function App() {

  const [selectedPanel, setSelectedPanel] = useState<string>('getting-started');

  const handleClick = (panel: string) => setSelectedPanel(panel);

  return (
    <Box h="100%">
      <Box h="60px">
        <NavBar />
      </Box>
      <Box h="calc(100% - 60px)">
        <Tabs variant='soft-rounded' display="grid" gridTemplateColumns="250px auto" height="100%">
          <Hide below="md">
            <SideBar handleClick={handleClick} />
          </Hide>
          <TabPanels as="main" minW="0" overflow="auto">
            <TabPanel p="10" key="getting-started">
              <GettingStarted />
            </TabPanel>
            {
              sectionList.map((group) => (
                group.sections.map(({ heading, component, files, status }) => (
                  <TabPanel key={heading} p="10">
                    {selectedPanel === heading &&
                      <ChartSection isInProgress={status === 'in-progress'} heading={heading} chart={component} files={files} />}
                  </TabPanel>
                ))
              ))
            }
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default App

