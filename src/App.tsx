import { useState } from 'react';
import { Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { chartList } from 'charts/chart-list';
import ChartSection from 'layouts/ChartSection';
import GettingStarted from 'sections/GettingStarted';
import SideBar from 'layouts/SideBar';

function App() {

  const [selectedPanel, setSelectedPanel] = useState<string>('getting-started');

  const handleClick = (panel: string) => setSelectedPanel(panel);

  return (
    <Tabs variant='soft-rounded' display="grid" gridTemplateColumns="300px auto" height="100%">
      <SideBar handleClick={handleClick} />
      <TabPanels as="main" minW="0" overflow="auto">
        <TabPanel p="10" key="getting-started">
          <GettingStarted />
        </TabPanel>
        {
          chartList.map((group) => (
            group.sections.map(({ heading, component, files }) => (
              <TabPanel key={heading} p="10">
                {selectedPanel === heading &&
                  <ChartSection heading={heading} chart={component} files={files} />}
              </TabPanel>
            ))
          ))
        }
      </TabPanels>
    </Tabs>
  )
}

export default App

